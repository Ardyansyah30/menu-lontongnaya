"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: "#menu" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="font-black text-xl sm:text-2xl md:text-3xl tracking-tighter text-blue-900 cursor-pointer whitespace-nowrap"
        >
          🍜 Lontong Naya
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-xs sm:text-sm md:text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                color: "#2563eb",
                scale: 1.05,
              }}
              className="relative text-gray-700 transition-colors duration-300"
            >
              {item.label}
              <motion.span
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 origin-left"
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gray-700 rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 rounded-full"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm sm:text-base text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}