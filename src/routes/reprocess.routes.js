const express = require("express");
const router = express.Router();
const {
  reprocessWebhook,
  reprocessByEmail,
  reprocessByEvent
} = require("../controllers/reprocess.controller");

router.post("/webhook", reprocessWebhook);
router.post("/email", reprocessByEmail);
router.post("/event", reprocessByEvent);

module.exports = router;
