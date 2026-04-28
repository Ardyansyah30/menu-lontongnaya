"use client";

import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from "react";
import MenuModal, { MenuItem } from "./MenuModal"; // Pastikan MenuItem diimpor dari MenuModal

interface CartItem extends MenuItem {
  quantity: number;
}

const menus: MenuItem[] = [
  {
    name: "Lontong Gulai Campur",
    price: "Rp13.000",
    description: "Lontong dengan kuah gulai campur dengan tambahan mie kuninggoreng",
    img: "/lontong gulai campur + mie.jpeg",
    category: "Lontong",
    details: "Dibuat fresh setiap hari dengan bahan-bahan pilihan terbaik",
  },
  {
    name: "Lontong Gulai Paku + Mie",
    price: "Rp13.000",
    description: "Lontong dengan kuah gulai paku dengan tambahan mie kuning",
    img: "/lontong-gulai-paku+mie.jpeg",
    category: "Lontong",
    details: "Dibuat fresh setiap hari dengan bahan-bahan pilihan terbaik",
  },
  {
    name: "Lontong Pical",
    price: "Rp15.000",
    description: "Lontong dengan kuah kacang dengan isian mie serta sayur-sayuran segar",
    img: "/lontong-pical.jpeg",
    category: "Lontong",
  },
  {
    name: "Lontong Gulai Nangka + Mie",
    price: "Rp13.000",
    description: "Lontong dengan paduan kuah gulai nangka dengan tambahan mie kuning goreng",
    img: "/lontong-gulai-nangka.jpeg",
    category: "Lontong",
  },
  {
    name: "Lontong Gulai Nangka + Mie + Telur",
    price: "Rp17.000",
    description: "Lontong dengan paduan kuah gulai nangka dengan tambahan mie kuning goreng dan telur",
    img: "/lontong+mie+telur+nangka.jpeg",
    category: "Lontong",
  },
  {
    name: "Lontong campur + mie + telur",
    price: "Rp17.000",
    description: "Kombinasi sempurna lontong dengan kuah campur dengan tambahan telur beserta mie kuning goreng",
    img: "/lontong+campur+mie+telur.jpeg",
    category: "Lontong",  
  },
  {
    name: "Sate pical",
    price: "Rp23.000",
    description: "Sate padang dengan kuah yang terasa khas bumbu dan rempah minang dengan campuran kuah kacang",
    img: "/sate-pical.jpeg",
    category: "Sate",
  },
  {
    name: "Sate Tanpa Lontong",
    price: "Rp30.000",
    description: "Sate padang tanpa lontong dengan kuah yang terasa khas bumbu dan rempah minang",
    img: "/sate-tanpa-lontong.jpeg",
    category: "Sate",
  },
  {
    name: "Sate Padang",
    price: "Rp30.000",
    description: "Sate padang dengan kuah yang terasa khas bumbu dan rempah minang",
    img: "/sate-padang.jpeg",
    category: "Sate",
  },
   {
    name: "Sup Tanpa Nasi ",
    price: "Rp35.000",
    description: "Sup dengan isian daging tanpa tambahan nasi",
    img: "/sup-tanpa-nasi.jpeg",
    category: "Sup",
  },
  {
    name: "Sup+Nasi ",
    price: "Rp38.000",
    description: "Sup dengan isian daging dengan tambahan nasi",
    img: "/Nasi-sup.jpeg",
    category: "Sup",
  },
  {
    name: "Nasi Soto Padang Pasir",
    price: "Rp25.000",
    description: "Soto daging dengan tambahan nasi",
    img: "/nasi-soto.jpeg",
    category: "Soto",
  },
  {
    name: "Soto Jumbo",
    price: "Rp25.000",
    description: "Soto tanpa nasi dengan tambahan kuah yang melimpah",
    img: "/soto-jumbo.jpeg",
    category: "Soto",
  },
  {
    name: "Nasi Soto Komplit",
    price: "Rp25.000",
    description: "Nasi soto dengan isian mie sohun +jeroan+kerupuk kulit+telor dengan kuah yang beraroma khas bumbu padang ",
    img: "/nasi-soto-komplit.jpeg",
    category: "Soto",
  },
  {
    name: "Bubur Putih + Lopis",
    price: "Rp16.000",
    description: "Bubur Putih + Lopis",
    img: "/bubur-putih.jpeg",
    category: "Bubur",
  },
  {
    name: "Bubur Kacang Hijau +Lopis",
    price: "Rp16.000",
    description: "Bubur Putih + Lopis dengan tambahan kacang hijau",
    img: "/bubur-kacang-hijau-lopis.jpeg",
    category: "Bubur",
  },
  {
    name: "Bubur Kacang Hijau ",
    price: "Rp16.000",
    description: "Bubur Putih + Lopis",
    img: "/bubur kacang hijau.jpeg",
    category: "Bubur",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(menus.map((m) => m.category))),
];

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const controls = useAnimationControls(); // Inisialisasi controls untuk animasi
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    controls.start("shake");
  };

  const updateCartQuantity = (name: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
    if (delta > 0) controls.start("shake");
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;
    
    let message = "Halo Lontong Naya, saya ingin memesan:\n\n";

    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${item.price})\n`;
    });

    message += `\nTotal Pesanan: Rp${totalPrice.toLocaleString("id-ID")}`;
    
    const whatsappLink = `https://wa.me/6282283864119?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/\D/g, "")) || 0;
    return acc + (price * item.quantity);
  }, 0);

  const filteredMenus =
    activeCategory === "All"
      ? menus
      : menus.filter((m) => m.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  // Varian animasi untuk efek 'shake' pada badge keranjang
  const shakeVariants = {
    shake: {
      x: [0, -6, 6, -6, 6, -3, 3, 0], // Gerakan horizontal untuk efek shake
      transition: {
        type: "spring",
        stiffness: 1000, // Kekakuan tinggi untuk shake cepat
        damping: 10,     // Damping rendah untuk sedikit pantulan
        duration: 0.5,   // Durasi total animasi
      },
    },
  };
  return (
    <section id="menu" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Daftar Menu Kami
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-2">
            Nikmati kelezatan autentik dengan bahan-bahan pilihan terbaik
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16 px-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredMenus.map((item, i) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedMenu(item)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    layoutId={`menu-img-${item.name}`}
                  />
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-bold"
                  >
                    {item.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
                    >
                      {item.price}
                    </motion.p>

                    <motion.button
                      aria-label="Lihat detail menu"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        setSelectedMenu(item);
                      }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 sm:p-3 rounded-full hover:shadow-lg transition-all duration-300 text-lg sm:text-xl"
                    >
                      👁️
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Cart Summary */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 sm:bottom-6 left-4 sm:left-1/2 right-4 sm:right-auto sm:-translate-x-1/2 z-40 max-w-2xl"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 p-4 sm:p-5 md:p-7 flex flex-col gap-3 sm:gap-4">
              {/* Header Keranjang */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 sm:pb-4 gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      className="bg-gradient-to-br from-orange-500 to-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-sm sm:text-base shadow-md"
                      variants={shakeVariants}
                      animate={controls}
                    >
                      {totalItems}
                    </motion.div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-sm sm:text-base md:text-lg leading-tight">Ringkasan Pesanan</h4>
                      <p className="text-gray-500 text-xs mt-0.5">Siap untuk dikirim ke WhatsApp</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Total Est.</p>
                  <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Rp{totalPrice.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              
              {/* List Item - Horizontal Scrollable */}
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar">
                {cart.map((item) => (
                  <div 
                    key={item.name} 
                    className="flex flex-col gap-2 bg-gray-50/50 border border-gray-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl min-w-[140px] sm:min-w-[160px] relative group"
                  >
                    <span className="text-xs font-bold text-gray-800 truncate pr-2">
                      {item.name}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[10px] text-gray-400 font-medium">{item.price}</span>
                      <div className="flex items-center gap-1 sm:gap-2 bg-white rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 shadow-sm border border-gray-100">
                        <button 
                          onClick={() => updateCartQuantity(item.name, -1)}
                          className="text-gray-400 hover:text-red-500 font-bold text-xs sm:text-sm transition-colors"
                        >
                          −
                        </button>
                        <span className="text-xs font-black text-orange-600 min-w-[12px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQuantity(item.name, 1)}
                          className="text-gray-400 hover:text-green-600 font-bold text-xs sm:text-sm transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-3 w-full">
                <button
                  onClick={() => setCart([])}
                  className="px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all text-xs sm:text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={sendToWhatsApp}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base uppercase tracking-tight"
                >
                  <span>Konfirmasi</span>
                  <span className="hidden md:inline">🚀</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Modal */}
      <MenuModal
        isOpen={selectedMenu !== null}
        item={selectedMenu}
        onAddToCart={addToCart}
        onClose={() => setSelectedMenu(null)}
      />
    </section>
  );
}