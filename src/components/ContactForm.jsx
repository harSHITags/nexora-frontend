import { useState } from "react";
import API from "../services/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/contacts", formData);
      alert("✅ Contact form submitted successfully");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (error) {
      alert("❌ Submission failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-50 fade-in">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-3"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-3"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full border p-3"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-3"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
