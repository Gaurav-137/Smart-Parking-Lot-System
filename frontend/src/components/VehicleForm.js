import React from "react";

function VehicleForm({ vehicleType, setVehicleType, onSubmit }) {
  return (
    <div>
      <h3>Enter Vehicle</h3>

      <select
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
      >
        <option value="CAR">Car</option>
        <option value="BIKE">Bike</option>
        <option value="BUS">Bus</option>
      </select>

      <button onClick={onSubmit}>🚘 Park Vehicle</button>
    </div>
  );
}

export default VehicleForm;