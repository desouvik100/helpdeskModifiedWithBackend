
import React, { useState, useEffect } from "react";
import Dashboard from "./UserDashboard";
import NewTicketPage from "./NewTicketPage";
import MyTicketsPage from "./MyTicketsPage";
import ProfilePage from "./ProfilePage";
import FeedbackPage from "./FeedbackPage";
import AdminDashboard from "./AdminDashboard";
import OperationDashboard from "./OperationDashboard";

function SidebarLayout({ goTo }) {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("user");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "user");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    goTo("login");
  };

  const renderPage = () => {
    if (role === "admin") return <AdminDashboard />;
    if (role === "operator") return <OperationDashboard />;
    if (role === "user") {
      if (page === "dashboard") return <Dashboard />;
      if (page === "ticket") return <NewTicketPage />;
      if (page === "mytickets") return <MyTicketsPage />;
      if (page === "profile") return <ProfilePage />;
      if (page === "feedback") return <FeedbackPage />;
    }
    return <Dashboard />;
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={sidebarStyle}>
        <h3>Helpdesk</h3>
        {role === "user" && (
          <>
            <p onClick={() => setPage("dashboard")}>Dashboard</p>
            <p onClick={() => setPage("ticket")}>New Ticket</p>
            <p onClick={() => setPage("mytickets")}>My Tickets</p>
            <p onClick={() => setPage("profile")}>Profile</p>
            <p onClick={() => setPage("feedback")}>Feedback</p>
          </>
        )}
        {role === "admin" && <p>Welcome Admin!</p>}
        {role === "operator" && <p>Operations Panel</p>}
        <p onClick={handleLogout} style={{ color: "red", marginTop: "20px" }}>
          Logout
        </p>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>{renderPage()}</div>
    </div>
  );
}

const sidebarStyle = {
  width: "200px",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  height: "100vh",
};

export default SidebarLayout;
