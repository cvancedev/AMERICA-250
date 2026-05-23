"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-07-04T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(3, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full px-6 py-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-md">
          {" "}
          <a
            href="#"
            className="text-sm font-bold uppercase tracking-[0.35em] text-white"
          >
            America250
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:flex">
            <a
              href="#history"
              className="transition duration-300 hover:text-[#d6b25e]"
            >
              History
            </a>

            <a
              href="#faith"
              className="transition duration-300 hover:text-[#d6b25e]"
            >
              Faith
            </a>

            <a
              href="#honor"
              className="transition duration-300 hover:text-[#d6b25e]"
            >
              Honor
            </a>

            <a
              href="#timeline"
              className="transition duration-300 hover:text-[#d6b25e]"
            >
              Timeline
            </a>
          </div>
        </nav>
      </header>
      <div className="absolute bottom-[-200px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#d6b25e]/20 blur-3xl" />
      {/* HERO CONTENT */}
      <section className="relative z-10 flex min-h-[115vh] flex-col items-center justify-start overflow-hidden px-6 pt-40 md:pt-56 text-center text-white">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top]"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#d6b25e]">
            1776 — 2026
          </p>

          <h1 className="max-w-5xl text-3xl leading-tight sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            250 Years of America
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#f5f1e8] md:text-4xl">
            One Nation Under God
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
            Commemorating America’s 250th birthday through faith, freedom,
            sacrifice, and the enduring hope found in God Almighty.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-black/25 px-6 py-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b25e]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#history"
              className="rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:shadow-[0_0_40px_rgba(214,178,94,0.35)]"
            >
              Begin the Journey
            </a>

            <a
              href="#faith"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Explore History
            </a>
          </div>
        </motion.div>
      </section>
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#050816]" />
      <section
        id="history"
        className="relative z-10 bg-[#050816] px-6 pt-32 pb-32 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-6xl"
        >
          {/* LARGE FADED YEAR */}
          <div className="pointer-events-none absolute right-10 top-10 text-[180px] font-bold text-white/[0.03]">
            1776
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            History
          </p>

          <h2 className="mt-6 text-5xl font-bold md:text-7xl">1776</h2>

          <div className="mt-8 h-px w-32 bg-[#d6b25e]" />

          <p className="mt-10 max-w-2xl text-lg leading-9 text-white/75">
            In 1776, a new nation was born under extraordinary circumstances.
            Through sacrifice, courage, faith, and perseverance, America began a
            journey that would shape history for generations to come.
          </p>

          <blockquote className="mt-16 max-w-2xl border-l-2 border-[#d6b25e] pl-6 text-2xl italic text-white/85">
            “We hold these truths to be self-evident, that all men are created
            equal…”
          </blockquote>
        </motion.div>
      </section>
      <div className="mx-auto h-[2px] w-full max-w-6xl bg-gradient-to-r from-transparent via-[#d6b25e]/30 to-transparent opacity-40" />
      <section
        id="faith"
        className="relative z-10 bg-[#050816] px-6 py-32 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            Faith & Freedom
          </p>

          <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                One Nation
                <br />
                Under God
              </h2>

              <div className="mt-8 h-px w-32 bg-[#d6b25e]" />

              <p className="mt-10 max-w-xl text-lg leading-9 text-white/75">
                Throughout America’s history, faith has shaped communities,
                strengthened families, and guided generations through hardship,
                sacrifice, and hope.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-300 hover:border-[#d6b25e]/40 hover:bg-white/[0.07]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6b25e]">
                Psalm 33:12
              </p>

              <blockquote className="mt-6 text-3xl font-semibold leading-relaxed text-white">
                “Blessed is the nation whose God is the Lord.”
              </blockquote>

              <p className="mt-8 text-white/60">
                A reminder that liberty without truth eventually fades, but
                faith, courage, and humility endure across generations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section
        id="honor"
        className="relative z-10 bg-[#030712] px-6 py-32 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            Honor & Sacrifice
          </p>

          <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Remembering
                <br />
                Those Who Served
              </h2>

              <div className="mt-8 h-px w-32 bg-[#d6b25e]" />

              <p className="mt-10 max-w-xl text-lg leading-9 text-white/75">
                Throughout America’s history, countless men and women answered
                the call to protect freedom, defend families, and preserve the
                liberties generations enjoy today.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-9 text-white/60">
                Their courage, sacrifice, and unwavering dedication continue to
                shape the story of this nation.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-300 hover:border-[#d6b25e]/40 hover:bg-white/[0.07]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6b25e]">
                John 15:13
              </p>

              <blockquote className="mt-6 text-3xl font-semibold leading-relaxed text-white">
                “Greater love hath no man than this, that a man lay down his
                life for his friends.”
              </blockquote>

              <div className="mt-10 h-px w-full bg-white/10" />

              <p className="mt-8 text-white/60">
                In memory of the brave individuals who served with honor,
                courage, and selflessness.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section
        id="timeline"
        className="relative z-10 bg-[#050816] px-6 py-32 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            Timeline
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            250 Years of Faith, Freedom, and Perseverance
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                year: "1776",
                title: "A Nation Is Born",
                text: "America declared independence and began a new chapter in history.",
              },
              {
                year: "1863",
                title: "A Nation Tested",
                text: "The country faced division, sacrifice, and the costly fight for union.",
              },
              {
                year: "2026",
                title: "A Nation Remembers",
                text: "America marks 250 years and reflects on freedom, faith, and responsibility.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d6b25e]/40 hover:bg-white/[0.07]"
              >
                <p className="text-sm font-semibold tracking-[0.3em] text-[#d6b25e]">
                  {item.year}
                </p>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section className="relative z-10 bg-[#030712] px-6 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]"></p>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Remember the Past.
            <br />
            Honor the Present.
            <br />
            Seek God for the Future.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/70">
            As America reaches 250 years, we look back with gratitude, stand
            today with humility, and pray for generations yet to come.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#history"
              className="rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Start Again
            </a>

            <a
              href="#faith"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Faith & Freedom
            </a>
          </div>
        </motion.div>
      </section>
      <footer className="relative z-10 border-t border-white/10 bg-[#020617] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-white">
              America250
            </p>
            <p className="mt-2 text-sm text-white/50">
              Faith. Freedom. History. Honor.
            </p>
          </div>

          <p className="text-sm text-white/45">
            Built to commemorate America’s 250th birthday, 1776–2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
