
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import SidebarLayout from "./SidebarLayout";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import NewTicketPage from "./NewTicketPage";

function App() {
  const [screen, setScreen] = useState("login");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setScreen("dashboard");
    }
  }, []);

  const goTo = (page) => setScreen(page);

  return (
    <>
      {screen === "login" && <LoginPage goTo={goTo} />}
      {screen === "signup" && <SignUpPage goTo={goTo} />}
      {screen === "forgot" && <ForgotPasswordPage goTo={goTo} />}
      {screen === "ticket" && <NewTicketPage />}
      {screen === "dashboard" && <SidebarLayout goTo={goTo} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
