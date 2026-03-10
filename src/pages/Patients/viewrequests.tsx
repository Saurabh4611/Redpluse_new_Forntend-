import React, { useEffect, useState } from "react";
import axios from "axios";

interface Patient {
  id: number;
}

interface Helper {
  id: number;
  name: string;
  phone: string;
  bloodType: string;
}

interface BloodRequest {
  id: number;
  requiredBloodType: string;
  quantity: number;
  status: string;
  patient?: Patient;
}

interface Donation {
  id: number;
  helper: Helper;
  bloodRequest: BloodRequest;
}

interface User {
  id: number;
  role: string;
}

const ViewCreatedRequests: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
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
        "https://redpluse-backend.onrender.com/Redpluse/request/allrequests"
      );

      if (!patientId) return;

      const filtered = res.data.filter(
        (req) => req.patient?.id === patientId
      );

      setRequests(filtered);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  const handleComplete = async (id: number) => {
  try {
    await axios.put(
      `https://redpluse-backend.onrender.com/Redpluse/request/complete/${id}`
    );

    alert("Request marked as COMPLETED");

    fetchRequests();
  } catch (error) {
    console.error(error);
    alert("Error updating status");
  }
};

  const fetchDonations = async () => {
    try {
      const res = await axios.get<Donation[]>(
        "https://redpluse-backend.onrender.com/Redpluse/donation/all"
      );

      setDonations(res.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(
        `https://redpluse-backend.onrender.com/Redpluse/request/deleterequest/${id}`
      );
      alert("Request deleted successfully");
      fetchRequests();
    } catch (error) {
      alert("Error deleting request");
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchRequests();
      await fetchDonations();
      setLoading(false);
    };

    loadData();
  }, []);

  const getHelper = (requestId: number) => {
    const donation = donations.find(
      (d) => d.bloodRequest.id === requestId
    );
    return donation?.helper;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "PENDING":
        return "status pending blink";
      case "ASSIGNED":
        return "status assigned";
      case "COMPLETED":
        return "status completed";
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
                <th>Helper</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => {
                const helper = getHelper(req.id);

                return (
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
                      {helper ? (
                        <div className="helperBox">
                          <strong>{helper.name}</strong>
                          <br />
                          📞 {helper.phone}
                          <br />
                          🩸 {helper.bloodType}
                        </div>
                      ) : (
                        <span className="waiting">
                          Waiting for helper...
                        </span>
                      )}
                    </td>

                    <td>

                    {req.status === "ASSIGNED" && (
                     <button
                    className="completeBtn"
                    onClick={() => handleComplete(req.id)}
>
Mark Completed
</button>
)}

<button
className="deleteBtn"
onClick={() => handleDelete(req.id)}
>
Delete
</button>

</td>
                  </tr>
                );
              })}
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
.completeBtn{
background:#2e7d32;
color:white;
border:none;
padding:6px 12px;
border-radius:6px;
cursor:pointer;
margin-right:8px;
}

.title{
text-align:center;
margin-bottom:30px;
color:#c62828;
}

.message{
text-align:center;
font-size:18px;
}

.tableWrapper{
overflow-x:auto;
}

.modern-table{
width:100%;
border-collapse:collapse;
background:white;
border-radius:10px;
overflow:hidden;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

.modern-table th{
background:#c62828;
color:white;
padding:14px;
text-align:left;
}

.modern-table td{
padding:14px;
border-bottom:1px solid #eee;
}

.status{
padding:6px 14px;
border-radius:20px;
font-size:13px;
font-weight:bold;
}

.pending{
background:#fbc02d;
color:black;
}

.assigned{
background:#2e7d32;
color:white;
}

.completed{
background:#1565c0;
color:white;
}

.blink{
animation:blinkAnimation 1.2s infinite;
}

@keyframes blinkAnimation{
0%{opacity:1;}
50%{opacity:.4;}
100%{opacity:1;}
}

.helperBox{
font-size:14px;
line-height:1.4;
}

.waiting{
color:gray;
font-style:italic;
}

.deleteBtn{
background:#c62828;
color:white;
border:none;
padding:6px 12px;
border-radius:6px;
cursor:pointer;
}

`}</style>
    </div>
  );
};

export default ViewCreatedRequests;