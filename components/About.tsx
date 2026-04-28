"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    { icon: "🥘", title: "Bahan Premium", desc: "Dipilih dengan teliti" },
    { icon: "⚡", title: "Cepat & Fresh", desc: "Disajikan hangat" },
    { icon: "💚", title: "Harga Terjangkau", desc: "Kualitas terjamin" },
    { icon: "👨‍👩‍👧‍👦", title: "Keluarga", desc: "Untuk semua orang" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#f8f8f8] relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-20" />
            
            {/* Gambar Utama */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 20 }}
              src="/lontongnaya.jpeg"
              alt="Tentang UMKM"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[500px] object-cover relative"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-500 mb-3 sm:mb-4 font-bold"
            >
              ✨ Tentang Kami
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Lontong Naya
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Menyediakan Sarapan Pagi Untuk Keluarga Anda
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Kami adalah usaha kuliner lokal yang menghadirkan makanan sarapan pagi
              berkualitas dengan bahan pilihan, rasa premium, dan harga terjangkau untuk semua kalangan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Dengan pelayanan cepat dan cita rasa konsisten, kami siap
              menjadi pilihan terbaik keluarga Anda.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="inline-block mt-6 sm:mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-full hover:shadow-lg transition-all duration-300"
            >
              Lihat Menu Kami →
            </motion.a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-3xl sm:text-4xl mb-3 sm:mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}