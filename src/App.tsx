import CinematicNavbar from './components/CinematicNavbar';
import CinematicHero from './components/CinematicHero';
import CinematicAbout from './components/CinematicAbout';
import CinematicSkills from './components/CinematicSkills';
import Achievements from './components/Achievements';
import CinematicProjects from './components/CinematicProjects';
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
        <Achievements />
        <CinematicProjects />
        <CinematicExperience />
        <CinematicContact />
      </main>

      <GraceAIAssistant />

      <footer className="bg-black border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-[#BDBDBD]">
        <p>© 2026 GRACE RESHAL LEWIS. All rights reserved.</p>
      </footer>
    </div>
  );
}
