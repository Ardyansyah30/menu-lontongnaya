"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Menu",
      links: ["Lontong", "Populer", "Side Dish", "Minuman"],
    },
    {
      title: "Perusahaan",
      links: ["Tentang Kami", "Karir", "Blog", "Press"],
    },
    {
      title: "Dukungan",
      links: ["Hubungi Kami", "FAQ", "Terms", "Privacy"],
    },
  ];

  const socialLinks = [
    { icon: "f", label: "Facebook" },
    { icon: "𝕏", label: "Twitter" },
    { icon: "📷", label: "Instagram" },
    { icon: "▶️", label: "YouTube" },
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
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 overflow-hidden px-4 sm:px-6">
      {/* Premium Background Elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12 pb-8 sm:pb-10 md:pb-12 border-b border-gray-800"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
            >
              🍜 Lontong Naya
            </motion.div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Menghadirkan cita rasa autentik dengan standar kualitas internasional.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 hover:border-orange-500 flex items-center justify-center text-xs sm:text-sm transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="sm:col-span-1">
              <h4 className="font-bold text-white mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#3b82f6" }}
                      className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Lontong Naya. All rights reserved. Crafted with passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm">
            <motion.a
              href="#"
              whileHover={{ color: "#3b82f6" }}
              className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#3b82f6" }}
              className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-6 sm:mt-8"
        />
      </div>
    </footer>
  );
}
