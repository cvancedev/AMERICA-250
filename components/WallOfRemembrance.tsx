"use client";

import { motion } from "framer-motion";

export default function WallOfRemembrance() {
  return (
    <motion.section
      id="wall-of-remembrance"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-white/10 bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
          Wall of Remembrance
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">Never Forgotten</h2>

        <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/75">
          Throughout America's history, brave men and women answered the call of
          duty. Many never returned home. Their sacrifice secured freedoms
          enjoyed by generations they would never meet.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Revolutionary War",
            "Civil War",
            "World War I",
            "World War II",
            "Korea",
            "Vietnam",
            "Gulf War",
            "Global War on Terror",
          ].map((war) => (
            <div
              key={war}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#d6b25e]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 text-3xl">⭐</div>

              <h3 className="text-xl font-bold">{war}</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Honoring those who served and sacrificed in defense of freedom.
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-20 max-w-4xl text-2xl italic text-white/85 md:text-3xl">
          "All gave some. Some gave all."
        </blockquote>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">
          In Eternal Gratitude
        </p>
      </div>
    </motion.section>
  );
}
