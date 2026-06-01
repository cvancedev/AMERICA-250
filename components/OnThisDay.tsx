"use client";
import { motion } from "framer-motion";

const historyEvents = [
  {
    date: "January 1",
    title: "The Emancipation Proclamation Takes Effect",
    year: "1863",
    text: "President Abraham Lincoln's Emancipation Proclamation took effect, declaring freedom for enslaved people in Confederate-held territory.",
  },
  {
    date: "July 4",
    title: "Declaration of Independence Adopted",
    year: "1776",
    text: "The Continental Congress adopted the Declaration of Independence, marking the birth of the United States.",
  },
  {
    date: "September 17",
    title: "The Constitution Signed",
    year: "1787",
    text: "Delegates signed the United States Constitution in Philadelphia.",
  },
];

export default function OnThisDay() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const event =
    historyEvents.find((item) => item.date === formattedDate) ||
    historyEvents[1];

  return (
  <motion.section
  id="on-this-day"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="relative border-t border-white/10 bg-[#050816] px-6 py-24 text-white"
>
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] p-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
          On This Day
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          American History Moment
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/50">
          {formattedDate}
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-[28px] border border-[#d6b25e]/20 bg-white/[0.04] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d6b25e]">
            {event.year}
          </p>

          <h3 className="mt-4 text-2xl font-bold">{event.title}</h3>

          <p className="mt-4 leading-8 text-white/70">{event.text}</p>
        </div>
      </div>
    </motion.section>
  );
}