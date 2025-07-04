import React from "react";

function AssignedTicketsPage() {
  const tickets = [
    {
      id: "TCK-1005",
      subject: "Network issue",
      priority: "High",
      department: "IT",
      status: "Pending"
    },
    {
      id: "TCK-1006",
      subject: "System crash",
      priority: "Medium",
      department: "Support",
      status: "Pending"
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>Assigned Tickets</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f1f2f6" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Ticket ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Subject</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Priority</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Department</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Status</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.subject}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.priority}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.department}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{ticket.status}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                <button style={{ marginRight: "10px", padding: "5px 10px", background: "#00b894", color: "#fff", border: "none" }}>
                  Approve
                </button>
                <button style={{ padding: "5px 10px", background: "#d63031", color: "#fff", border: "none" }}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignedTicketsPage;
