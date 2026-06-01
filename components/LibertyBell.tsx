"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LibertyBell() {
  const [rang, setRang] = useState(false);

  return (
    <motion.section
      id="liberty-bell"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-white/10 bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] p-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
          Liberty Bell
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Ring the Bell of Freedom
        </h2>

        <button
          type="button"
          onClick={() => setRang(true)}
          className={`mt-10 text-7xl transition duration-500 ${
            rang ? "rotate-6 scale-110" : ""
          }`}
        >
          🔔
        </button>

        {!rang ? (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Click the bell to reveal a reminder of liberty.
          </p>
        ) : (
          <div className="mx-auto mt-8 max-w-2xl rounded-[28px] border border-[#d6b25e]/30 bg-white/[0.04] p-8">
            <p className="text-xl font-semibold text-[#d6b25e]">
              Proclaim Liberty Throughout All the Land
            </p>

            <p className="mt-4 leading-8 text-white/70">
              The Liberty Bell remains one of America’s most recognized symbols
              of freedom, reminding each generation that liberty is both a gift
              and a responsibility.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
