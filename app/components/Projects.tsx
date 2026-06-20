'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectCard from './ui/ProjectCard';

// Membuat komponen SVG Github secara manual untuk menghindari error versi lucide-react
const GithubIcon = ({ size = 14 }: { size?: number }) => (
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
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Kontrak tipe data objek projek yang disederhanakan
interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  thumbnail: string; // Foto utama projek (akan ditaruh di urutan pertama grid)
  images: string[];  // Foto dokumentasi pendukung
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // State untuk menyimpan gambar yang sedang diperbesar (Lightbox)
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Fungsi untuk menutup modal projek dan mereset zoom gambar secara aman
  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setActiveImage(null);
  };

  // Semua data projek digabungkan menjadi satu list
  const projects: Project[] = [
    {
      title: 'Aplikasi "Tamu Sekolah"',
      description: 'Membangun sistem pencatatan data pengunjung dan manajemen tamu sekolah secara efisien menggunakan framework Next.js.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'RESTful API', 'JavaScript'],
     
      thumbnail: '/images/tamu-1.png',
      images: [
        '/images/tamu-2.png',
        '/images/tamu-3.png',
        '/images/tamu-4.png',
      ],
    },
    {
      title: 'Fitur SIM UKS (Kejar.id)',
      description: 'Digitalisasi pencatatan data kesehatan siswa, suhu tubuh, dan riwayat kunjungan UKS berbasis API menggunakan PostgreSQL.',
      tags: ['Laravel', 'PostgreSQL', 'Docker', 'RESTful API', 'AJAX'],
      thumbnail: '/images/uks-2.png',
      images: [
        '/images/uks-2.png',
        '/images/uks-3.png',
      ],
    },
    {
      title: ' Fitur Employment Management System (Kejar.id)',
      description: 'Mengembangkan tabel data pegawai interaktif untuk memonitor jabatan, info staf, serta hak akses dinamis pada dashboard internal.',
      tags: ['Laravel', 'PostgreSQL', 'Docker', 'RESTful API', 'AJAX'],
      thumbnail: '/images/employ1.png',
      images: [
        '/images/employ2.png',
        '/images/employ3.png',
        '/images/employ4.png',
      ],
    },
    {
      title: 'Perpustakaan Digital',
      description: 'Struktur kode backend dasar berbasis Express.js dan TypeScript untuk mempercepat pengembangan arsitektur API belanja online.',
      tags: ['Laravel Jetstream', 'Livewire', 'Tailwind', 'PostgreSQL', 'JavaScript', 'PHP'],
      githubLink: 'https://github.com/farcodess/perpus',
      thumbnail: '/images/perpus-1.png',
      images: [
        '/images/perpus-2.png',
        '/images/perpus-3.png',
      ],
    },
    {
      title: 'Website SPP Uji Kompetensi',
      description: 'Mengembangkan aplikasi manajemen pembayaran SPP siswa berbasis web untuk mempermudah pencatatan transaksi keuangan dan monitoring data tunggakan sekolah.',
      tags: ['Laravel Breeze', 'Livewire', 'Tailwind', 'PostgreSQL', 'JavaScript', 'PHP'],
      githubLink: 'https://github.com/farcodess/ukk_farid_a',
      thumbnail: '/images/spp-1.png',
      images: [
        '/images/spp-2.png',
        '/images/spp-3.png',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Project
          </h2>
          <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
        </div>

        {/* Grid List Projek Langsung Tampil Semua */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              thumbnail={project.thumbnail}
              onClick={() => setSelectedProject(project)} // Membuka modal detail
            />
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY & POPUP DETAIL PROJEK */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProjectModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-950 border border-zinc-900 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-thin"
            >
              {/* Tombol Close Silang */}
              <button
                onClick={handleCloseProjectModal}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-100 transition-colors duration-200 p-1.5 rounded-full hover:bg-zinc-900 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Detail Header Projek */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* KEMBALI KE TAMPILAN GRID LAMA (Menggabungkan Thumbnail + Images) */}
              <div className="mt-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                  Dokumentasi Fitur / UI
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  {/* Menyisipkan thumbnail sebagai foto pertama, diikuti foto-foto dokumentasi lainnya */}
                  {[selectedProject.thumbnail, ...selectedProject.images].filter(Boolean).map((imgSrc, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImage(imgSrc)}
                      className="aspect-video w-full rounded-xl bg-zinc-900 border border-zinc-900/60 overflow-hidden relative group cursor-zoom-in"
                    >
                      <img
                        src={imgSrc}
                        alt={`Dokumentasi ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const placeholder = document.createElement('div');
                            placeholder.className = "absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/60 text-zinc-600 border border-zinc-850 rounded-xl select-none";
                            const num = document.createElement('span');
                            num.className = "text-xs md:text-sm font-mono font-bold text-zinc-500";
                            num.innerText = `IMG ${idx + 1}`;
                            placeholder.appendChild(num);
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian Bawah Modal (Hanya Tag & GitHub Link) */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-900">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {selectedProject.githubLink ? (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600 font-mono">Kode internal</span>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY LIGHTBOX DETAIL FOTO SATUAN (Saat diklik zoom) */}
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

            {/* Gambar Detail Zoom */}
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
                alt="Zoom Dokumentasi Detail"
                className="max-h-[85vh] max-w-full rounded-2xl object-contain border border-zinc-800 shadow-2xl bg-zinc-950"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}