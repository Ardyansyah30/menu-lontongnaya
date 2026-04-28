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
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Premium Background Elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
            >
              🍜 Lontong Naya
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Menghadirkan cita rasa autentik dengan standar kualitas internasional.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  className="w-10 h-10 rounded-full border border-gray-700 hover:border-orange-500 flex items-center justify-center text-sm transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-bold text-white mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#3b82f6" }}
                      className="text-gray-400 text-sm transition-colors duration-300 hover:text-blue-500"
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
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Lontong Naya. All rights reserved. Crafted with passion.
          </p>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ color: "#3b82f6" }}
              className="text-gray-500 text-sm hover:text-blue-500 transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#3b82f6" }}
              className="text-gray-500 text-sm hover:text-blue-500 transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8"
        />
      </div>
    </footer>
  );
}
