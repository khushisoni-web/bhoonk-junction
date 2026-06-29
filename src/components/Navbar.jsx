import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
        >
          Bhoonk Junction
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-orange-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-orange-400 transition duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#menu"
              className="hover:text-orange-400 transition duration-300"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}

        <a
          href="#menu"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 hover:scale-105 px-7 py-3 rounded-full font-bold text-white transition duration-300 shadow-lg shadow-orange-500/30"
        >
          🍔 Order Now
        </a>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900 text-center py-6 space-y-6 shadow-xl">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-orange-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-orange-400 transition"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-orange-400 transition"
          >
            Services
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-orange-400 transition"
          >
            Menu
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-orange-400 transition"
          >
            Contact
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-orange-500 hover:bg-orange-600 hover:scale-105 px-7 py-3 rounded-full font-bold text-white transition duration-300 shadow-lg shadow-orange-500/30"
          >
            🍔 Order Now
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;