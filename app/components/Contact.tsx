'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Phone } from 'lucide-react'; // Menggunakan Phone

const GithubIcon = ({ size = 20 }: { size?: number }) => (
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
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
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
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const socialLinks = [
    { 
      name: 'Email', 
      value: 'Ahmadfariddw@gmail.com', 
      href: 'mailto:Ahmadfariddw@gmail.com', 
      icon: <Mail size={20} /> 
    },
    { 
      name: 'Nomor Telepon', 
      value: '0821-2542-3256', 
      href: 'https://wa.me/6282125423256', 
      icon: <Phone size={20} /> 
    },
    { 
      name: 'GitHub', 
      value: 'github.com/farcodess', 
      href: 'https://github.com/farcodess', 
      icon: <GithubIcon size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      value: 'linkedin.com/in/ahmadfarid', 
      href: 'https://linkedin.com/in/ahmadfarid', 
      icon: <LinkedinIcon size={20} /> 
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950/30 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Hubungi Saya
            </h2>
            <div className="h-1 w-12 bg-emerald-400 mt-4 rounded" />
            <p className="text-zinc-400 text-sm md:text-base mt-6 leading-relaxed">
              Saya berdomisili di Bogor, Jawa Barat. Jangan ragu menghubungi saya untuk kolaborasi proyek atau peluang kerja.
            </p>
          </div>

          <div className="md:col-span-7 space-y-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-200">
                    {link.icon}
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 uppercase font-mono">{link.name}</span>
                    <span className="text-sm md:text-base text-zinc-300 font-medium">{link.value}</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}