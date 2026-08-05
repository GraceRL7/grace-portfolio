import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import FootballCanvas from './three/Football';
import { football } from '../data/resumeData';

export default function FootballSection() {
  return (
    <section id="football" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pitch/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeading
          eyebrow="Beyond the Screen"
          title="The Football Journey"
          description={football.intro}
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[320px] sm:h-[400px]"
          >
            <FootballCanvas className="w-full h-full" />
          </motion.div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {football.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <GlassCard glow="accent" className="p-[#121212]">
                    <p className="font-display text-xl sm:text-2xl font-medium text-pitch">
                      {s.value}
                    </p>
                    <p className="text-xs text-ink-faint mt-1 font-mono uppercase tracking-wide">
                      {s.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {football.timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <GlassCard className="p-5 flex items-start gap-4">
                    <span className="font-mono text-xs text-sky whitespace-nowrap pt-0.5">
                      {t.year}
                    </span>
                    <div>
                      <h4 className="font-display text-ink font-medium text-sm">{t.title}</h4>
                      <p className="text-sm text-ink-muted mt-0.5">{t.detail}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
