'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, borderColor: 'rgb(59, 130, 246)' }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 transition-colors duration-200 cursor-default select-none"
    >
      {text}
    </motion.span>
  );
}