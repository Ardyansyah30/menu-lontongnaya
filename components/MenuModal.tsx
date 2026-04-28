"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  img: string;
  category: string;
  details?: string;
}

interface MenuModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onClose: () => void;
  clickPosition?: { x: number; y: number };
}

export default function MenuModal({ isOpen, item, onAddToCart, onClose, clickPosition }: MenuModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity ke 1 setiap kali item berganti atau modal dibuka
  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen, item?.name]);

  // Kita tidak langsung return null agar AnimatePresence bisa menjalankan animasi keluar

  const handleAdd = () => {
    if (!item) return;
    onAddToCart(item, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            onClick={onClose}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden cursor-default relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow-md transition-colors"
              >
                ✕
              </motion.button>

              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto bg-gray-50 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-4"
                  >
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
                  >
                    {item.name}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-blue-600 text-2xl font-bold mb-4 tracking-tight"
                  >
                    {item.price}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>

                    {item.details && (
                      <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl text-sm text-gray-700">
                        <p className="font-bold text-blue-800 mb-1">💡 Catatan:</p>
                        <p>{item.details}</p>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="mt-8 space-y-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="ml-2 font-bold text-gray-700">Jumlah</span>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        −
                      </motion.button>
                      <span className="w-8 text-center font-black text-lg text-gray-800">
                        {quantity}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAdd}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 text-base uppercase tracking-wider"
                  >
                    <span>Tambah ke Keranjang</span>
                    <span className="text-xl">🛒</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
