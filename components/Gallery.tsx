"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { id: 1, title: "Lontong Signature", img: "/burger.jpg" },
    { id: 2, title: "Sayuran Segar", img: "/ayam.jpg" },
    { id: 3, title: "Presentasi Premium", img: "/nasgor.jpg" },
    { id: 4, title: "Bahan Pilihan", img: "/burger.jpg" },
    { id: 5, title: "Proses Tradisional", img: "/ayam.jpg" },
    { id: 6, title: "Hasil Sempurna", img: "/nasgor.jpg" },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-orange-600 font-bold mb-4">
            GALERI KAMI
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Showcase Kualitas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Premium Kami
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Setiap hidangan adalah karya seni yang dirancang dengan sempurna dan cinta
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <motion.img
                src={image.img}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8"
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">Dibuat dengan presisi dan cinta</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
