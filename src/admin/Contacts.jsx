import { useEffect, useState } from "react";
import API from "../services/api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await API.get("/contacts");
        setContacts(res.data);
      } catch (error) {
        console.error("Error fetching contacts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Contact Submissions
      </h1>

      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        {loading ? (
          <p className="text-gray-500">Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-500">No contact submissions yet</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Mobile</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id}>
                  <td className="border p-2">{c.fullName}</td>
                  <td className="border p-2">{c.email}</td>
                  <td className="border p-2">{c.mobile}</td>
                  <td className="border p-2">{c.city}</td>
                  <td className="border p-2 text-sm text-gray-500">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Contacts;
