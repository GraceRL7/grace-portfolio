import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { projects } from '../data/resumeData';

const accentText: Record<string, string> = {
  accent: 'text-accent',
  sky: 'text-sky',
  gold: 'text-gold',
};
const accentBorder: Record<string, string> = {
  accent: 'border-accent/30',
  sky: 'border-sky/30',
  gold: 'border-gold/30',
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Six real builds — from trial registration systems to live e-commerce admin portals."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard glow={p.accent as any} className="p-7 sm:p-8 h-full flex flex-col group">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-pill glass border ${accentBorder[p.accent]} ${accentText[p.accent]}`}
                  >
                    {p.tag}
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="glass rounded-full p-2 text-ink-muted hover:text-accent transition-colors"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-2xl font-medium text-ink mb-1">{p.title}</h3>
                <p className={`text-sm font-medium mb-3 ${accentText[p.accent]}`}>{p.subtitle}</p>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{p.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm text-ink/75 leading-relaxed flex gap-2.5">
                      <span className={`mt-1.5 ${accentText[p.accent]}`}>·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-pill glass text-ink-muted"
                    >
                      <Code2 size={11} />
                      {s}
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
