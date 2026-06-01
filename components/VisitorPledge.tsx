"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";

import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";

export default function VisitorPledge() {
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(0);

  useEffect(() => {
    const savedPledged = localStorage.getItem("america250-pledged");

    if (savedPledged === "true") {
      setPledged(true);
    }

    const pledgeRef = doc(db, "siteStats", "pledges");

    const unsubscribe = onSnapshot(pledgeRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setPledgeCount(data.count ?? 0);
      }
    });

    return () => unsubscribe();
  }, []);

  const handlePledge = async () => {
    if (pledged) return;

    const pledgeRef = doc(db, "siteStats", "pledges");

    await updateDoc(pledgeRef, {
      count: increment(1),
    });

    setPledged(true);

    localStorage.setItem("america250-pledged", "true");
  };

  return (
    <motion.section
      id="visitor-pledge"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-white/10 bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] p-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
          America 250
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          The America 250 Pledge
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

        <p className="mt-8 text-lg leading-8 text-white/75">
          As we celebrate 250 years of freedom, I pledge to honor the sacrifices
          made for our nation, uphold the principles of liberty, and help
          preserve the blessings of freedom for future generations.
        </p>
        <div className="mx-auto mt-8 text-center">
          <p className="text-6xl font-bold text-[#d6b25e]">{pledgeCount}</p>

          <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-white/60">
            Citizens Have Joined The America 250 Pledge
          </p>
        </div>
        {!pledged ? (
          <button
            type="button"
            onClick={handlePledge}
            className="mt-10 rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Take The Pledge
          </button>
        ) : (
          <div className="mt-10">
            <p className="text-3xl font-bold text-[#d6b25e]">🇺🇸 Thank You</p>

            <p className="mt-4 text-white/70">
              Your pledge helps carry the spirit of faith, freedom, and
              responsibility into the next generation.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
