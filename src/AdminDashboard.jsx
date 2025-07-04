import React from "react";

function AdminDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#2d3436", color: "#fff", padding: "20px" }}>
        <h3>Admin Panel</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" }}>Dashboard</li>
          <li style={{ margin: "10px 0" }}>Users</li>
          <li style={{ margin: "10px 0" }}>Tickets</li>
          <li style={{ margin: "10px 0" }}>Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f1f2f6" }}>
        <h2>Welcome, Admin</h2>
        <p>This is your dashboard.</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ background: "#0984e3", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Total Users</h4>
            <p>25</p>
          </div>
          <div style={{ background: "#00b894", color: "#fff", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Total Tickets</h4>
            <p>40</p>
          </div>
          <div style={{ background: "#fdcb6e", color: "#000", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <h4>Pending Tickets</h4>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
