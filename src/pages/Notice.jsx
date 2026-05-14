import Sidebar from "../components/Sidebar";

function Notices() {
  const notices = [
    {
      id: 1,
      title: "Water Supply Update",
      date: "13 May 2026",
      description: "Water supply will be stopped tomorrow from 10 AM to 1 PM.",
    },

    {
      id: 2,
      title: "Society Meeting",
      date: "14 May 2026",
      description: "General society meeting will be held on Sunday at 6 PM.",
    },

    {
      id: 3,
      title: "Parking Cleaning",
      date: "15 May 2026",
      description: "Basement parking cleaning will happen from 8 AM to 11 AM.",
    },
  ];

  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <div className="notice-header">
          <div>
            <h1 className="page-title">Notices</h1>

            <p className="page-subtitle">View all society announcements.</p>
          </div>

          <button className="notice-btn">Add Notice</button>
        </div>

        <div className="notices-page-grid">
          {notices.map((notice) => (
            <div className="notice-card" key={notice.id}>
              <h3>{notice.title}</h3>

              <p className="notice-date">{notice.date}</p>

              <p className="notice-description">{notice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notices;
