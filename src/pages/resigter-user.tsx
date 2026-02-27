import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signupuser = () => {
  const navigate = useNavigate();

  const [formDATA, setFormDATA] = useState({
    name: "",
    email: "",
    password: "",
    bloodType: "",
    phone: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormDATA({ ...formDATA, [name]: value });
  };

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/Redpluse/users/register",
        formDATA
      );

      console.log("Signup successful", res.data);
      setSuccess("Signup successful ❤️");
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error("Error during signup:", err);
      setError("Signup failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 
          "url('/img/hero/hero-13.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "400px",
          padding: "35px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          color: "#fff",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" , color: "#ff1a1a"}}>
          Welcome to Redpluse
        </h2>

        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="name"
            value={formDATA.name}
            onChange={handlechange}
            placeholder="Enter Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            value={formDATA.email}
            onChange={handlechange}
            placeholder="Enter Email"
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            value={formDATA.password}
            onChange={handlechange}
            placeholder="Enter Password (max 8 characters)"
            maxLength={8}
            required
            style={inputStyle}
          />

          <select
            name="bloodType"
            value={formDATA.bloodType}
            onChange={handlechange}
            required
            style={inputStyle}
          >
            <option value="">-- Select Blood Type --</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>

          <input
            type="text"
            name="phone"
            value={formDATA.phone}
            onChange={handlechange}
            placeholder="Enter Phone Number"
            pattern="[6-9][0-9]{9}"
            title="Enter valid 10-digit Indian number"
            style={inputStyle}
          />

          <select
            name="role"
            value={formDATA.role}
            onChange={handlechange}
            required
            style={inputStyle}
          >
            <option value="">-- Select Role --</option>
            <option value="helper">Helper</option>
            <option value="Patient">Patient</option>
          </select>

          {error && (
            <p style={{ color: "#ff4d4d", textAlign: "center" }}>{error}</p>
          )}

          {success && (
            <p style={{ color: "#4dff88", textAlign: "center" }}>{success}</p>
          )}

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already a user?{" "}
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  color: "#000",
  backgroundColor: "#fff",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  background: "#e63946",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "10px",
};

const linkStyle: React.CSSProperties = {
  color: "#ffccd5",
  fontWeight: "600",
  textDecoration: "none",
};

export default Signupuser;