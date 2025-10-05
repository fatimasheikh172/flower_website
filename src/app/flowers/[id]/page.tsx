"use client";

import * as React from "react";
import { flowers, Flower } from "@/data/flower";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  params: Promise<{ id: string }>;
}

export default function FlowerDetail({ params }: Props) {
  const { id } = React.use(params);

  const flower: Flower | undefined = flowers.find((f) => String(f.id) === id);

  if (!flower) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 p-10 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {flower.name}
        </motion.h1>

        {/* Back Button */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/flowers"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all text-sm sm:text-base md:text-lg"
          >
            ← Back to Flowers
          </Link>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Left */}
          <motion.div
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] mx-auto rounded-full overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
              quality={90}
              className="object-cover rounded-full"
              priority
            />
          </motion.div>

          {/* Description Right */}
          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-center md:text-left px-2 sm:px-4 lg:px-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p>{flower.description}</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
