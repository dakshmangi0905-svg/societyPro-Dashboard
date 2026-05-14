import Sidebar from "../components/Sidebar";
import { Users, AlertCircle, Car, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const nav = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="page-content">
        <h1 className="page-title">Dashboard </h1>
        <div className="cards-container">
          <div className="card" onClick={() => nav("/resident")}>
            <Users size={40} color="#2563EB" />
            <h3>Total Residents</h3>
            <p>320</p>
          </div>

          <div className="card" onClick={() => nav("/complaint")}>
            <AlertCircle size={40} color="#2563Eb" />
            <h3>Pending Complaints</h3>
            <p>8</p>
          </div>

          <div className="card" onClick={() => nav("/parking")}>
            <Car size={40} color="#2563eb" />
            <h3>Parking Slots</h3>
            <p>74</p>
          </div>

          <div className="card">
            <IndianRupee size={40} color="#2563eb" />
            <h3>Maintenance Due</h3>
            <p>₹42,000</p>
          </div>
        </div>
        <div className="bottom-section">
          <div className="complaints-section">
            <h2>Recent Complaints</h2>

            <div className="complaint-item">
              <div>
                <h4>Water leakage in B-204</h4>
                <p>2 hours ago</p>
              </div>

              <span className="pending">Pending</span>
            </div>

            <div className="complaint-item">
              <div>
                <h4>Lift not working</h4>
                <p>5 hours ago</p>
              </div>

              <span className="progress">In Progress</span>
            </div>

            <div className="complaint-item">
              <div>
                <h4>Parking issue near gate</h4>
                <p>Yesterday</p>
              </div>

              <span className="resolved">Resolved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
