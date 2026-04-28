"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import OrderLinks from "../components/OrderLinks";
import Premium from "../components/Premium";
import Promo from "../components/Promo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  /* Parallax Layers */
  const topLayer = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const midLayer = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const slowLayer = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen bg-[#faf7f2] text-gray-900 overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div
        style={{ y: slowLayer }}
        className="fixed top-[-10%] left-[-10%] w-48 sm:w-72 md:w-96 lg:w-[500px] h-48 sm:h-72 md:h-96 lg:h-[500px] rounded-full bg-orange-300/20 blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10"
      />

      <motion.div
        style={{ y: midLayer }}
        className="fixed top-[35%] right-[-10%] w-56 sm:80 md:w-[400px] lg:w-[650px] h-56 sm:h-80 md:h-[400px] lg:h-[650px] rounded-full bg-yellow-300/20 blur-[100px] sm:blur-[120px] md:blur-[140px] -z-10"
      />

      <motion.div
        style={{ y: topLayer }}
        className="fixed bottom-[-15%] left-[15%] w-56 sm:w-80 md:w-96 lg:w-[700px] h-56 sm:h-80 md:h-96 lg:h-[700px] rounded-full bg-red-300/10 blur-[100px] sm:blur-[120px] md:blur-[140px] -z-10"
      />

      {/* Running Text */}
      <div className="w-full overflow-hidden border-b border-orange-100 bg-white/80 backdrop-blur-xl">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 24,
            ease: "linear",
          }}
          className="flex whitespace-nowrap py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.28em] uppercase text-orange-600"
        >
          <span className="mx-4 sm:mx-6 md:mx-8">Fresh Ingredients</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Traditional Taste</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Premium Quality</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Fast Delivery</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Trusted UMKM Food</span>

          <span className="mx-4 sm:mx-6 md:mx-8">Fresh Ingredients</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Traditional Taste</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Premium Quality</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Fast Delivery</span>
          <span className="mx-4 sm:mx-6 md:mx-8">Trusted UMKM Food</span>
        </motion.div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <motion.section style={{ y: topLayer }}>
        <Hero />
      </motion.section>

      <motion.section style={{ y: midLayer }} className="py-10">
        <About />
      </motion.section>

      <section className="py-10">
        <Menu />
      </section>

      <motion.section style={{ y: midLayer }} className="py-10">
        <Gallery />
      </motion.section>

      <motion.section style={{ y: topLayer }} className="py-10">
        <Premium />
      </motion.section>

      <motion.section style={{ y: midLayer }} className="py-10">
        <OrderLinks />
      </motion.section>

      <motion.section style={{ y: slowLayer }} className="py-10">
        <Promo />
      </motion.section>

      <motion.section style={{ y: topLayer }} className="pt-10 pb-20">
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}