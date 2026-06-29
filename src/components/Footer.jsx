import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            Bhoonk Junction
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Fresh, healthy and delicious food prepared with premium ingredients.
            Serving happiness one meal at a time.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
            <li><a href="#menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📍 Delhi, India</p>
            <p>📞 +91 9971387997</p>
            <p>✉ bhookjunction4@gmail.com</p>
          </div>
        </div>

        {/* Social */}

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

          

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaInstagram />
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
            className="mt-5 md:mt-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;