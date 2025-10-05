"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-red-900 via-pink-700 to-pink-900 text-white min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center drop-shadow-lg p-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg mx-auto flex flex-col gap-5 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg px-4 py-3 bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg px-4 py-3 bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full rounded-lg px-4 py-3 bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg py-3 font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </main>
  );
}
