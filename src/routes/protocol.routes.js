const express = require("express");
const router = express.Router();
const { listProtocols } = require("../controllers/protocol.controller");

router.get("/", listProtocols);

module.exports = router;