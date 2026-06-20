'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ExternalLink } from 'lucide-react';
import ProjectCard from './ui/ProjectCard';

// Membuat kontrak tipe data objek projek yang ketat
interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  isPrivate: boolean;
  companyName?: string;
  images: string[]; // Menyimpan jalur foto dokumentasi
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // State untuk menyimpan gambar yang sedang diperbesar (Lightbox)
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Fungsi untuk menutup modal projek dan mereset zoom gambar secara aman
  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setActiveImage(null);
  };

  // Data Projek Profesional / Instansi (NDA)
  const professionalProjects: Project[] = [
    {
      title: 'Aplikasi "Tamu Sekolah"',
      description: 'Membangun sistem pencatatan data pengunjung dan manajemen tamu sekolah secara efisien menggunakan framework Next.js.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'RESTful API', 'JavaScript'],
      isPrivate: true,
      companyName: 'PT Klipaa Solusi Indonesia',
      images: [
        '/images/tamu-1.png',
        '/images/tamu-2.png',
        '/images/tamu-3.png',
      ],
    },
    {
      title: 'Fitur SIM UKS (Kejar.id)',
      description: 'Digitalisasi pencatatan data kesehatan siswa, suhu tubuh, dan riwayat kunjungan UKS berbasis API menggunakan PostgreSQL.',
      tags: ['Laravel', 'PostgreSQL', 'Docker', 'RESTful API', 'AJAX'],
      isPrivate: true,
      companyName: 'CV IDS RPI',
      images: [
        '/images/uks-1.png',
        '/images/uks-2.png',
        '/images/uks-3.png',
      ],
    },
    {
      title: ' Fitur Employment Management System (Kejar.id)',
      description: 'Mengembangkan tabel data pegawai interaktif untuk memonitor jabatan, info staf, serta hak akses dinamis pada dashboard internal.',
      tags: ['Laravel', 'PostgreSQL', 'Docker', 'RESTful API', 'AJAX'],
      isPrivate: true,
      companyName: 'CV IDS RPI',
      images: [
        '/images/employ1.png',
        '/images/employ2.png',
        '/images/employ3.png',
        '/images/employ4.png',
      ],
    },
  ];

  // Data Projek Pribadi (Open Source)
  const personalProjects: Project[] = [
    {
      title: 'Perpustakaan Digital',
      description: 'Struktur kode backend dasar berbasis Express.js dan TypeScript untuk mempercepat pengembangan arsitektur API belanja online.',
      tags: ['Laravel Jetsream', 'Livewire', 'Tailwind', 'PostgreSQL', 'JavaScript', 'PHP'],
      demoLink: '#',
      githubLink: 'https://github.com/farcodess/perpus',
      isPrivate: false,
      images: [
        '/images/api-1.png',
        '/images/api-2.png',
        '/images/api-3.png',
        '/images/api-4.png',
        '/images/api-5.png',
        '/images/api-6.png',
        '/images/api-7.png',
        '/images/api-8.png',
        '/images/api-9.png',
      ],
    },
    {
      title: 'Website SPP Uji Kompetensi',
      description: 'Mengembangkan aplikasi manajemen pembayaran SPP siswa berbasis web untuk mempermudah pencatatan transaksi keuangan dan monitoring data tunggakan sekolah.',
      tags: ['Laravel Brezee', 'Livewire', 'Tailwind', 'PostgreSQL', 'JavaScript', 'PHP'],
      isPrivate: false,
      companyName: 'Uji Kompetensi Keahlian',
      githubLink: 'https://github.com/farcodess/ukk_farid_a',
      images: [
        '/images/spp-1.png',
        '/images/spp-2.png',
        '/images/spp-3.png',
      ],
    },
  ];

  const currentProjects = activeTab === 'professional' ? professionalProjects : personalProjects;

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Karya Pilihan
            </h2>
            <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
          </div>

          {/* Toggle Tab Mode */}
          <div className="flex p-1 bg-zinc-900/50 border border-zinc-900 rounded-full w-fit">
            <button
              onClick={() => setActiveTab('professional')}
              className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-200 cursor-pointer ${activeTab === 'professional' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              {activeTab === 'professional' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Projek Profesional (NDA)
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-200 cursor-pointer ${activeTab === 'personal' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              {activeTab === 'personal' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Projek Pribadi (Open Source)
            </button>
          </div>
        </div>

        {/* Grid List Projek */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              isPrivate={project.isPrivate}
              companyName={project.companyName}
              onClick={() => setSelectedProject(project)} // Membuka Modal detail saat diklik
            />
          ))}
        </motion.div>
      </div>

      {/* MODAL OVERLAY & POPUP DETAIL PROJEK */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProjectModal} // Menutup modal jika area gelap di luar diklik
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat mengklik area kartu modal
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
                {selectedProject.companyName && (
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 inline-block mb-3">
                    {selectedProject.companyName}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Galeri Grid Foto */}
              <div className="mt-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                  Dokumentasi Fitur / UI
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  {selectedProject.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImage(imgSrc)} // Set gambar yang aktif untuk memicu Lightbox
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

              {/* Informasi Keterangan & Tautan Tambahan */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-900">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {selectedProject.isPrivate ? (
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                      <Lock size={12} className="text-emerald-500" />
                      <span>Kode Dilindungi NDA</span>
                    </div>
                  ) : (
                    <>
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY LIGHTBOX DETAIL FOTO SATUAN */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)} // Menutup zoom jika area luar diklik
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Tombol Close Lightbox */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors duration-200 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Gambar Detail dengan Animasi */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan lightbox saat gambarnya diklik langsung
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