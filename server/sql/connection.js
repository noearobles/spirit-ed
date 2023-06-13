const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });
const mysql = require('mysql2')

class Connection {
    constructor() {
        if (!this.pool) {
            console.log('creating mysql connection...')
            console.log(`https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`)
            console.log(`${process.env.DB_HOST}`)
            console.log(`${process.env.DB_PORT}`)

            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DEFAULT_SCHEMA
            })

            return this.pool
        }

        return this.pool
    } s
}

const instance = new Connection()

module.exports = instance;
