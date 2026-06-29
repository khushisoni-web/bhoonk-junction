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

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            Contact Us
          </h4>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-8">
            We'd love to hear from you. Send us a message or visit our shop.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

              <FaPhoneAlt className="text-orange-500 text-3xl" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Phone
                </h3>

                <a
                  href="tel:+918383087224"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  +91 8383087224
                </a>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

              <FaEnvelope className="text-orange-500 text-3xl" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Email
                </h3>

                <a
                  href="mailto:bhookjunction4@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  bhookjunction4@gmail.com
                </a>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300">

              <FaMapMarkerAlt className="text-orange-500 text-3xl" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Address
                </h3>

                <p className="text-gray-300">
                  Delhi, India
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700"
          >

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white py-4 rounded-xl font-bold transition duration-300 shadow-lg shadow-orange-500/30"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;