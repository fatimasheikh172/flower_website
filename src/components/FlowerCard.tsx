"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface FlowerCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function FlowerCard({ id, name, description, image }: FlowerCardProps) {
  return (
    <motion.div
      className=" dark:bg-gray-500 rounded-2xl shadow-md overflow-hidden transition hover:scale-[1.02] duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-2xl"
        priority    
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description.slice(0, 100)}...
        </p>
        <Link
          href={`/flowers/${id}`}
          className="inline-block bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
