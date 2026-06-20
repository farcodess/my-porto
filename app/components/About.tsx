'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-zinc-100 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          {/* Kolom Kiri: Foto Portrait Card (Gaya 3:4 Studio) */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 md:w-72 aspect-[3/4] select-none"
            >
              {/* Efek Glow Tipis di Belakang Kartu */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-emerald-400/10 opacity-30 blur-xl" />

              {/* Frame Kartu */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-zinc-800/40 p-[1px] shadow-2xl">
                <div className="w-full h-full rounded-[15px] overflow-hidden bg-zinc-900/60 backdrop-blur-md relative">
                  <img
                    src="/images/farid1.png" // Mengambil foto dari folder public/images/avatar.png
                    alt="Ahmad Farid"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Kolom Kanan: Teks Biografi & Informasi */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Tentang Saya
              </h2>
              <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
            </div>

            <div className="text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Saya adalah lulusan <strong>SMK Wikrama 1 Garut</strong> jurusan <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong> yang dinamis, disiplin, dan siap kerja.
              </p>
              <p>
                Sebagai pengembang web dengan spesialisasi di bidang <strong>Front-End</strong> dan ketertarikan kuat pada arsitektur <strong>Full-Stack</strong>, saya berkomitmen untuk menulis kode yang bersih, efisien, dan mudah dirawat di setiap proyek yang saya bangun.
              </p>
            </div>

            {/* Informasi Detail Menggunakan Flexbox Vertikal yang Rapi */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-xs uppercase font-mono">Pendidikan</span>
                <span className="text-zinc-200 text-sm font-medium">SMK Wikrama 1 Garut (PPLG)</span>
                <span className="text-zinc-400 text-xs font-mono">Juni 2023 - Juli 2026</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-zinc-500 text-xs uppercase font-mono">Pengalaman</span>
                <span className="text-zinc-200 text-sm leading-tight">
                  Front-End Intern di CV IDS RPI
                </span>
                <span className="text-zinc-200 text-sm leading-tight">
                  Full-Stack OJT di PT Klipaa Solusi Indonesia
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}