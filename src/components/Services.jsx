import { motion } from "framer-motion";
import {
  FaHamburger,
  FaMotorcycle,
  FaMugHot,
  FaLeaf,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUtensils size={40} />,
    title: "Fresh Momos",
    desc: "Steamed, Pan Fry & Tandoori Momos prepared fresh with authentic flavors.",
  },
  {
    icon: <FaHamburger size={40} />,
    title: "Veg Grill Burger",
    desc: "Loaded with fresh vegetables, cheese, and delicious sauces in every bite.",
  },
  {
    icon: <FaMugHot size={40} />,
    title: "Hot & Cold Beverages",
    desc: "Refreshing Cold Coffee and tasty snacks to perfectly complement your meal.",
  },
  {
    icon: <FaMotorcycle size={40} />,
    title: "Fast Delivery",
    desc: "Quick and reliable doorstep delivery so your food reaches hot and fresh.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Fresh Ingredients",
    desc: "Every dish is prepared using premium quality vegetables and fresh ingredients.",
  },
  {
    icon: <FaStar size={40} />,
    title: "Best Quality",
    desc: "Great taste, hygienic preparation, and excellent customer service every time.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            Our Services
          </h4>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Why Choose Bhoonk Junction?
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            From delicious momos to refreshing cold coffee, we serve freshly
            prepared food with premium ingredients, hygienic cooking, and fast
            delivery to make every meal memorable.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-slate-900 rounded-3xl p-8 text-center border border-slate-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
            >

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;