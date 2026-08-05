import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Verified"
          title="Certifications"
          description="Coursework and industry certifications spanning AI, cloud, automation, and core programming."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
            >
              <GlassCard glow="accent" className="p-5 h-full">
                <div className="flex items-start gap-3">
                  <BadgeCheck size={17} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-display text-sm font-medium text-ink leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-xs text-ink-muted mt-1">{c.issuer}</p>
                    {c.detail && (
                      <p className="text-xs text-sky mt-1 italic">{c.detail}</p>
                    )}
                    <p className="text-xs font-mono text-ink-faint mt-1.5">{c.date}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
