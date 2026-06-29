import {
  FaInstagram,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}

        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
            Bhoonk Junction
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            Fresh, healthy and delicious food prepared with premium ingredients.
            We serve happiness with every bite. Experience the perfect taste,
            quality, and unforgettable flavors.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-orange-400 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-orange-400 transition">
                Menu
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3 text-gray-400">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Delhi, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />

              <a
                href="tel:+918383087224"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                +91 8383087224
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />

              <a
                href="mailto:bhookjunction4@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                bhookjunction4@gmail.com
              </a>
            </div>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            Follow Us
          </h3>

          <p className="text-gray-400 mb-5">
            Stay connected with us on social media.
          </p>

          <div className="flex gap-4">

            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Bhoonk Junction. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-5 md:mt-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition duration-300 shadow-lg shadow-orange-500/30"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;