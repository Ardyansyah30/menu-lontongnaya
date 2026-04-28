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
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 text-center bg-[#fafaf9] overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-10 text-4xl sm:text-5xl md:text-6xl opacity-20"
      >
        🍜
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-10 text-4xl sm:text-5xl md:text-6xl opacity-20"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-gray-900"
        >
          Lontong Naya
          <br />
          <span className="text-blue-600">
            Sarapan Pagi Dengan Cita Rasa Minang
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium tracking-tight"
        >
          Menghadirkan kelezatan autentik Sumatera Barat ke meja makan Anda setiap pagi. Dibuat dengan resep warisan dan bahan pilihan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="px-8 py-4 text-base rounded-xl font-bold text-white bg-blue-600 shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300"
          >
            Lihat Menu 🍽️
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 text-base rounded-xl font-bold text-blue-900 border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Pesan Sekarang 📱
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}