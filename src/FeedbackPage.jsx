import React from "react";

function FeedbackPage() {
  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Submit Feedback</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Subject</label><br />
        <input type="text" placeholder="Enter subject" style={{ width: "100%", padding: "10px" }} />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Feedback</label><br />
        <textarea rows="5" placeholder="Write your feedback..." style={{ width: "100%", padding: "10px" }}></textarea>
      </div>

      <button style={{ padding: "10px 20px", background: "#4b7bec", color: "#fff", border: "none" }}>
        Submit Feedback
      </button>
    </div>
  );
}

export default FeedbackPage;
