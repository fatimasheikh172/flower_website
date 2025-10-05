"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen sm:h-screen md:h-[90vh] lg:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Flower background"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Overlay Content */}
      <motion.div
        className="z-10 px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg mb-4 leading-tight">
          Welcome to LuxeBlooms
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-md sm:max-w-xl md:max-w-2xl mx-auto drop-shadow">
          Discover our premium collection of flowers, crafted with love and elegance for every occasion.
        </p>
        <Link
          href="/flowers"
          className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-xl sm:rounded-2xl shadow-lg transition duration-300"
        >
          Explore Flowers
        </Link>
      </motion.div>
    </section>
  );
}
