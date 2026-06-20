'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

// Membuat komponen SVG Award/Sertifikat secara manual
const AwardIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-award text-blue-400"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string; // Jalur file gambar sertifikat Anda di folder public/images/
}

export default function Certificates() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Data sertifikasi Anda (Bisa disesuaikan isinya)
  const certificates: Certificate[] = [
    {
      title: 'Juara 3 LKS Web Technologies Kabupaten Garut',
      issuer: 'MGMP TKJ Kabupaten Garut',
      date: 'Mei 2026',
      image: '/images/certificate/lks.jpeg', // Tambahkan gambar sertifikat Anda di folder public/images
    },
    {
      title: 'Belajar Membuat Web Front-end ',
      issuer: 'Dicoding Indonesia',
      date: 'April 2025',
      credentialId: 'ERZREVVEWXYV',
      credentialUrl: 'https://www.dicoding.com/certificates/ERZREVVEWXYV',
      image: '/images/certificate/dicoding2.png',
    },
    {
      title: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: 'Januari 2024',
      credentialId: 'JMZVD4GV3ZN9',
      credentialUrl: 'https://www.dicoding.com/certificates/JMZVD4GV3ZN9',
      image: '/images/certificate/dicoding1.png',
    },
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900/50 ">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Sertifikasi & Lisensi
          </h2>
          <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
        </div>

        {/* Grid List Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5 hover:border-zinc-800 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                {/* Area Preview Foto Sertifikat */}
                <div
                  onClick={() => setActiveImage(cert.image)}
                  className="aspect-[4/3] w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative cursor-zoom-in"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const placeholder = document.createElement('div');
                        placeholder.className = "absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/60 text-zinc-600 border border-zinc-850 rounded-xl select-none";
                        const text = document.createElement('span');
                        text.className = "text-xs font-mono font-bold text-zinc-500";
                        text.innerText = "PREVIEW SERTIFIKAT";
                        placeholder.appendChild(text);
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                </div>

                {/* Info Detail Sertifikat */}
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AwardIcon size={14} />
                    <span className="text-xs font-semibold text-zinc-400">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-400 transition-colors duration-200">
                    {cert.title}
                  </h3>

                  <p className="text-[11px] font-mono text-zinc-500 mt-2">
                    Diterbitkan: {cert.date}
                  </p>

                  {cert.credentialId && (
                    <p className="text-[10px] font-mono text-zinc-500 mt-1 truncate">
                      ID Kredensial: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OVERLAY LIGHTBOX ZOOM FOTO SERTIFIKAT */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Tombol Close Lightbox */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors duration-200 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Foto Detail Zoom */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex items-center justify-center"
            >
              <img
                src={activeImage}
                alt="Detail Sertifikat Zoom"
                className="max-h-[85vh] max-w-full rounded-2xl object-contain border border-zinc-800 shadow-2xl bg-zinc-950"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}