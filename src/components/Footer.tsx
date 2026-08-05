import { profile } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="section-pad !py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Three.js & liquid glass.</p>
        <div className="flex items-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
