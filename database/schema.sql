CREATE TABLE parking_spots (
  id VARCHAR(50) PRIMARY KEY,
  type VARCHAR(10),
  is_available BOOLEAN,
  floor INT
);

CREATE TABLE tickets (
  id VARCHAR(50) PRIMARY KEY,
  license_plate VARCHAR(20),
  vehicle_type VARCHAR(10),
  spot_id VARCHAR(50),
  entry_time TIMESTAMP,
  exit_time TIMESTAMP,
  fee FLOAT
);