const axios = require("axios").default;

const refreshTokenController = async (req, res) => {
    try {
        const options = {
            method: "POST",
            url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: process.env.AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code: "{yourAuthorizationCode}",
                redirect_uri: process.env.AUTH0_DOMAIN,
            }),
        };

        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = refreshTokenController;
