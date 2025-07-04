import React from "react";

function ProfilePage() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>My Profile</h2>

      <div style={fieldWrapper}>
        <label style={labelStyle}>Name</label>
        <input type="text" defaultValue="Souvik Dey" style={inputStyle} />
      </div>

      <div style={fieldWrapper}>
        <label style={labelStyle}>Email</label>
        <input type="email" defaultValue="souvik@example.com" style={inputStyle} />
      </div>

      <div style={fieldWrapper}>
        <label style={labelStyle}>Phone</label>
        <input type="text" defaultValue="+91-0123456789" style={inputStyle} />
      </div>

      <div style={fieldWrapper}>
        <label style={labelStyle}>Department</label>
        <select style={inputStyle} defaultValue="User">
          <option>User</option>
          <option>Technical Support</option>
          <option>Operation</option>
          <option>Admin</option>
        </select>
      </div>

      <button style={buttonStyle}>Save Profile</button>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#f4f7fc",
  color: "#333",
  padding: "30px",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "30px auto",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const headerStyle = {
  marginBottom: "25px",
  textAlign: "center",
};

const fieldWrapper = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#20bf6b",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "4px",
};

export default ProfilePage;
