"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
}

export default function MenuModal({ isOpen, item, onAddToCart, onClose }: MenuModalProps) {
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 cursor-pointer overflow-y-auto"
            onClick={onClose}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden cursor-default relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600"
              >
                ✕
              </motion.button>

              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover"
                layoutId={`menu-img-${item.name}`}
              />

              {/* Content */}
              <div className="p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold mb-2"
                >
                  {item.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-orange-500 text-2xl font-bold mb-4"
                >
                  {item.price}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-6 leading-relaxed"
                >
                  {item.description}
                </motion.p>

                {item.details && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="bg-orange-50 p-4 rounded-2xl mb-6 text-sm text-gray-700"
                  >
                    <p className="font-semibold mb-2">Informasi Tambahan:</p>
                    <p>{item.details}</p>
                  </motion.div>
                )}

                {/* Quantity Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <span className="font-semibold">Jumlah:</span>
                  <div className="flex items-center gap-3 border-2 border-gray-200 rounded-full px-4 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-lg font-bold text-gray-600 hover:text-gray-900"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-lg font-bold text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </motion.div>

                {/* Order Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAdd}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  🛒 Tambah ke Keranjang
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
