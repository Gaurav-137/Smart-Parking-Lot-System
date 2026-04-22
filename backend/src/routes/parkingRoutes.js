const express = require("express");
const router = express.Router();
const controller = require("../controllers/parkingController");

router.post("/entry", controller.vehicleEntry);
router.post("/exit", controller.vehicleExit);
router.get("/availability", controller.getAvailability);

module.exports = router;