"use client";
import FlowerCard from "@/components/FlowerCard";
import { flowers } from "@/data/flower";
import { motion } from "framer-motion";

export default function AllFlowersPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-12 py-12 sm:py-10 min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 text-gray-900 dark:text-gray-100">
      
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-2xl md:text-5xl font-extrabold text-center p-10 mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌸 Explore Our Flowers
      </motion.h1>

      {/* Flower Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <FlowerCard
                id={flower.id}
                name={flower.name}
                description={flower.description}
                image={flower.image}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
