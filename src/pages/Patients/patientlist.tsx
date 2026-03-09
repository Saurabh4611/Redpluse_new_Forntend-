import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:8080/Redpluse/users";

/* =======================
   Patient Type
======================= */
interface Patient {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
  bloodType: string;
}

/* =======================
   Component
======================= */
const PatientList: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      setLoading(true);
      const res = await axios.get<Patient[]>(
        `${API_BASE_URL}/patients`
      );
      setPatients(res.data);
    } catch (error) {
      alert("Error fetching patients");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!id) {
      alert("Invalid ID");
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/patients/${id}`);
      alert("Patient deleted successfully");
      loadPatients();
    } catch (error) {
      alert("Error deleting patient");
      console.error(error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2 style={styles.title}>Patient Management</h2>

          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead style={styles.thead}>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Contact</th>
                    <th>Required Blood Type</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {patients.length === 0 ? (
                    <tr>
                      <td colSpan={7}>No Patients Found</td>
                    </tr>
                  ) : (
                    patients.map((patient) => (
                      <tr key={patient.id} style={styles.row}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.email}</td>
                        <td>{patient.role}</td>
                        <td>{patient.phone}</td>
                        <td>{patient.bloodType}</td>
                        <td>
                          <button
                            style={styles.deleteBtn}
                            onClick={() => handleDelete(patient.id)}
                          >
                            Delete
                          </button>
                           <button
    style={styles.updateBtn}
    onClick={() => navigate(`/updateuser/${patient.id}`)}
  >
    Update
  </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <div style={styles.buttonContainer}>
            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/register")}
            >
              Add User
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button
            style={styles.logoutBtn}
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =======================
   Styles (TS SAFE)
======================= */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    minHeight: "100vh",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
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
    maxWidth: "1100px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "15px",
    color: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#ff4d4d",
  },

  tableContainer: {
    width: "100%",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    minWidth: "800px",
    borderCollapse: "separate",
    borderSpacing: "0 8px", // 🔥 spacing between rows
  },

  thead: {
    background: "#b30000",
    color: "white",
  },

  row: {
    background: "rgba(255,255,255,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  rowHover: {
    background: "rgba(255,0,0,0.15)",
    transform: "scale(1.01)",
    boxShadow: "0 5px 15px rgba(255,0,0,0.4)",
  },

  cell: {
    padding: "12px",
  },

  deleteBtn: {
    background: "#ff1a1a",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginRight: "8px",
  },

  updateBtn: {
    background: "#007bff",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  buttonContainer: {
    marginTop: "20px",
    textAlign: "center",
  },

  primaryBtn: {
    background: "#ff1a1a",
    padding: "10px 18px",
    marginRight: "10px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  secondaryBtn: {
    background: "gray",
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default PatientList;