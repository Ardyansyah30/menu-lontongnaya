"use client";

import { motion } from "framer-motion";

export default function Promo() {
  const promos = [
    {
      title: "Beli 2 Gratis 1",
      description: "Untuk semua menu pilihan",
      subtext: "(kecuali promo lain)",
      icon: "🎉",
      discount: "50%",
    },
    {
      title: "Diskon 20% Online",
      description: "Khusus pemesanan via aplikasi",
      subtext: "GooFood, ShopeeFood, GrabFood",
      icon: "📱",
      discount: "20%",
    },
    {
      title: "Loyalty Rewards",
      description: "Dapatkan poin reward setiap pembelian",
      subtext: "Tukar dengan menu gratis",
      icon: "⭐",
      discount: "∞",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section
      id="promo"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50 to-red-50 relative overflow-hidden"
    >
      {/* Premium Background Decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 sm:top-16 md:top-10 right-10 sm:right-16 md:right-10 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 border border-blue-200/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-10 left-10 sm:left-16 md:left-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 border border-blue-200/30 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-3 sm:px-4 py-2"
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-bold inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-100">
              🔥 PENAWARAN TERBATAS 🔥
            </p>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            Promo Spektakuler
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              Minggu Ini
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Jangan lewatkan kesempatan emas untuk menikmati kelezatan premium dengan harga istimewa
          </p>
        </motion.div>

        {/* Promo Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {promos.map((promo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)" }}
              className="relative p-6 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Discount Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 sm:-top-5 md:-top-6 -right-4 sm:-right-5 md:-right-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-lg"
              >
                {promo.discount}
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6 relative z-10"
              >
                {promo.icon}
              </motion.div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 relative z-10">
                {promo.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 font-semibold mb-1 sm:mb-2 relative z-10">
                {promo.description}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 relative z-10 mb-4 sm:mb-6">
                {promo.subtext}
              </p>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 sm:mt-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-lg transition-all duration-300 relative z-10 text-sm sm:text-base"
              >
                Lihat Detail →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {/* Gradient Background */}
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-90"
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 text-center text-white">
            <motion.h3
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            >
              Buruan Pesan Sebelum Kehabisan!
            </motion.h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90">
              Stok terbatas, promo berlaku hingga akhir bulan
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 font-bold py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl"
            >
              🚀 Pesan Sekarang
            </motion.a>
          </div>
        </motion.div>

        {/* Timer atau Info Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg">
            ⏰ Penawaran berakhir: <span className="text-blue-600">31 April 2026</span>
          </p>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm"
          >
            ↓ Scroll untuk detail lebih lanjut ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}