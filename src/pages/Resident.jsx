import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Pencil, Trash2 } from "lucide-react";
function Resident() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [wing, setWing] = useState("");
  const [flat, setFlat] = useState("");
  const [phone, setPhone] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [residents, setResidents] = useState([
    {
      id: 1,
      name: "Daksh Mangi",
      wing: "A",
      flat: "A-101",
      phone: "7990905038",
      status: "Active",
    },
    {
      id: 2,
      name: "Pranjal kotecha",
      wing: "B",
      flat: "B-204",
      phone: "9316912617",
      status: "Active",
    },
    {
      id: 3,
      name: "raj joshi",
      wing: "c",
      flat: "c-203",
      phone: "9823456739",
      status: "inactive",
    },
    {
      id: 4,
      name: "raj shah",
      wing: "c",
      flat: "c-204",
      phone: "9824455739",
      status: "inactive",
    },
    {
      id: 5,
      name: "Daksh bhanushali",
      wing: "D",
      flat: "E-101",
      phone: "9823456739",
      status: "inactive",
    },
    {
      id: 6,
      name: "subham mangi",
      wing: "A",
      flat: "A-203",
      phone: "823456739",
      status: "Active",
    },
    {
      id: 7,
      name: "rahul bhatia",
      wing: "D",
      flat: "D-201",
      phone: "9823456739",
      status: "Active",
    },
    {
      id: 8,
      name: "rahul sharma",
      wing: "E",
      flat: "E-201",
      phone: "9823456739",
      status: "inactive",
    },
  ]);

  function addResident() {
    if (editingId !== null) {
      const updatedResidents = residents.map((resident) =>
        resident.id === editingId
          ? {
              ...resident,
              name: name,
              wing: wing,
              flat: flat,
              phone: phone,
            }
          : resident,
      );

      setResidents(updatedResidents);
      setEditingId(null);
    } else {
      const newResident = {
        id: residents.length + 1,
        name: name,
        wing: wing,
        flat: flat,
        phone: phone,
        status: "Active",
      };

      setResidents([...residents, newResident]);
    }

    setName("");
    setWing("");
    setFlat("");
    setPhone("");
  }
  function editResident(resident) {
    setEditingId(resident.id);
    setName(resident.name);
    setWing(resident.wing);
    setFlat(resident.flat);
    setPhone(resident.phone);
  }

  function deleteResident(id) {
    const updatedResidents = residents.filter((resident) => resident.id !== id);

    setResidents(updatedResidents);
  }

  const filteredResident = residents.filter((resident) =>
    resident.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="page-layout">
        <Sidebar />
        <div className="page-content">
          <h1 className="page-title">Resident</h1>
          <p className="page-subtitle">manage all society residents here</p>
          <div className="resident-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Wing"
              value={wing}
              onChange={(e) => setWing(e.target.value)}
            />

            <input
              type="text"
              placeholder="Flat"
              value={flat}
              onChange={(e) => setFlat(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button onClick={addResident}>
              {editingId !== null ? "Save Changes" : "Add Resident"}
            </button>
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search resident by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>wing</th>
                  <th>flat</th>
                  <th>phone</th>
                  <th>status</th>
                  <th>Edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredResident.map((resident) => (
                  <tr key={resident.id}>
                    <td>{resident.name}</td>
                    <td>{resident.wing}</td>
                    <td>{resident.flat}</td>
                    <td>{resident.phone}</td>
                    <td>
                      <span
                        className={
                          resident.status === "Active"
                            ? "status active"
                            : "status inactive"
                        }
                      >
                        {resident.status}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => editResident(resident)}>
                        <Pencil />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteResident(resident.id)}>
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resident;
