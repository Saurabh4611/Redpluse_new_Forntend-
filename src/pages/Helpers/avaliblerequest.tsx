import React, { useEffect, useState } from "react";
import axios from "axios";

interface Patient {
  id: number;
  name: string;
  phone: string;
}

interface BloodRequest {
  id: number;
  requiredBloodType: string;
  quantity: number;
  status: string;
  patient?: Patient;
}

interface User {
  id: number;
}

const AvailableRequests: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const getLoggedInUser = (): User | null => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;
    return JSON.parse(storedUser);
  };

  const user = getLoggedInUser();
  const helperId = user?.id;

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "https://redpluse-backend.onrender.com/Redpluse/request/allrequests"
      );

      const pendingRequests = res.data.filter(
        (req: BloodRequest) => req.status === "PENDING"
      );

      setRequests(pendingRequests);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const acceptRequest = async (requestId: number) => {
    if (!helperId) {
      alert("Helper not logged in");
      return;
    }

    try {
      await axios.post(
        `https://redpluse-backend.onrender.com/Redpluse/donation/assign?requestid=${requestId}&helperid=${helperId}`
      );

      alert("You accepted this request!");
      fetchRequests();
    } catch (error) {
      console.error(error);
      alert("Error accepting request");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="container">
      <h1>Available Blood Requests</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="tableWrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Phone</th>
                <th>Blood Type</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>

                  <td>{req.patient?.name}</td>

                  <td>{req.patient?.phone}</td>

                  <td>{req.requiredBloodType}</td>

                  <td>{req.quantity}</td>

                  <td>
                    <button
                      className="acceptBtn"
                      onClick={() => acceptRequest(req.id)}
                    >
                      Accept / Help
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

      .acceptBtn{
        background:#2e7d32;
        color:white;
        padding:8px 14px;
        border:none;
        border-radius:6px;
        cursor:pointer;
      }

      .acceptBtn:hover{
        background:#1b5e20;
      }
      `}</style>
    </div>
  );
};

export default AvailableRequests;