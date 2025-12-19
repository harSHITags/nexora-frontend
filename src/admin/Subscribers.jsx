import { useEffect, useState } from "react";
import API from "../services/api";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await API.get("/subscribers");
        setSubscribers(res.data.data || []);
      } catch (error) {
        console.error("Error fetching subscribers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Newsletter Subscribers
      </h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        {loading ? (
          <p className="text-gray-500">Loading subscribers...</p>
        ) : subscribers.length === 0 ? (
          <p className="text-gray-500">No subscribers yet</p>
        ) : (
          <ul className="space-y-3">
            {subscribers.map((sub) => (
              <li
                key={sub._id}
                className="border p-3 rounded flex justify-between items-center"
              >
                <span>{sub.email}</span>
                <span className="text-sm text-gray-400">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Subscribers;
