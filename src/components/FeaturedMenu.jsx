import { Link } from "react-router-dom";
import vegMomo from "../assets/menu/veg-momo.webp";
import paneerMomo from "../assets/menu/paneer-momo.webp";
import panFryMomo from "../assets/menu/pan-fry-momo.avif";
import tandooriMomo from "../assets/menu/tandoori-momo.webp";
import vegBurger from "../assets/menu/veg-burger.jpg";
import coldCoffee from "../assets/menu/cold-coffee.avif";
import periPeriFries from "../assets/menu/peri-peri-fries.jpg";
import maggie from "../assets/menu/maggie.jpg";
import vegRoll from "../assets/menu/veg-roll.jpg";
import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Veg Momos",
    price: "₹70",
    rating: "4.9",
    image: vegMomo,
  },
  {
    name: "Paneer Momos",
    price: "₹90",
    rating: "4.9",
    image: paneerMomo,
  },
  {
    name: "Pan Fry Momos",
    price: "₹120",
    rating: "4.8",
    image: panFryMomo,
  },
  {
    name: "Tandoori Momos",
    price: "₹110",
    rating: "4.9",
    image: tandooriMomo,
  },
  {
    name: "Veg Grill Burger",
    price: "₹40",
    rating: "4.8",
    image: vegBurger,
  },
  {
    name: "Cold Coffee",
    price: "₹50",
    rating: "4.9",
    image: coldCoffee,
  },
  {
    name: "Peri Peri Fries",
    price: "₹70",
    rating: "4.8",
    image: periPeriFries,
  },
  {
    name: "Maggie",
    price: "₹50",
    rating: "4.7",
    image: maggie,
  },
  {
    name: "Veg Roll",
    price: "₹50",
    rating: "4.8",
    image: vegRoll,
  },
];

function FeaturedMenu() {
  return (
    <section className="bg-slate-950 py-24 px-6" id="menu">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            Featured Menu
          </h4>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
            Customer Favorites
          </h2>

          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-8">
            Freshly prepared dishes made with quality ingredients and packed
            with delicious flavors.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">

                  <h3 className="text-2xl font-bold text-white hover:text-orange-400 transition">
                    {item.name}
                  </h3>

                  <span className="text-yellow-400 font-bold text-lg">
                    ⭐ {item.rating}
                  </span>

                </div>

                <p className="text-orange-400 text-2xl font-extrabold">
                  {item.price}
                </p>

              <Link
  to="/order"
  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition text-center block text-white hover:scale-105"
>
  Order Now
</Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMenu;