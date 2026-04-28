"use client";

import { motion } from "framer-motion";

export default function OrderLinks() {
  const orderLinks = [
    {
      name: "WhatsApp",
      icon: "📱",
      color: "from-green-400 to-green-600",
      url: "https://wa.me/6282283864119?text=Halo%20Lontong%20Naya%2C%20saya%20ingin%20memesan",
      description: "Chat langsung dengan tim kami",
      benefit: "Respon cepat 24/7",
    },
    {
      name: "GooFood",
      icon: "🛵",
      color: "from-red-400 to-red-600",
      url: "#",
      description: "Pesan dengan diskon khusus",
      benefit: "Gratis ongkir hari ini",
    },
    {
      name: "ShopeeFood",
      icon: "🛒",
      color: "from-orange-400 to-orange-600",
      url: "#",
      description: "Kemudahan pembayaran Shopee",
      benefit: "Cashback hingga 50%",
    },
    {
      name: "GrabFood",
      icon: "🚗",
      color: "from-green-500 to-green-700",
      url: "#",
      description: "Gratis ongkir untuk member baru",
      benefit: "Promo spesial GrabFood",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Premium Background */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-4">
            CARA MUDAH PESAN
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Pesan Melalui Platform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Pilihan Anda
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kemudahan berbelanja dengan berbagai pilihan platform delivery terpercaya
          </p>
        </motion.div>

        {/* Order Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {orderLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)",
              }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${link.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer`}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                  className="text-5xl mb-4"
                >
                  {link.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">{link.name}</h3>
                <p className="text-white/90 text-sm mb-4 font-medium">
                  {link.description}
                </p>

                {/* Benefit Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white"
                >
                  ✨ {link.benefit}
                </motion.div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-6 text-lg"
                >
                  →
                </motion.div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Mengapa Memilih Kami?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Kualitas Terjamin", desc: "Bahan premium, higienis, dan lezat" },
              { title: "Pengiriman Cepat", desc: "Sampai dalam kondisi hangat & segar" },
              { title: "Harga Kompetitif", desc: "Terbaik untuk kualitas yang diberikan" },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                <p className="text-gray-600 text-sm">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
