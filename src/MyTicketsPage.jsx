import React from "react";

function MyTicketsPage() {
  const tickets = [
    { id: 1, subject: "Login not working", status: "Open", priority: "High", date: "2025-07-01" },
    { id: 2, subject: "Email not syncing", status: "Pending", priority: "Medium", date: "2025-06-28" },
    { id: 3, subject: "Need VPN access", status: "Closed", priority: "Low", date: "2025-06-25" },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>My Tickets</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={cellStyle}>Ticket ID</th>
            <th style={cellStyle}>Subject</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Priority</th>
            <th style={cellStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id} style={rowStyle}>
              <td style={cellStyle}>{ticket.id}</td>
              <td style={cellStyle}>{ticket.subject}</td>
              <td style={cellStyle}>{ticket.status}</td>
              <td style={cellStyle}>{ticket.priority}</td>
              <td style={cellStyle}>{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#f4f7fc",
  color: "#333",
  padding: "30px",
  borderRadius: "8px",
  maxWidth: "900px",
  margin: "30px auto",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const headerStyle = {
  marginBottom: "20px",
  textAlign: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const headerRowStyle = {
  background: "#e0e6f7",
};

const rowStyle = {
  background: "#ffffff",
};

const cellStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  textAlign: "left",
};

export default MyTicketsPage;
