const spots = [];
const tickets = {};

function initializeSpots() {
  const types = ["BIKE", "CAR", "BUS"];

  let id = 1;
  for (let floor = 1; floor <= 2; floor++) {
    types.forEach(type => {
      for (let i = 0; i < 5; i++) {
        spots.push({
          id: id.toString(),
          type,
          isAvailable: true,
          floor
        });
        id++;
      }
    });
  }
}

initializeSpots();

module.exports = { spots, tickets };