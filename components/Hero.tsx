"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-24 text-center bg-gradient-to-b from-[#f7f7f7] to-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        🍜
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-6xl opacity-20"
      >
        🥘
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Nikmatnya Makanan
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Premium UMKM Lokal
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-600 text-lg md:text-xl font-medium"
        >
          Rasa terbaik. Harga bersahabat. Dibuat dengan cinta.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-xl transition-all duration-300"
          >
            Lihat Menu 🍽️
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 rounded-full font-bold text-blue-600 border-2 border-blue-500 hover:bg-blue-50 transition-all duration-300"
          >
            Pesan Sekarang 📱
          </motion.a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/food-hero.png"
            alt="Premium UMKM Food"
            className="mx-auto w-full max-w-[700px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "1000+", label: "Pelanggan Puas" },
            { number: "6+", label: "Menu Pilihan" },
            { number: "24/7", label: "Layanan Siap" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white shadow-lg"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}