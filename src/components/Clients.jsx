import { useEffect, useState } from "react";
import API from "../services/api";
import ClientCard from "./ClientCard";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await API.get("/clients");
        setClients(res.data);
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section id="clients" className="px-10 py-20 bg-white fade-in">
      {/* SECTION HEADING */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Happy Clients
      </h2>

      {clients.length === 0 ? (
        <p className="text-center text-gray-500">
          No clients available
        </p>
      ) : (
        <div className="grid md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <ClientCard key={client._id} client={client} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Clients;
