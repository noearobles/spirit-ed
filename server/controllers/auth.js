const axios = require("axios");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");


const saltRounds = 10;

const signup = (req, res) => {
    const { username, password } = req.body;
    let sql = "INSERT INTO usersCredentials (username, password) VALUES (?, ?)";

    bcrypt.hash(password, saltRounds, function (err, hash) {
        sql = mysql.format(sql, [username, hash]);

        pool.query(sql, (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY")
                    return res.status(409).send("Username is taken");
                return handleSQLError(res, err);
            }
            return res.send("Sign Up Successful");
        });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;
    let responseSent = false;

    let sql = "SELECT * FROM usersCredentials WHERE username = ?";
    sql = mysql.format(sql, [username]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        if (!rows.length) return sendResponse(404, "No matching users");

        const hash = rows[0].password;
        bcrypt
            .compare(password, hash)
            .then((result) => {
                if (!result) return sendResponse(400, "Invalid password");
                const data = { ...rows[0] };
                data.password = "REDACTED";
                const accessToken = jwt.sign(data, "secret");
                sendResponse(200, "Login successful, Welcome Back", { username: data.username });
            })
            .catch((e) => {
                sendResponse(500, "An error occurred during password comparison");
            })
            .finally(() => {
                if (!responseSent) {
                    axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        data: {
                            grant_type: "password",
                            username: username,
                            password: password,
                            audience: process.env.AUTH0_IDENTITY,
                            connection: "Username-Password-Authentication",
                            client_id: process.env.AUTH0_CLIENT_ID,
                            client_secret: process.env.AUTH0_CLIENT_SECRET,
                        },
                    })
                        .then((response) => {
                            const { access_token } = response.data;
                            res.cookie("access_token", access_token, {
                                httpOnly: true,
                                secure: false,
                                maxAge: 24 * 60 * 60 * 1000,
                            });
                        })
                        .catch((e) => {
                            sendResponse(500, "An error occurred during authentication");
                        });
                }
            });
    });

    function sendResponse(statusCode, message, data = null) {
        responseSent = true;
        if (data) {
            res.status(statusCode).json({ message, ...data });
        } else {
            res.status(statusCode).send(message);
        }
    }
};

module.exports = {
    signup,
    login,
};
