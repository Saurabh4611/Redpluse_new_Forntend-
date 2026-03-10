import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = "http://localhost:8080/Redpluse/users";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
  bloodType: string;
}

const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: "",
    phone: "",
    bloodType: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get<User>(`${API_BASE_URL}/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.error(err);
          alert("Error fetching user");
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE_URL}/update/${id}`, user);
      alert("User updated successfully");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert("Error updating user");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Update User</h2>

        <input
          style={styles.input}
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          style={styles.input}
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <select
          style={styles.input}
          name="role"
          value={user.role}
          onChange={handleChange}
         
        >
          <option value="">Select Role</option>
          <option value="helper">helper</option>
          <option value="patient">patient</option>
        </select>

        <input
          style={styles.input}
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          style={styles.input}
          name="bloodType"
          value={user.bloodType}
          onChange={handleChange}
          placeholder="Blood Type"
        />

        <button style={styles.button} onClick={handleUpdate}>
          Update
        </button>
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
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "30px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
  },

  title: {
    color: "#ff1a1a",
    textAlign: "center",
    marginBottom: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    padding: "10px",
    backgroundColor: "#ff1a1a",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default UpdateUser;