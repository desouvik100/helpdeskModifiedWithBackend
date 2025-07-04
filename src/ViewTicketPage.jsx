import React from "react";

function ViewTicketPage() {
  const ticket = {
    id: "TCK-1002",
    subject: "Email not syncing",
    department: "Technical Support",
    priority: "Medium",
    status: "Pending",
    description: "My work email is not syncing on Outlook. Please resolve it as soon as possible.",
    dateCreated: "2025-06-28",
    lastUpdated: "2025-06-29"
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2>View Ticket</h2>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", background: "#f9f9f9" }}>
        <p><strong>Ticket ID:</strong> {ticket.id}</p>
        <p><strong>Subject:</strong> {ticket.subject}</p>
        <p><strong>Department:</strong> {ticket.department}</p>
        <p><strong>Priority:</strong> {ticket.priority}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p><strong>Date Created:</strong> {ticket.dateCreated}</p>
        <p><strong>Last Updated:</strong> {ticket.lastUpdated}</p>
        <p><strong>Description:</strong><br /> {ticket.description}</p>
      </div>
    </div>
  );
}

export default ViewTicketPage;
