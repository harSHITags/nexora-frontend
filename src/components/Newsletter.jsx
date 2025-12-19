import { useState } from "react";
import API from "../services/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/subscribers", { email });
      alert("✅ Subscribed successfully");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 409) {
        alert("⚠️ Email already subscribed");
      } else {
        alert("❌ Subscription failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-blue-600 text-white px-10 py-4 fade-in">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Left Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Projects</li>
          <li className="cursor-pointer hover:underline">Testimonials</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>

        {/* Center Text */}
        <div className="font-semibold">
          Subscribe Us
        </div>

        {/* Right Input + Button */}
        <form onSubmit={handleSubscribe} className="flex">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 text-black outline-none rounded-l"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-blue-600 px-6 py-2 font-semibold rounded-r hover:bg-gray-100"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
