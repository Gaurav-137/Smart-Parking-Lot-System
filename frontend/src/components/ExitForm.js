import React from "react";

function ExitForm({ ticketId, setTicketId, onExit }) {
  return (
    <div>
      <h3>Exit Vehicle</h3>

      <input
        type="text"
        placeholder="Enter Ticket ID"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
      />

      <button className="exit-btn" onClick={onExit}>
        🚪 Exit Parking
      </button>
    </div>
  );
}

export default ExitForm;