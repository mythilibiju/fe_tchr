import React from "react";
import { Link, useNavigate } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "8px 15px",
  cursor: "pointer",
  borderRadius: "5px",
};

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/home" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/students" style={{ color: "white", textDecoration: "none" }}>
          Students
        </Link>
      </div>
      <button style={buttonStyle} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
