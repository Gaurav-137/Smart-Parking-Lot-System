// backend/src/services/parkingService.js

const { spots, tickets } = require("../models/dataStore");
const { v4: uuidv4 } = require("uuid");
const { calculateHours, calculateFee } = require("../utils");

// 🚘 Allocate parking spot
function allocateSpot(vehicle) {
  const spot = spots.find(
    (s) => s.type === vehicle.type && s.isAvailable
  );

  if (!spot) throw new Error("No spot available");

  spot.isAvailable = false;

  const ticket = {
    id: uuidv4(),
    vehicle,
    spotId: spot.id,
    entryTime: new Date(),
  };

  tickets[ticket.id] = ticket;
  return ticket;
}

// 🚪 Release parking spot
function releaseSpot(ticketId) {
  const ticket = tickets[ticketId];
  if (!ticket) throw new Error("Invalid ticket");

  const spot = spots.find((s) => s.id === ticket.spotId);
  if (!spot) throw new Error("Parking spot not found");

  spot.isAvailable = true;

  ticket.exitTime = new Date();

  // ⏱ Use utils for clean logic
  const hours = calculateHours(ticket.entryTime, ticket.exitTime);
  ticket.fee = calculateFee(hours, ticket.vehicle.type);

  return ticket;
}

// 📊 Get available spots
function getAvailableSpots() {
  return spots.filter((s) => s.isAvailable);
}

module.exports = {
  allocateSpot,
  releaseSpot,
  getAvailableSpots,
};