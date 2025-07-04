import React from "react";

function AdminUsersPage() {
  const users = [
    { id: 1, name: "Suman Pal", email: "suman@example.com", department: "User", role: "User" },
    { id: 2, name: "Rita Sen", email: "rita@example.com", department: "Operations", role: "Operation" },
    { id: 3, name: "Ankit Roy", email: "ankit@example.com", department: "Admin", role: "Admin" },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>All Users</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f1f2f6" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Department</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.department}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsersPage;
