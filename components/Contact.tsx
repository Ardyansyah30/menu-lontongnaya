"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const contactMethods = [
    {
      icon: "📱",
      title: "WhatsApp",
      description: "Chat langsung untuk pesanan cepat",
      action: "wa.me/6281270859575",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "📞",
      title: "Telepon",
      description: "Hubungi tim layanan kami",
      action: "6281270859575",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "✉️",
      title: "Email",
      description: "Kirim pertanyaan atau feedback",
      action: "info@lontonnaya.com",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const deliveryPlatforms = [
    {
      name: "GooFood",
      icon: "🛵",
      color: "from-red-500 to-red-600",
      description: "Pesan langsung via GoFood",
      link: "https://gofood.link/a/yVn5B3C",
    },
    {
      name: "ShopeeFood",
      icon: "🛒",
      color: "from-orange-500 to-orange-600",
      description: "Gratis ongkir untuk order baru",
      link: "https://shopee.co.id/now-food", // Ganti dengan link toko Anda
    },
    {
      name: "GrabFood",
      icon: "🚗",
      color: "from-green-500 to-green-700",
      description: "Cashback hingga 30%",
      link: "https://food.grab.com", // Ganti dengan link toko Anda
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
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative overflow-hidden"
    >
      {/* Premium Background Animations */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
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
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-bold mb-3 sm:mb-4">
            HUBUNGI KAMI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Siap Melayani Anda
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              24/7
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Layanan pelanggan premium kami siap membantu Anda kapan saja
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={method.action.startsWith("wa.me") ? `https://${method.action}?text=Halo%20Lontong%20Naya` : `tel:${method.action}`}
              target={method.action.startsWith("wa.me") ? "_blank" : "_self"}
              rel={method.action.startsWith("wa.me") ? "noopener noreferrer" : ""}
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)",
              }}
              className={`relative p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} text-white overflow-hidden group cursor-pointer`}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl sm:text-5xl mb-4 sm:mb-6 relative z-10"
              >
                {method.icon}
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 relative z-10">{method.title}</h3>
              <p className="text-white/90 text-sm sm:text-base relative z-10">{method.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-1 bg-white/30"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Delivery Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-center text-xs sm:text-sm uppercase tracking-widest text-orange-400 font-bold mb-3 sm:mb-4">
            PLATFORM DELIVERY
          </p>
          <h3 className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Pesan Melalui Aplikasi Favorit Anda
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {deliveryPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${platform.color} text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 block`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                >
                  {platform.icon}
                </motion.div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{platform.name}</h4>
                <p className="text-white/90 text-xs sm:text-sm">{platform.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: "📍 Lokasi", value: "Jakarta Timur, Indonesia" },
              { label: "🕐 Jam Buka", value: "10:00 - 21:00 WIB" },
              { label: "📱 WhatsApp", value: "+62 822 8386 4119" },
              { label: "✉️ Email", value: "info@lontonnaya.com" },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl mb-2">{info.label.split(" ")[0]}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{info.label.split(" ").slice(1).join(" ")}</p>
                <p className="text-white font-semibold text-sm sm:text-base mt-2">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <motion.a
            href="https://wa.me/6282283864119?text=Halo%20Lontong%20Naya%2C%20saya%20ingin%20memesan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            🚀 Pesan Sekarang via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}