import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { education, profile } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Background & Education"
          description="Everything below is drawn straight from Grace's academic and professional record."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard glow="accent" className="p-8 sm:p-10 h-full flex flex-col justify-center">
              <p className="text-lg sm:text-xl leading-relaxed text-ink/90 font-light">
                {profile.summary}
              </p>
            </GlassCard>
          </motion.div>

          <div className="space-y-4">
            {education.map((ed, i) => (
              <motion.div
                key={ed.qualification}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-5 flex items-center gap-4" glow="sky">
                  <div className="glass rounded-2xl p-3 text-accent shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h3 className="font-display font-medium text-ink">{ed.qualification}</h3>
                      <span className="font-mono text-xs text-accent">{ed.score}</span>
                    </div>
                    <p className="text-sm text-ink-muted truncate">{ed.institution}</p>
                    <p className="text-xs text-ink-faint mt-0.5">{ed.year}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
