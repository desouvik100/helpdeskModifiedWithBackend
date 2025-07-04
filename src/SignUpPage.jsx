import React from "react";

function SignUpPage({ goTo }) {
  return (
    <div className="container">
      <h2>Create Account</h2>

      <div>
        <label>Username</label>
        <input type="text" placeholder="Choose a username" />

        <label>Password</label>
        <input type="password" placeholder="Choose a password" />

        <button>Sign Up</button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="#" onClick={() => goTo("login")}>Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
