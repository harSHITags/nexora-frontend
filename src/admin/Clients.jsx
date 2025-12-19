import { useEffect, useState } from "react";
import API from "../services/api";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Fetch clients
  const fetchClients = async () => {
    const res = await API.get("/clients");
    setClients(res.data.data || []);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Add client
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await API.post("/clients", {
        name,
        designation,
        description,
        image,
      });

      alert("✅ Client added");
      setName("");
      setDesignation("");
      setDescription("");
      setImage("");
      fetchClients();
    } catch (error) {
      alert("❌ Failed to add client");
    }
  };

  // Delete client
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this client?")) return;

    try {
      await API.delete(`/clients/${id}`);
      setClients(clients.filter((c) => c._id !== id));
    } catch (error) {
      alert("❌ Failed to delete client");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Clients</h1>

      {/* ADD FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded shadow max-w-lg mb-10"
      >
        <input
          className="w-full border p-3 mb-4"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 mb-4"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-3 mb-4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 mb-4"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Add Client
        </button>
      </form>

      {/* LIST + DELETE */}
      <div className="grid md:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white p-4 rounded shadow text-center"
          >
            <h3 className="font-semibold">{client.name}</h3>
            <p className="text-sm text-gray-500">
              {client.designation}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {client.description}
            </p>

            <button
              onClick={() => handleDelete(client._id)}
              className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
