import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../App.css'

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
          ? "bg-slate-950/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-orange-500 cursor-pointer">
          Bhoonk Junction
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
        <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
<li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
<li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
<li><a href="#menu" className="hover:text-orange-500 transition">Menu</a></li>
<li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-center py-6 space-y-5">
         <a href="#home" className="block hover:text-orange-500">Home</a>
<a href="#about" className="block hover:text-orange-500">About</a>
<a href="#services" className="block hover:text-orange-500">Services</a>
<a href="#menu" className="block hover:text-orange-500">Menu</a>
<a href="#contact" className="block hover:text-orange-500">Contact</a>

          <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-600">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;