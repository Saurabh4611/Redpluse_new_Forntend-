import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Admin Dashboard</h1>
        <p style={styles.subtitle}>
          Manage users, view reports, and oversee platform activities here.
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/helperlist" style={styles.primaryBtn}>
            Helper List
          </Link>

          <Link to="/patientList" style={styles.secondaryBtn}>
            Patient List
          </Link>
          

           <Link to="/available-requests" style={styles.primaryBtn}>
            Request On Site
          </Link>

          <Link to="/my-donations" style={styles.primaryBtn}>
            My Donations
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ======================
   Built-in Styles (TS Safe)
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
  },

  primaryBtn: {
    textDecoration: "none",
    background: "#ff1a1a",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
  },

  secondaryBtn: {
    textDecoration: "none",
    background: "#b30000",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
  },
};

export default AdminDashboard;