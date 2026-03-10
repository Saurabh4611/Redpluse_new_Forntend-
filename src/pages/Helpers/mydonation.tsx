import React, { useEffect, useState } from "react";
import axios from "axios";

interface Donation {
  id: number;
  bloodRequest: {
    id: number;
    requiredBloodType: string;
    quantity: number;
    status: string;
  };
}

interface User {
  id: number;
}

const MyDonations: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  const getLoggedInUser = (): User | null => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;
    return JSON.parse(storedUser);
  };

  const user = getLoggedInUser();
  const helperId = user?.id;

  const fetchDonations = async () => {
    try {
      const res = await axios.get(
        `https://redpluse-backend.onrender.com/Redpluse/donation/helper/${helperId}`
      );

      setDonations(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 🔴 Delete Donation
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://redpluse-backend.onrender.com/Redpluse/donation/${id}`
      );

      // remove from UI
      setDonations(donations.filter((d) => d.id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  useEffect(() => {
    if (helperId) fetchDonations();
  }, []);

  return (
    <div className="container">
      <h1>My Donations</h1>

      {loading ? (
        <p>Loading...</p>
      ) : donations.length === 0 ? (
        <p>No donations yet</p>
      ) : (
        <div className="tableWrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Blood Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {donations.map((d) => (
                <tr key={d.id}>
                  <td>{d.bloodRequest.id}</td>
                  <td>{d.bloodRequest.requiredBloodType}</td>
                  <td>{d.bloodRequest.quantity}</td>
                  <td>
                    <span className="status">{d.bloodRequest.status}</span>
                  </td>

                  <td>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(d.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
      .container{
        padding:40px;
        background:#f4f6f9;
        min-height:100vh;
        font-family:Arial;
      }

      h1{
        text-align:center;
        margin-bottom:30px;
      }

      .tableWrapper{
        overflow-x:auto;
      }

      .table{
        width:100%;
        border-collapse:collapse;
        background:white;
        border-radius:10px;
        overflow:hidden;
        box-shadow:0 8px 20px rgba(0,0,0,0.1);
      }

      .table th{
        background:#c62828;
        color:white;
        padding:12px;
      }

      .table td{
        padding:12px;
        border-bottom:1px solid #eee;
      }

      .status{
        background:#2e7d32;
        color:white;
        padding:5px 12px;
        border-radius:15px;
        font-size:13px;
      }

      .deleteBtn{
        background:#e53935;
        border:none;
        color:white;
        padding:6px 12px;
        border-radius:5px;
        cursor:pointer;
      }

      .deleteBtn:hover{
        background:#b71c1c;
      }
      `}</style>
    </div>
  );
};

export default MyDonations;