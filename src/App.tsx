import CinematicNavbar from './components/CinematicNavbar';
import CinematicHero from './components/CinematicHero';
import CinematicAbout from './components/CinematicAbout';
import CinematicExperience from './components/CinematicExperience';
import CinematicSkills from './components/CinematicSkills';
import CinematicProjects from './components/CinematicProjects';
import CinematicCertifications from './components/CinematicCertifications';
import CinematicHobbies from './components/CinematicHobbies';
import CinematicContact from './components/CinematicContact';
import GraceAIAssistant from './components/GraceAIAssistant';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioContent() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  return (
    <div className={`font-body antialiased transition-colors duration-1000 ${
      isBeach ? 'bg-[#FAF6F0] text-[#1C242B]' : 'bg-black text-white selection:bg-white selection:text-black'
    }`}>
      <CinematicNavbar />

      <main className="relative">
        <CinematicHero />
        <CinematicAbout />
        <CinematicExperience />
        <CinematicSkills />
        <CinematicProjects />
        <CinematicCertifications />
        <CinematicHobbies />
        <CinematicContact />
      </main>

      <GraceAIAssistant />

      <footer className={`border-t py-10 px-6 text-center text-xs font-mono transition-colors duration-1000 ${
        isBeach ? 'bg-[#F3ECE1] border-[#7A4A21]/15 text-[#5C5349]' : 'bg-black border-white/10 text-[#BDBDBD]'
      }`}>
        <p>© 2026 GRACE RESHAL LEWIS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
