
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedMenu from "./components/FeaturedMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Order from "./pages/order";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedMenu />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Order Page */}
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;

