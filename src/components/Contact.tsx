import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { profile } from '../data/resumeData';

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: profile.linkedinLabel, href: profile.linkedin },
  { icon: MapPin, label: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something worth shipping"
          description="Open to full-time roles and freelance work across India — frontend, WordPress, or full-stack."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard glow="accent" className="p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {links.map((l) => {
                const Comp: any = l.href ? 'a' : 'div';
                return (
                  <Comp
                    key={l.label}
                    href={l.href ?? undefined}
                    target={l.href?.startsWith('http') ? '_blank' : undefined}
                    rel={l.href?.startsWith('http') ? 'noreferrer' : undefined}
                    className={`glass rounded-2xl p-4 flex items-center gap-3 ${
                      l.href ? 'hover:border-accent/40 transition-colors cursor-pointer' : ''
                    }`}
                  >
                    <div className="text-accent shrink-0">
                      <l.icon size={17} />
                    </div>
                    <span className="text-sm text-ink/85 truncate">{l.label}</span>
                  </Comp>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="w-full sm:w-auto text-center rounded-pill bg-accent text-void font-medium px-8 py-4 shadow-glow hover:shadow-[0_0_60px_rgba(79,156,255,0.4)] transition-shadow"
              >
                Say Hello
              </a>
              <a
                href={profile.resumeFile}
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 glass-pill px-8 py-4 text-ink font-medium hover:text-accent transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full p-4 text-ink-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
