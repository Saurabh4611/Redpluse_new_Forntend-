import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://redpluse-backend.onrender.com/Redpluse/request";

interface BloodRequest {
  requiredBloodType: string;
  quantity: number;
  status: string;
}

const CreateBloodRequest: React.FC = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const patient = storedUser ? JSON.parse(storedUser) : null;

  const [formData, setFormData] = useState<BloodRequest>({
    requiredBloodType: "",
    quantity: 1,
    status: "Pending",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "quantity"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!patient?.id) {
      alert("User not logged in");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE_URL}/create/${patient.id}`,
        formData
      );

      alert("Blood request created successfully");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert("Error creating request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Blood Request</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label>Required Blood Type</label>
            <select
              name="requiredBloodType"
              value={formData.requiredBloodType}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div style={styles.field}>
            <label>Quantity (Units)</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              readOnly
              style={{ ...styles.input, backgroundColor: "#333" }}
            />
          </div>

          <button type="submit" style={styles.button}>
            {loading ? "Creating..." : "Create Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1a0000, #330000)",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    background: "rgba(0,0,0,0.9)",
    padding: "30px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    color: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
  },

  title: {
    textAlign: "center",
    color: "#ff1a1a",
    marginBottom: "10px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#000",
    color: "#fff",
  },

  button: {
    padding: "10px",
    backgroundColor: "#ff1a1a",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default CreateBloodRequest;