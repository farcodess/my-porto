'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  thumbnail?: string; 
  onClick?: () => void;  
}

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
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectCard({
  title,
  description,
  tags,
  githubLink,
  thumbnail,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/40 p-6 hover:border-zinc-800 transition-all duration-300 backdrop-blur-sm cursor-pointer"
    >
      <div>
        {/* Desain Preview Minimalis dengan Gambar Thumbnail */}
        <div className="mb-6 h-40 w-full rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-900 overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback jika file gambar tidak ditemukan
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const placeholder = document.createElement('span');
                  placeholder.className = "text-zinc-700 font-mono text-xs select-none";
                  placeholder.innerText = "< code_preview />";
                  parent.appendChild(placeholder);
                }
              }}
            />
          ) : (
            <span className="text-zinc-700 font-mono text-xs group-hover:text-blue-400 transition-colors duration-300 select-none">
              &lt; code_preview /&gt;
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-xs md:text-sm text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div 
          className="flex items-center gap-4 border-t border-zinc-900 pt-4"
          onClick={(e) => e.stopPropagation()} 
        >
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <GithubIcon size={14} />
              Repository
            </a>
          ) : (
            <span className="text-[10px] font-mono text-zinc-600 select-none py-0.5">
              Kode internal
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}