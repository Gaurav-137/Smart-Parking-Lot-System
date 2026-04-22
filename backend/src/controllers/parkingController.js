const service = require("../services/parkingService");

exports.vehicleEntry = (req, res) => {
  try {
    const ticket = service.allocateSpot(req.body);
    res.json(ticket);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.vehicleExit = (req, res) => {
  try {
    const result = service.releaseSpot(req.body.ticketId);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getAvailability = (req, res) => {
  res.json(service.getAvailableSpots());
};