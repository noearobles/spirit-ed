const express = require("express");
const refreshTokenController = require("../controllers/refresh");

const router = express.Router();

router.get("/refresh", refreshTokenController);

module.exports = router;
