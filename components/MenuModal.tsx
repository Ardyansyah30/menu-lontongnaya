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
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 cursor-pointer"
            onClick={onClose}
          >
            <div 
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden cursor-default relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 text-sm sm:text-base"
              >
                ✕
              </motion.button>

              {/* Image */}
              <div className="relative w-full h-40 sm:h-52 md:h-60">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                >
                  {item.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-orange-500 text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                >
                  {item.price}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-3 sm:mb-4 leading-tight text-xs sm:text-sm"
                >
                  {item.description}
                </motion.p>

                {item.details && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="bg-orange-50 p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 text-[10px] sm:text-xs text-gray-700"
                  >
                    <p className="font-semibold mb-1 sm:mb-2">Informasi Tambahan:</p>
                    <p>{item.details}</p>
                  </motion.div>
                )}

                {/* Quantity Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between gap-3 mb-4"
                >
                  <span className="font-semibold text-sm sm:text-base">Jumlah:</span>
                  <div className="flex items-center gap-2 sm:gap-3 border-2 border-gray-200 rounded-full px-2 sm:px-3 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-sm sm:text-base font-bold text-gray-600 hover:text-gray-900"
                    >
                      −
                    </button>
                    <span className="w-6 sm:w-8 text-center font-bold text-sm sm:text-base">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-sm sm:text-base font-bold text-gray-600 hover:text-gray-900"
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
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
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
