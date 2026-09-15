import { useEffect, useRef } from 'react';
import CinematicNavbar from './components/CinematicNavbar';
import CinematicHero from './components/CinematicHero';
import CinematicAbout from './components/CinematicAbout';
import CinematicSkills from './components/CinematicSkills';
import CinematicHobbies from './components/CinematicHobbies';
import Achievements from './components/Achievements';
import CinematicProjects from './components/CinematicProjects';
import CinematicCertifications from './components/CinematicCertifications';
import CinematicAIAutomation from './components/CinematicAIAutomation';
import CinematicExperience from './components/CinematicExperience';
import CinematicContact from './components/CinematicContact';
import GraceAIAssistant from './components/GraceAIAssistant';

export default function App() {
  return (
    <div className="bg-black text-white font-body antialiased selection:bg-white selection:text-black">
      <CinematicNavbar />

      <main className="relative bg-black">
        <CinematicHero />
        <CinematicAbout />
        <CinematicSkills />
        <CinematicHobbies />
        <Achievements />
        <CinematicProjects />
        <CinematicCertifications />
        <CinematicAIAutomation />
        <CinematicExperience />
        <CinematicContact />
      </main>

      <GraceAIAssistant />

      {/* Custom Difference Blend Cursor */}
      <CustomCursor />

      <footer className="bg-black border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-[#BDBDBD]">
        <p>© 2026 GRACE RESHAL LEWIS. All rights reserved.</p>
      </footer>
    </div>
  );
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, [role="button"]')) {
        cursor.classList.add('custom-cursor--hover');
      } else {
        cursor.classList.remove('custom-cursor--hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
