import React from "react";

function NewTicketPage() {
  return (
    <div className="container">
      <h2>Create New Ticket</h2>

      <div>
        <label>Subject</label>
        <input type="text" placeholder="Enter subject" />

        <label>Department</label>
        <select>
          <option>Technical Support</option>
          <option>IT</option>
          <option>Operations</option>
          <option>Admin</option>
        </select>

        <label>Priority</label>
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Description</label>
        <textarea rows="4" placeholder="Describe the issue..."></textarea>

        <button>Submit Ticket</button>
      </div>
    </div>
  );
}

export default NewTicketPage;
