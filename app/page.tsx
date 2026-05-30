"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const targetDate = new Date("2026-07-04T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [showPrayer, setShowPrayer] = useState(false);
  const [showGoldStarPrayer, setShowGoldStarPrayer] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

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

  const quotes = [
    {
      text: "Blessed is the nation whose God is the Lord.",
      author: "Psalm 33:12",
    },
    {
      text: "It is impossible to rightly govern a nation without God and the Bible.",
      author: "George Washington",
    },
    {
      text: "We have been the recipients of the choicest bounties of Heaven.",
      author: "Abraham Lincoln",
    },
    {
      text: "Freedom is never more than one generation away from extinction.",
      author: "Ronald Reagan",
    },
    {
      text: "Our Constitution was made only for a moral and religious people.",
      author: "John Adams",
    },
    {
      text: "The advancement and diffusion of knowledge is the only guardian of true liberty.",
      author: "James Madison",
    },
    {
      text: "America was born to exemplify devotion to the elements of righteousness.",
      author: "Woodrow Wilson",
    },
    {
      text: "The future doesn't belong to the fainthearted; it belongs to the brave.",
      author: "Ronald Reagan",
    },
    {
      text: "Those who deny freedom to others deserve it not for themselves.",
      author: "Abraham Lincoln",
    },
    {
      text: "The God who gave us life gave us liberty at the same time.",
      author: "Thomas Jefferson",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <main className="relative min-h-[80vh] overflow-hidden">
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
      <section className="relative z-10 flex min-h-[115vh] flex-col items-center justify-start overflow-hidden px-6 pt-32 md:pt-40 text-center text-white">
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

          <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            250 Years of America
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#f5f1e8] md:text-4xl">
            One Nation Under God
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
            Commemorating America’s 250th birthday through faith, freedom,
            sacrifice, and the enduring hope found in God Almighty.
          </p>
          <div className="mt-6 text-sm tracking-[0.3em] text-[#d4af37] uppercase">
            Countdown to July 4, 2026
          </div>

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
          <div className="mt-8 w-full max-w-2xl">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b25e]">
              <span>1776</span>
              <span>250TH ANNIVERSARY APPROACHING</span>
              <span>2026</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#d6b25e] shadow-[0_0_25px_rgba(214,178,94,0.55)]"
                style={{ width: "98%" }}
              />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              250 Years of Faith, Freedom, and Perseverance
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#history"
              className="rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105 hover:shadow-[0_0_40px_rgba(214,178,94,0.35)]"
            >
              Begin the Journey
            </a>

            <a
              href="#timeline"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Explore History
            </a>
          </div>
        </motion.div>
      </section>

      <section
        id="history"
        className="relative z-10 scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-32 pb-32 text-white"
      >
        {/* HISTORY BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 blur-[1px]"
          style={{
            backgroundImage: "url('/images/history.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#050816]/45" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl"
        >
          {/* LARGE FADED YEAR */}
          <div className="pointer-events-none absolute right-10 top-10 text-[180px] font-bold text-[#d6b25e]/[0.05]">
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
          <button
            onClick={() => setShowDeclaration(true)}
            className="mt-10 rounded-full border border-[#d6b25e]/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e] transition hover:bg-[#d6b25e] hover:text-black"
          >
            Read the Declaration
          </button>
        </motion.div>
      </section>

      <section
        id="faith"
        className="relative z-10 scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-32 pb-32 text-white"
      >
        {/* FAITH BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-[85%_center] opacity-60 blur-[1px]"
          style={{
            backgroundImage: "url('/images/faith-bg.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#050816]/45" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl"
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
            <button
              onClick={() => setShowPrayer(true)}
              className="rounded-full border border-[#d6b25e]/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#d6b25e] transition hover:bg-[#d6b25e] hover:text-black"
            >
              Prayer for America
            </button>
          </div>
        </motion.div>
      </section>

      <section
        id="honor"
        className="relative z-10 scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-32 pb-32 text-white"
      >
        {/* HONOR BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-[85%_center] opacity-70 blur-[1px]"
          style={{
            backgroundImage: "url('/images/honor-bg.jpg')",
          }}
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#050816]/40" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl"
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

          <div className="mt-16 text-center">
            <p className="text-3xl italic text-white/90 font-cinzel">
              "They gave their tomorrow so we could have today."
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-white/65 leading-8">
              In memory of the brave men and women who answered the call of duty
              and never returned home. Their sacrifice secured freedoms enjoyed
              by generations they would never meet.
            </p>
            <button
              onClick={() => setShowGoldStarPrayer(true)}
              className="mt-8 rounded-full border border-[#d6b25e]/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d6b25e] transition hover:bg-[#d6b25e] hover:text-black"
            >
              Prayer for Gold Star Families
            </button>
          </div>
        </motion.div>
      </section>

      <section
        id="timeline"
        className="relative z-10 scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-32 pb-32 text-white"
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#050816]/75" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            Timeline
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            250 Years of Faith, Freedom, and Perseverance
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                year: "1776",
                title: "A Nation Is Born",
                text: "The Declaration of Independence marks the birth of the United States.",
                details: ["📍 Philadelphia, Pennsylvania", "📅 July 4, 1776"],
              },
              {
                year: "1787",
                title: "The Constitution Signed",
                text: "The framework of American government is written and adopted.",
                details: [
                  "📍 Philadelphia, Pennsylvania",
                  "📅 September 17, 1787",
                ],
              },
              {
                year: "1863",
                title: "A Nation Tested",
                text: "Through civil war and sacrifice, America wrestles with liberty and union.",
                details: ["📍 Gettysburg, Pennsylvania", "📅 July 1, 1863"],
              },
              {
                year: "1917",
                title: "The Great War",
                text: "America enters World War I, helping shape the future of the modern world.",
                details: ["📍 Various Locations", "📅 April 6, 1917"],
              },
              {
                year: "1945",
                title: "Victory in World War II",
                text: "The United States and its allies secure victory after years of sacrifice.",
                details: ["🪖 Allied Victory", "📅 September 2, 1945"],
              },
              {
                year: "1969",
                title: "A Nation Reaches the Moon",
                text: "Apollo 11 lands on the moon, demonstrating American innovation and courage.",
                details: ["🚀 Apollo 11", "🌙 July 20, 1969"],
              },
              {
                year: "2001",
                title: "A Nation Stands Together",
                text: "Following September 11, Americans unite in grief, resolve, and remembrance.",
                details: ["📍 New York, NY", "📅 September 11, 2001"],
              },
              {
                year: "2001–2021",
                title: "A Generation Serves",
                text: "Following September 11, American service members answered the call across Afghanistan, Iraq, and around the world.",
                details: [
                  "📍 Afghanistan, Iraq",
                  "📅 September 11, 2001 – 2021",
                ],
              },
              {
                year: "2020",
                title: "A Nation Endures",
                text: "Americans faced unprecedented challenges while communities, faith, and resilience carried the nation forward.",
                details: ["📍 Across America", "📅 2020"],
              },
              {
                year: "2026",
                title: "America Turns 250",
                text: "The nation reflects on faith, freedom, sacrifice, and responsibility.",
                details: ["📍 Washington, D.C.", "📅 2026"],
              },
            ].map((item) => (
              <div
                key={item.year}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#d6b25e]/40 hover:bg-white/[0.07]"
              >
                <p className="text-sm font-semibold tracking-[0.3em] text-[#d6b25e]">
                  {item.year}
                </p>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-8 text-white/65">{item.text}</p>
                {item.details && (
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-6 group-hover:max-h-40 group-hover:opacity-100">
                    <div className="h-px w-16 bg-[#d6b25e]/50 mb-4" />

                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-sm text-white/70 leading-7"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mt-16 max-w-3xl text-center"
          >
            <blockquote className="text-2xl italic text-white/85 md:text-3xl">
              "{quotes[quoteIndex].text}"
            </blockquote>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">
              {quotes[quoteIndex].author}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative bg-[#050816] px-6 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            America At 250
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            A Nation Built Through Generations
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "250", label: "Years of Freedom" },
              { value: "50", label: "States United" },
              { value: "340M+", label: "Americans" },
              { value: "1", label: "Nation Under God" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d6b25e]/40 hover:bg-white/[0.07]"
              >
                <p className="text-5xl font-bold text-[#d6b25e]">
                  {item.value}
                </p>

                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 bg-[#030712] px-6 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
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
      <section className="relative bg-[#050816] px-6 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
            Looking Ahead
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            The Next 250 Years
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#d6b25e]" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/75">
            The story of America is still being written. The freedoms preserved,
            the values upheld, the sacrifices remembered, and the faith passed
            to future generations will shape the next chapter of our nation’s
            journey.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/75">
            As we celebrate 250 years of history, may we also look forward with
            gratitude, humility, courage, and hope, remembering that every
            generation has a responsibility to leave something better for those
            who follow.
          </p>

          <blockquote className="mt-12 text-2xl italic text-white/85">
            "If My people, which are called by My name, shall humble themselves,
            and pray, and seek My face, and turn from their wicked ways; then
            will I hear from heaven, and will forgive their sin, and will heal
            their land."
          </blockquote>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b25e]">
            2 Chronicles 7:14
          </p>
        </motion.div>
      </section>
      <footer className="relative z-10 border-t border-white/10 bg-[#020617] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-white">
              America250
            </p>
            <p className="mt-2 text-sm text-white/50">
              Faith. Freedom. Sacrifice. Perseverance.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b25e] transition hover:text-white"
            >
              Back to Top
            </a>
          </div>

          <p className="text-sm text-white/45">
            Built to commemorate America’s 250th birthday, 1776–2026.
          </p>
        </div>
      </footer>
      {showPrayer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative max-w-2xl rounded-[32px] border border-[#d6b25e]/30 bg-[#050816]/95 p-8 text-center text-white shadow-[0_0_80px_rgba(214,178,94,0.18)] md:p-12"
          >
            <button
              onClick={() => setShowPrayer(false)}
              className="absolute right-5 top-5 text-2xl text-white/50 transition hover:text-white"
              aria-label="Close prayer modal"
            >
              ×
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
              Prayer
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Prayer for America
            </h2>

            <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

            <div className="mt-8 space-y-5 text-lg leading-9 text-white/75">
              <p>Heavenly Father,</p>

              <p>
                As America marks 250 years, we thank You for the blessings of
                liberty, faith, and opportunity.
              </p>

              <p>
                Grant wisdom to our leaders, strength to our families, courage
                to our communities, and hearts that seek Your truth.
              </p>

              <p>
                May future generations remember the sacrifices of those who came
                before and walk with integrity, humility, and hope.
              </p>

              <p>In Jesus&apos; name, Amen.</p>
            </div>

            <button
              onClick={() => setShowPrayer(false)}
              className="mt-10 rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
      {showGoldStarPrayer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative max-w-2xl rounded-[32px] border border-[#d6b25e]/30 bg-[#050816]/95 p-8 text-center text-white shadow-[0_0_80px_rgba(214,178,94,0.18)] md:p-12"
          >
            <button
              onClick={() => setShowGoldStarPrayer(false)}
              className="absolute right-5 top-5 text-2xl text-white/50 transition hover:text-white"
            >
              ×
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
              Honor & Remembrance
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Prayer for Gold Star Families
            </h2>

            <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

            <div className="mt-8 space-y-5 text-lg leading-9 text-white/75">
              <p>Heavenly Father,</p>

              <p>
                We lift up the families who have lost loved ones in defense of
                our freedom.
              </p>

              <p>
                Comfort them in their grief, strengthen them in their sorrow,
                and remind them that their sacrifice is not forgotten.
              </p>

              <p>
                May their loved ones be remembered with honor, gratitude, and
                deep respect by a thankful nation.
              </p>

              <p>
                Give these families peace that only You can provide, and
                surround them with love, support, and hope.
              </p>

              <p>In Jesus&apos; name, Amen.</p>
            </div>

            <button
              onClick={() => setShowGoldStarPrayer(false)}
              className="mt-10 rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
      {showDeclaration && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative max-w-3xl rounded-[32px] border border-[#d6b25e]/30 bg-[#050816]/95 p-8 text-center text-white shadow-[0_0_80px_rgba(214,178,94,0.18)] md:p-12"
          >
            <button
              onClick={() => setShowDeclaration(false)}
              className="absolute right-5 top-5 text-2xl text-white/50 transition hover:text-white"
              aria-label="Close declaration modal"
            >
              ×
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6b25e]">
              July 4, 1776
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Declaration of Independence
            </h2>

            <div className="mx-auto mt-6 h-px w-24 bg-[#d6b25e]" />

            <blockquote className="mt-8 text-xl italic leading-9 text-white/80 md:text-2xl">
              “We hold these truths to be self-evident, that all men are created
              equal, that they are endowed by their Creator with certain
              unalienable Rights, that among these are Life, Liberty and the
              pursuit of Happiness.”
            </blockquote>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60">
              These words became one of the most recognized statements of
              liberty in American history and helped define the nation’s
              founding ideals.
            </p>

            <button
              onClick={() => setShowDeclaration(false)}
              className="mt-10 rounded-full bg-[#d6b25e] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
