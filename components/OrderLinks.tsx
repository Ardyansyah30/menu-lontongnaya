"use client";

import { motion } from "framer-motion";

export default function OrderLinks() {
  const orderLinks = [
    {
      name: "WhatsApp",
      icon: "📱",
      color: "from-green-400 to-green-600",
      url: "https://wa.me/6281270859575?text=Halo%20Lontong%20Naya%2C%20saya%20ingin%20memesan",
      description: "Chat langsung dengan tim kami",
      benefit: "Respon cepat 24/7",
    },
    {
      name: "GooFood",
      icon: "🛵",
      color: "from-red-400 to-red-600",
      url: "https://gofood.link/a/yVn5B3C",
      description: "Pesan dengan diskon khusus",
      benefit: "Gratis ongkir hari ini",
    },
    {
      name: "ShopeeFood",
      icon: "🛒",
      color: "from-orange-400 to-orange-600",
      url: "https://shopee.co.id/now-food", // Ganti dengan link toko ShopeeFood Anda
      description: "Kemudahan pembayaran Shopee",
      benefit: "Cashback hingga 50%",
    },
    {
      name: "GrabFood",
      icon: "🚗",
      color: "from-green-500 to-green-700",
      url: "https://food.grab.com", // Ganti dengan link toko GrabFood Anda
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
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Premium Background */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 sm:top-16 md:top-20 right-10 sm:right-16 md:right-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-10 sm:left-16 md:left-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 sm:mb-4">
            CARA MUDAH PESAN
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-gray-900 tracking-tight">
            Pesan Melalui Platform
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Pilihan Anda
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto px-2 font-medium leading-relaxed">
            Nikmati kemudahan memesan hidangan favorit Anda melalui berbagai platform delivery terkemuka.
          </p>
        </motion.div>

        {/* Order Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16"
        >
          {orderLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
              }}
              className={`relative p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white text-gray-900 shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col items-center justify-center`}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-5xl sm:text-6xl mb-4 sm:mb-5"
                >
                  {link.icon}
                </motion.div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-900 tracking-tight">{link.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 font-medium text-center">
                  {link.description}
                </p>

                {/* Benefit Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-xs font-bold"
                >
                  ✨ {link.benefit}
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="mt-4 sm:mt-6 text-blue-600 text-xl font-bold"
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
          className="bg-blue-50/50 border border-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold text-blue-800 mb-6 px-2 tracking-tight">
            Mengapa Memilih Kami?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Kualitas Terjamin", desc: "Bahan premium, higienis, dan lezat." },
              { title: "Pengiriman Cepat", desc: "Pesanan Anda tiba dalam kondisi hangat & segar." },
              { title: "Harga Kompetitif", desc: "Nilai terbaik untuk kualitas hidangan yang istimewa." },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-blue-800 text-sm sm:text-base md:text-lg mb-2 tracking-tight">{info.title}</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
