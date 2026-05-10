import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SocietyPro</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/resident">Residents</Link>
      <Link to="/complaint">Complaints</Link>
      <Link to="/notice">Notices</Link>
      <Link to="/parking">Parking</Link>
    </div>
  );
}

export default Sidebar;
