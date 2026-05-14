import Sidebar from "../components/Sidebar";

function Parking() {
  const parkingData = [
    {
      id: 1,
      resident: "Rahul Sharma",
      flat: "A-101",
      vehicle: "GJ06AB1234",
      status: "Occupied",
    },

    {
      id: 2,
      resident: "Priya Patel",
      flat: "B-204",
      vehicle: "GJ06CD5678",
      status: "Occupied",
    },

    {
      id: 3,
      resident: "Guest Parking",
      flat: "-",
      vehicle: "-",
      status: "Available",
    },
  ];

  return (
    <div className="page-layout">
      <Sidebar />

      <div className="page-content">
        <h1 className="page-title">Parking</h1>

        <p className="page-subtitle">
          Manage society parking slots and vehicles.
        </p>

        <div className="parking-cards">
          <div className="card">
            <h3>Total Slots</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Occupied</h3>
            <p>96</p>
          </div>

          <div className="card">
            <h3>Available</h3>
            <p>24</p>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Resident</th>
                <th>Flat</th>
                <th>Vehicle Number</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {parkingData.map((slot) => (
                <tr key={slot.id}>
                  <td>{slot.resident}</td>

                  <td>{slot.flat}</td>

                  <td>{slot.vehicle}</td>

                  <td>
                    <span
                      className={
                        slot.status === "Available" ? "resolved" : "pending"
                      }
                    >
                      {slot.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Parking;
