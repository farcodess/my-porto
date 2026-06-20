'use client';

import { motion } from 'framer-motion';
import Badge from './ui/Badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Keahlian Teknis',
      items: ['Next.js', 'ReactJS', 'Laravel', 'RESTful API', 'PHP', 'JS', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Kontrol Versi & Alat',
      items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Tailwind CSS'],
    },
    {
      title: 'Prestasi & Penghargaan',
      items: [
        'Peraih Nilai Terbaik UKK PPLG (Skor 93)',
        'Juara 3 LKS Web Technologies Kab. Garut'
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Keahlian & Prestasi
          </h2>
          <div className="h-1 w-12 bg-emerald-400 mt-4 rounded" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm"
            >
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIdx) => (
                  <Badge key={sIdx} text={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}