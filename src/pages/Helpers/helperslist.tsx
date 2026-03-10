import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://redpluse-backend.onrender.com/Redpluse/users";

/* =======================
   Helper Type
======================= */
interface Helper {
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
const HelperList: React.FC = () => {
  const navigate = useNavigate();
  const [helpers, setHelpers] = useState<Helper[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadHelpers();
  }, []);

  // GET All Helpers
  const loadHelpers = async () => {
    try {
      setLoading(true);
      const res = await axios.get<Helper[]>(
        `${API_BASE_URL}/helpers`
      );
      setHelpers(res.data);
    } catch (error) {
      alert("Error fetching helpers");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE Helper
  const handleDelete = async (id: number) => {
    if (!id) {
      alert("Invalid ID");
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/helpers/${id}`);
      alert("Helper deleted successfully");
      loadHelpers();
    } catch (error) {
      alert("Error deleting helper");
      console.error(error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.logo}>Redpluse Admin</h2>

          <button style={styles.sideBtn} onClick={() => navigate("/register")}>
            Add User
          </button>

          <button style={styles.sideBtn} onClick={() => navigate(-1)}>
            Back
          </button>

          <button
            style={styles.logoutBtn}
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <div style={styles.card}>
            <h2 style={styles.title}>Helper Management</h2>

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
                      <th>Blood Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {helpers.length === 0 ? (
                      <tr>
                        <td colSpan={7}>No Helpers Found</td>
                      </tr>
                    ) : (
                      helpers.map((helper) => (
                        <tr key={helper.id} style={styles.row}>
                          <td>{helper.id}</td>
                          <td>{helper.name}</td>
                          <td>{helper.email}</td>
                          <td>{helper.role}</td>
                          <td>{helper.phone}</td>
                          <td>{helper.bloodType}</td>
                         <td>
  <button
    style={styles.updateBtn}
    onClick={() => navigate(`/updateuser/${helper.id}`)}
  >
    Update
  </button>

  <button
    style={styles.deleteBtn}
    onClick={() => handleDelete(helper.id)}
  >
    Delete
  </button>
</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
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
  updateBtn: {
  background: "#007bff",
  border: "none",
  padding: "6px 12px",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "8px",
},

  overlay: {
    display: "flex",
    minHeight: "100vh",
    background: "rgba(0,0,0,0.8)",
  },

  sidebar: {
    width: "250px",
    background: "rgba(0,0,0,0.9)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "2px solid #b30000",
  },

  logo: {
    color: "#ff1a1a",
    marginBottom: "30px",
  },

  sideBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    background: "#ff1a1a",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },

  logoutBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "auto",
    background: "gray",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },

  mainContent: {
    flex: 1,
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "1000px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
    padding: "30px",
    borderRadius: "15px",
    color: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#ff4d4d",
  },

  tableContainer: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },

  thead: {
    background: "#b30000",
    color: "white",
  },

  row: {
    background: "rgba(255,255,255,0.1)",
  },

  deleteBtn: {
    background: "#ff1a1a",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default HelperList;