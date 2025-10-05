"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaGem, FaHeart, FaSpa } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-rose-200 dark:from-pink-950 dark:via-rose-900 dark:to-pink-600 text-gray-900 dark:text-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h3
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-serif p-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">LuxeBlooms</span>
        </motion.h3>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed font-sans mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          At <span className="font-bold">LuxeBlooms</span>, we go beyond flowers — 
          we craft emotions into elegant arrangements. Every bouquet tells a story of love, 
          beauty, and celebration, designed to make your moments unforgettable.
        </motion.p>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {[
            {
              title: "Elegance in Every Petal",
              desc: "Each bloom is carefully chosen to create timeless arrangements that embody beauty and grace.",
              icon: <FaSpa />,
            },
            {
              title: "Nature’s Essence",
              desc: "We source fresh, sustainable flowers, bringing the calming spirit of nature into every design.",
              icon: <FaLeaf />,
            },
            {
              title: "Emotions that Bloom",
              desc: "From joy to remembrance, our creations express the emotions words cannot capture.",
              icon: <FaHeart />,
            },
            {
              title: "Luxury Experience",
              desc: "More than flowers, we deliver an experience of refinement, luxury, and artistry.",
              icon: <FaGem />,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/60 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-3 text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {item.icon}
                <h4 className="font-bold">{item.title}</h4>
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
