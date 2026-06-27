import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            Contact Us
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message or visit our shop.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl">
              <FaPhoneAlt className="text-orange-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 8383087224</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl">
              <FaEnvelope className="text-orange-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">
                  bhookjunction4@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl">
              <FaMapMarkerAlt className="text-orange-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-400">Delhi, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-3xl space-y-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-slate-700 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;