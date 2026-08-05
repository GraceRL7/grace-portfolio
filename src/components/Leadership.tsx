import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { leadership } from '../data/resumeData';

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Responsibility"
          title="Leadership & Responsibility"
          description="Positions of trust and responsibility across academics and community."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <GlassCard glow="sky" className="p-6 h-full">
                <div className="glass rounded-2xl p-2.5 inline-flex text-sky mb-4">
                  <Crown size={16} />
                </div>
                <h4 className="font-display text-ink font-medium leading-snug">{l.title}</h4>
                <p className="text-sm text-ink-muted mt-2">{l.org}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
