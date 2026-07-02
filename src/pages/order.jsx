import { useMemo, useState } from "react";
import { motion } from "framer-motion";
console.log("🔥 NEW ORDER JSX LOADED");
const menuItems = [
  { id: "veg-steam-momos", name: "Veg Steam Momos", price: 40 },
  { id: "veg-fry-momos", name: "Veg Fry Momos", price: 50 },
  { id: "veg-tandoori-gravy-momos", name: "Veg Tandoori Gravy Momos", price: 60 },
  { id: "veg-malai-momos", name: "Veg Malai Momos", price: 60 },
  { id: "veg-pan-fry-momos", name: "Veg Pan Fry Momos", price: 60 },
  { id: "veg-crunchy-momos", name: "Veg Crunchy Momos", price: 60 },
  { id: "paneer-steam-momos", name: "Paneer Steam Momos", price: 50 },
  { id: "paneer-fry-momos", name: "Paneer Fry Momos", price: 60 },
  { id: "paneer-tandoori-momos", name: "Paneer Tandoori Momos", price: 70 },
  { id: "paneer-malai-momos", name: "Paneer Malai Momos", price: 70 },
  { id: "paneer-pan-fry-momos", name: "Paneer Pan Fry Momos", price: 70 },
  { id: "paneer-crunchy-momos", name: "Paneer Crunchy Momos", price: 70 },
  { id: "fries", name: "Fries", price: 50 },
  { id: "peri-peri-fries", name: "Peri Peri Fries", price: 70 },
  { id: "cheese-loaded-fries", name: "Cheese Loaded Fries", price: 100 },
  { id: "cold-coffee", name: "Cold Coffee", price: 50 },
  { id: "premium-cold-coffee", name: "Premium Cold Coffee", price: 80 },
  { id: "strawberry-smoothie", name: "Strawberry Smoothie", price: 60 },
  { id: "black-current-smoothie", name: "Black Current Smoothie", price: 60 },
  { id: "butter-scotch-smoothie", name: "Butter Scotch Smoothie", price: 60 },
  { id: "mango-smoothie", name: "Mango Smoothie", price: 60 },
  { id: "mint-mojito", name: "Mint Mojito", price: 60 },
  { id: "bubble-gum-mojito", name: "Bubble Gum Mojito", price: 60 },
  { id: "green-apple-mojito", name: "Green Apple Mojito", price: 60 },
  { id: "watermelon-mojito", name: "Watermelon Mojito", price: 60 },
  { id: "veg-grill-burger", name: "Veg Grill Burger", price: 40 },
  { id: "paneer-grill-burger", name: "Paneer Grill Burger", price: 60 },
  { id: "cheese-grill-burger", name: "Cheese Grill Burger", price: 70 },
  { id: "crunchy-veg-burger", name: "Crunchy Veg Burger", price: 90 },
  { id: "veg-roll", name: "Veg Roll", price: 50 },
  { id: "spring-roll", name: "Spring Roll", price: 50 },
  { id: "maggie", name: "Maggie", price: 50 },
  { id: "cheese-maggie", name: "Cheese Maggie", price: 70 },
];

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  foodId: menuItems[0].id,
  quantity: 1,
  instructions: "",
};

export default function Order() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selectedItem = useMemo(
    () => menuItems.find((item) => item.id === formData.foodId) || menuItems[0],
    [formData.foodId]
  );

  const totalPrice = selectedItem.price * Number(formData.quantity || 1);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: name === "quantity" ? Math.max(1, Number(value || 1)) : value,
    }));

    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    if (!formData.address.trim()) nextErrors.address = "Delivery address is required";
    if (!formData.foodId) nextErrors.foodId = "Please select a food item";
    if (!formData.quantity || Number(formData.quantity) < 1) nextErrors.quantity = "Quantity must be at least 1";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        food: selectedItem.name,
        quantity: Number(formData.quantity),
        totalPrice,
        instructions: formData.instructions,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to place order.");
    }

    setSubmitted(true);
    console.log(data);

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};


  
  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-orange-400 focus:bg-white/[0.09] focus:shadow-[0_0_0_4px_rgba(249,115,22,0.12)]";

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />

      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-orange-950/40"
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=90"
              alt="Premium restaurant food spread"
              className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[620px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-7"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
                Premium Delivery
              </p>
              <h1 className="bg-gradient-to-r from-white via-orange-100 to-orange-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
                Bhoonk Junction
              </h1>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {["⭐ 4.9 Rating", "🚚 20-30 min Delivery", "🥗 Fresh Ingredients", "🍽️ Premium Quality"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-black/20 backdrop-blur-md"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -right-5 top-8 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
              className="mb-8"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Order Online
              </p>
              <h2 className="bg-gradient-to-r from-white via-orange-100 to-orange-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
                Build Your Craving
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Full Name</span>
                <input
                  className={inputClass}
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                {errors.fullName && <span className="mt-1 block text-xs text-orange-300">{errors.fullName}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Phone Number</span>
                <input
                  className={inputClass}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  required
                />
                {errors.phone && <span className="mt-1 block text-xs text-orange-300">{errors.phone}</span>}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Email</span>
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <span className="mt-1 block text-xs text-orange-300">{errors.email}</span>}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Delivery Address</span>
                <textarea
                  className={`${inputClass} min-h-24 resize-none`}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number, street, area, landmark"
                  required
                />
                {errors.address && <span className="mt-1 block text-xs text-orange-300">{errors.address}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Food</span>
                <select
                  className={`${inputClass} cursor-pointer appearance-none`}
                  name="foodId"
                  value={formData.foodId}
                  onChange={handleChange}
                  required
                >
                  {menuItems.map((item) => (
                    <option key={item.id} value={item.id} className="bg-slate-950 text-white">
                      {item.name} ₹{item.price}
                    </option>
                  ))}
                </select>
                {errors.foodId && <span className="mt-1 block text-xs text-orange-300">{errors.foodId}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Quantity</span>
                <input
                  className={inputClass}
                  name="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
                {errors.quantity && <span className="mt-1 block text-xs text-orange-300">{errors.quantity}</span>}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-300">Special Instructions</span>
                <textarea
                  className={`${inputClass} min-h-24 resize-none`}
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Less spicy, extra mayo, no onion..."
                />
              </label>
            </div>

            <div className="mt-7 rounded-3xl border border-orange-400/20 bg-orange-500/10 p-5 shadow-[0_0_40px_rgba(249,115,22,0.12)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-400">Selected Item</p>
                  <p className="mt-1 font-bold text-white">{selectedItem.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-400">Total</p>
                  <p className="mt-1 text-3xl font-black text-orange-400">₹{totalPrice}</p>
                </div>
              </div>
            </div>

            {submitted && (
              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200">
                Your order has been placed successfully.
              </div>
            )}

            <motion.button

 
  type="submit"

  type="button"
  onClick={() => alert("BUTTON CLICKED")}

  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-4 text-base font-black text-white"

  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
  type="submit"
  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-4 text-base font-black text-white shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:from-orange-600 hover:via-orange-400 hover:to-amber-500 hover:shadow-orange-500/40"

>
  🍔 Place Order
</motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );

 
}


