import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="From WordPress production sites to real-time React dashboards to AI automation — a fast-growing track record."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-sky/50 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-8 sm:-left-10 top-2 w-4 h-4 rounded-full bg-void border-2 border-accent flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <GlassCard className="p-6 sm:p-8" glow={i === 0 ? 'gold' : i === 1 ? 'sky' : 'accent'}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-ink flex items-center gap-2">
                      <Briefcase size={18} className="text-accent" />
                      {job.role}
                    </h3>
                    <p className="text-ink-muted text-sm mt-1">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-accent glass-pill px-3 py-1.5">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {job.points.map((pt) => (
                    <li key={pt} className="text-sm text-ink/80 leading-relaxed flex gap-2.5">
                      <span className="text-accent mt-1.5">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-pill glass text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
