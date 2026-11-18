"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon.");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/home/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-[#111111] border border-[#d4af37]/30 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold gold-text">Welcome Back</h1>
            <p className="text-white/60 text-sm mt-2">Login to your The Pearl account</p>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="pearl-input w-full px-4 py-3 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pearl-input w-full px-4 py-3 rounded-md"
                required
              />
            </div>
            <button type="submit" className="btn-gold w-full py-3 rounded-md font-bold uppercase tracking-wider">
              Login
            </button>
          </form>

          <p className="text-center text-white/50 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <a href="/contact" className="text-[#d4af37] hover:underline">Contact us</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
