import { motion } from "framer-motion";
import {
  FaHamburger,
  FaPizzaSlice,
  FaGlassWhiskey,
  FaTruck,
  FaLeaf,
  FaIceCream,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHamburger size={40} />,
    title: "Healthy Burgers",
    desc: "Freshly prepared burgers with premium ingredients.",
  },
  {
    icon: <FaPizzaSlice size={40} />,
    title: "Delicious Pizza",
    desc: "Wood-fired pizzas with rich flavors and fresh toppings.",
  },
  {
    icon: <FaGlassWhiskey size={40} />,
    title: "Fresh Juices",
    desc: "Natural juices made from seasonal fruits.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Fast Delivery",
    desc: "Quick and reliable doorstep delivery.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Healthy Meals",
    desc: "Balanced meals for a healthier lifestyle.",
  },
  {
    icon: <FaIceCream size={40} />,
    title: "Desserts",
    desc: "Sweet treats to complete your meal.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 px-6">
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

          <h2 className="text-5xl font-bold mt-4">
            What We Serve
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We prepare every meal with fresh ingredients, great taste, and
            exceptional quality to give you the best dining experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-orange-500/30 hover:shadow-2xl duration-300"
            >

              <div className="text-orange-500 flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
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