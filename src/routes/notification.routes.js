const express = require("express");
const router = express.Router();
const { listNotifications } = require("../controllers/notification.controller");

router.get("/", listNotifications);

module.exports = router;
