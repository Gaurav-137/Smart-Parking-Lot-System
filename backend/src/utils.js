// backend/src/utils.js

function calculateHours(entryTime, exitTime) {
  return (exitTime - entryTime) / (1000 * 60 * 60);
}

function calculateFee(hours, type) {
  const rates = {
    BIKE: 10,
    CAR: 20,
    BUS: 50
  };

  return Math.ceil(hours) * rates[type];
}

module.exports = {
  calculateHours,
  calculateFee
};