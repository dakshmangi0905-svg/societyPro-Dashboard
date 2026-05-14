import Sidebar from "../components/Sidebar";

function Complaints() {
  const complaints = [
    {
      id: 1,
      title: "Water leakage in B-204",
      resident: "Rahul Sharma",
      date: "12 May 2026",
      status: "Pending",
    },

    {
      id: 2,
      title: "Lift not working",
      resident: "Priya Patel",
      date: "11 May 2026",
      status: "In Progress",
    },

    {
      id: 3,
      title: "Parking issue near gate",
      resident: "Amit Shah",
      date: "10 May 2026",
      status: "Resolved",
    },
  ];

  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <h1 className="page-title">Complaints</h1>

        <p className="page-subtitle">Manage and track society complaints.</p>

        <div className="complaints-grid">
          {complaints.map((complaint) => (
            <div className="complaint-card" key={complaint.id}>
              <h3>{complaint.title}</h3>

              <p>
                <strong>Resident:</strong> {complaint.resident}
              </p>

              <p>
                <strong>Date:</strong> {complaint.date}
              </p>

              <span
                className={
                  complaint.status === "Pending"
                    ? "pending"
                    : complaint.status === "In Progress"
                      ? "progress"
                      : "resolved"
                }
              >
                {complaint.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Complaints;
