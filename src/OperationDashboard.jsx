import React from "react";

function OperationDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#2d3436", color: "#fff", padding: "20px" }}>
        <h3>Operations</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" }}>Dashboard</li>
          <li style={{ margin: "10px 0" }}>Assigned Tickets</li>
          <li style={{ margin: "10px 0" }}>Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f1f2f6" }}>
        <h2>Welcome, Operations</h2>
        <p>This is your dashboard.</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ background: "#fdcb6e", color: "#000", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Pending Tickets</h4>
            <p>4</p>
          </div>
          <div style={{ background: "#6c5ce7", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Approved</h4>
            <p>10</p>
          </div>
          <div style={{ background: "#d63031", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Rejected</h4>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperationDashboard;
