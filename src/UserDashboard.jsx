import React from "react";

function UserDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      


      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f1f2f6" }}>
        <h2>Welcome, User</h2>
        <p>This is your dashboard.</p>

        {/* Simple Ticket Summary */}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ background: "#0984e3", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Total Tickets</h4>
            <p>5</p>
          </div>
          <div style={{ background: "#00b894", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Open</h4>
            <p>2</p>
          </div>
          <div style={{ background: "#d63031", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Closed</h4>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
