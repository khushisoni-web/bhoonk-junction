import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
          alt="Burger"
          className="rounded-3xl shadow-2xl"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            About Us
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Fresh Food, Happy People
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            At <span className="text-orange-500 font-semibold">Bhoonk Junction</span>,
            we serve healthy, delicious, and freshly prepared meals using
            high-quality ingredients. Our mission is to make healthy eating
            enjoyable without compromising on taste.
          </p>

          <button className="mt-8 bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 transition">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;