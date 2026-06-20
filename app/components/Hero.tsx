'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950 text-white py-20 px-4 sm:px-6"
    >
      {/* Background Parallax Grid & Glow */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-blue-500/10 blur-[130px]" />
      </motion.div>

      {/* Centered Typography Content */}
      <motion.div
        style={{ y: yText, opacity: opacityContent }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.p
          className="text-blue-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Halo, Saya Ahmad Farid
        </motion.p>

        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl mx-auto max-w-4xl font-bold tracking-tight mb-8 leading-tight">
          WELCOME TO MY{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 px-2">
            PORTOFOLIO AS
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 sm:whitespace-nowrap px-4">
            FRONT END DEVELOPER
          </span>
        </h1>

        <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Lulusan SMK Wikrama 1 Garut (PPLG). Full-Stack Developer dengan spesialisasi pengembangan Front-End modern yang responsif dan berorientasi performa.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors duration-200 text-xs md:text-sm shadow-lg shadow-white/5"
          >
            Lihat Projek
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors duration-200 text-xs md:text-sm"
          >
            Hubungi Saya
          </a>
        </div>
      </motion.div>

      {/* Indikator Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-5 h-8 border-2 border-zinc-800 rounded-full p-1">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mx-auto"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}