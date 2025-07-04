import React from "react";

function ForgotPasswordPage({ goTo }) {
  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <div>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <button>Submit</button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          <a href="#" onClick={() => goTo("login")}>Back to Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
