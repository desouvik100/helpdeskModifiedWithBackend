
import React, { useState } from "react";

const users = [
  { username: "Souvik170", password: "Souvik1234", role: "admin" },
  { username: "RiyaAdmin", password: "RiyaPass!", role: "admin" },
  { username: "AjayUser", password: "Ajay123", role: "user" },
  { username: "MeenaOps", password: "Ops@2024", role: "operator" }
];

function LoginPage({ goTo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hoverLink, setHoverLink] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Both fields are required!");
      return;
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      setError("Invalid credentials!");
      return;
    }

    setError("");
    localStorage.setItem("token", "valid-jwt-token");
    localStorage.setItem("role", user.role);

    goTo("dashboard");
  };

  const baseLinkStyle = {
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "color 0.2s ease",
  };

  const getLinkStyle = (linkName) => ({
    ...baseLinkStyle,
    color: hoverLink === linkName ? "#2563eb" : "#1e40af",
  });

  return (
    <div className="container">
      <h2>Helpdesk System</h2>

      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin}>Login</button>

      <p
        style={getLinkStyle("signup")}
        onMouseEnter={() => setHoverLink("signup")}
        onMouseLeave={() => setHoverLink("")}
        onClick={() => goTo("signup")}
      >
        Don't have an account? Sign Up
      </p>
    </div>
  );
}

export default LoginPage;
