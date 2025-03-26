import React from "react";
import { useNavigate } from "react-router-dom";

const loginContainer = {
  textAlign: "center",
  marginTop: "100px",
};

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "250px",
  borderRadius: "5px",
  border: "1px solid gray",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div style={loginContainer}>
      <h2>Teacher Login</h2>
      <input type="email" placeholder="Email" style={inputStyle} />
      <br />
      <input type="password" placeholder="Password" style={inputStyle} />
      <br />
      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
