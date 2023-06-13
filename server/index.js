const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const refreshTokenRoutes = require("./routes/refresh");
const { logger } = require('./middleware')
const cors = require('cors')

const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const app = express()
const port = process.env.PORT || 4001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(logger)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use("/", refreshTokenRoutes);

app.get("/", (req, res) => {
    res.send('Welcome to our spirit-ed backend')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})