import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Margherita Pizza",
    price: "₹299",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Veg Burger",
    price: "₹149",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Healthy Salad",
    price: "₹199",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fresh Juice",
    price: "₹99",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "French Fries",
    price: "₹129",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate Cake",
    price: "₹249",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturedMenu() {
  return (
    <section className="bg-slate-950 py-24 px-6" id="menu">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h4 className="text-orange-500 uppercase tracking-widest font-semibold">
            Featured Menu
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Customer Favorites
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Freshly prepared dishes made with quality ingredients and packed
            with delicious flavors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <span className="text-orange-500 font-bold">
                    ⭐ {item.rating}
                  </span>
                </div>

                <p className="text-orange-500 text-xl font-bold">
                  {item.price}
                </p>

                <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition">
                  Order Now
                </button>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMenu;