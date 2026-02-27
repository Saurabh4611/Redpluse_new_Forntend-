import React, { useEffect, useState } from "react";
import axios from "axios";

interface Patient {
  id: number;
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
  role: string;
}

const ViewCreatedRequests: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getLoggedInUser = (): User | null => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  };

  const user = getLoggedInUser();
  const patientId = user?.id;

  const fetchRequests = async () => {
    try {
      const res = await axios.get<BloodRequest[]>(
        "http://localhost:8080/Redpluse/request/allrequests"
      );

      if (!patientId) return;

      const filtered = res.data.filter(
        (req) => req.patient?.id === patientId
      );

      setRequests(filtered);
    } catch (error) {
      console.error("Error fetching requests:", error);
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
      await axios.delete(`http://localhost:8080/Redpluse/request/deleterequest/${id}`);
      alert("Request deleted successfully");
      fetchRequests(); // Refresh the list after deletion
    } catch (error) {
      alert("Error deleting request");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "PENDING":
        return "status pending blink";
      case "APPROVED":
        return "status approved";
      case "REJECTED":
        return "status rejected";
      default:
        return "status";
    }
  };

  return (
    <div className="container">
      <h1 className="title">My Created Blood Requests</h1>

      {loading ? (
        <p className="message">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="message">No requests found.</p>
      ) : (
        <div className="tableWrapper">
          <table className="modern-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Blood Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.requiredBloodType}</td>
                  <td>{req.quantity}</td>
                  <td>
                    <span className={getStatusClass(req.status)}>
                      {req.status}
                    </span>
                  </td>
                  <td>
                   <button
    
    onClick={() => handleDelete(req.id)}
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

      {/* BUILT-IN CSS */}
      <style>{`
        .container {
          padding: 40px;
          background: #f4f6f9;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
        }

        .message {
          text-align: center;
          font-size: 18px;
        }

        .tableWrapper {
          overflow-x: auto;
        }

        .modern-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .modern-table th {
          background: #c62828;
          color: white;
          padding: 12px;
          text-align: left;
        }

        .modern-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .modern-table tbody tr {
          transition: all 0.3s ease;
        }

        .modern-table tbody tr:hover {
          background-color: #f1f1f1;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
        }

        .status {
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 13px;
        }

        .pending {
          background: #fbc02d;
          color: black;
        }

        .approved {
          background: #2e7d32;
          color: white;
        }

        .rejected {
          background: #c62828;
          color: white;
        }

        /* 🔥 Blinking Animation */
        .blink {
          animation: blinkAnimation 1.2s infinite;
        }

        @keyframes blinkAnimation {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .modern-table thead {
            display: none;
          }

          .modern-table, 
          .modern-table tbody, 
          .modern-table tr, 
          .modern-table td {
            display: block;
            width: 100%;
          }

          .modern-table tr {
            margin-bottom: 15px;
            background: white;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          }

          .modern-table td {
            text-align: right;
            padding-left: 50%;
            position: relative;
          }

          .modern-table td::before {
            content: attr(data-label);
            position: absolute;
            left: 15px;
            font-weight: bold;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewCreatedRequests;