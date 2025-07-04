import React from "react";

function AdminTicketsPage() {
  const tickets = [
    {
      id: "TCK-1010",
      subject: "Reset password issue",
      user: "Rita Sen",
      status: "Open",
      priority: "High",
      department: "Support"
    },
    {
      id: "TCK-1011",
      subject: "VPN access",
      user: "Suman Pal",
      status: "Closed",
      priority: "Medium",
      department: "IT"
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>All Tickets</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f1f2f6" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Ticket ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Subject</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>User</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Department</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Priority</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.subject}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.user}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.department}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.priority}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTicketsPage;
