import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HelperDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Helper Dashboard</h1>

        <p style={styles.subtitle}>
          Help patients in need by responding to blood requests and tracking
          your donation activities.
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/available-requests" style={styles.primaryBtn}>
            View Blood Requests
          </Link>

          <Link to="/my-donations" style={styles.secondaryBtn}>
            My Donations
          </Link>
           <button
            style={styles.logoutBtn}
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>

          
        
      </div>
    </div>
  );
};

/* ======================
   Built-in Styles
====================== */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },


   logoutBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "auto",
    background: "white",
    border: "none",
    color: "black",
    borderRadius: "6px",
    cursor: "pointer",
  },

  card: {
    width: "100%",
    maxWidth: "600px",
    background: "rgba(0,0,0,0.85)",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
  },

  title: {
    color: "#ff1a1a",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "30px",
    fontSize: "16px",
    opacity: 0.9,
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    textDecoration: "none",
    background: "#ff1a1a",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
  },

  secondaryBtn: {
    textDecoration: "none",
    background: "#b30000",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default HelperDashboard;