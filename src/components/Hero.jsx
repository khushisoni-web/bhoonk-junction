import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full uppercase tracking-widest font-semibold">
            🍕 Welcome to Bhoonk Junction
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6">

  <span className="text-white drop-shadow-lg">
    Fresh &
  </span>

  <br />

  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
    Delicious Food
  </span>

</h1>

          <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">
            Discover mouth-watering burgers, cheesy momos, crispy fries,
            refreshing cold coffee, rolls, and much more. Every dish is
            prepared with fresh ingredients to deliver an unforgettable taste.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition duration-300 hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              🍔 Order Now
            </a>

            <a
              href="#about"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold transition duration-300"
            >
              Explore More
            </a>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Orange Glow */}

          <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>

          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
            alt="Delicious Food"
            className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500 border-4 border-orange-500/20"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;