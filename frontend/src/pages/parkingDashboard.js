import React, { useState } from "react";
import VehicleForm from "../components/VehicleForm";
import ExitForm from "../components/ExitForm";
import { parkVehicle, exitVehicle } from "../services/parkingService";

function ParkingDashboard() {
  const [vehicleType, setVehicleType] = useState("CAR");
  const [ticketId, setTicketId] = useState("");

  const handleEntry = async () => {
    try {
      const res = await parkVehicle({
        type: vehicleType,
        licensePlate: "RJ14-1234",
      });

      alert(`✅ Parked!\nTicket ID: ${res.id}`);
      setTicketId(res.id);
    } catch (err) {
      alert(err.error || "Error parking vehicle");
    }
  };

  const handleExit = async () => {
    try {
      const res = await exitVehicle(ticketId);
      alert(`💰 Fee: ₹${res.fee}`);
      setTicketId("");
    } catch (err) {
      alert(err.error || "Error exiting vehicle");
    }
  };

  return (
    <div className="container">
      <h1>🚗 Smart Parking</h1>

      <div className="section">
        <VehicleForm
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          onSubmit={handleEntry}
        />
      </div>

      <div className="section">
        <ExitForm
          ticketId={ticketId}
          setTicketId={setTicketId}
          onExit={handleExit}
        />
      </div>
    </div>
  );
}

export default ParkingDashboard;