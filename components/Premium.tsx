"use client";

import { motion } from "framer-motion";

export default function Premium() {
  const values = [
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Bahan-bahan pilihan terbaik dari supplier terpercaya",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Crafted",
      description: "Dimasak oleh chef berpengalaman dengan teknik tradisional",
    },
    {
      icon: "⚡",
      title: "Fresh Prepared",
      description: "Disiapkan saat pesanan masuk untuk kesegaran maksimal",
    },
    {
      icon: "🌍",
      title: "Local & Sustainable",
      description: "Mendukung petani lokal dan praktik berkelanjutan",
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
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 sm:top-16 md:top-20 right-10 sm:right-16 md:right-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 border border-blue-200/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-10 sm:left-16 md:left-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 border border-blue-200/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 sm:mb-4">
            KOMITMEN KAMI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nilai Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Yang Kami Janjikan
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl sm:text-5xl mb-4 sm:mb-6"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
