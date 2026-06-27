import { motion } from "framer-motion";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-slate-950 flex items-center pt-24"
>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-semibold tracking-widest uppercase">
            Welcome to Bhoonk Junction
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-4">
            Healthy Food <br />
            <span className="text-orange-500">That Tastes Amazing</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Enjoy fresh, healthy, and delicious meals prepared with premium
            ingredients. Every bite is crafted with care to give you the perfect
            dining experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition hover:scale-105">
              Order Now
            </button>

            <button className="border border-orange-500 hover:bg-orange-500 px-8 py-4 rounded-full font-semibold transition">
              Explore Menu
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
            alt="Delicious Pizza"
            className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;