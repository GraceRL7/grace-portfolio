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
import OceanWaveTransition from './components/OceanWaveTransition';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioContent() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  return (
    <div className={`font-body antialiased transition-colors duration-1000 ${
      isBeach ? 'bg-[#FAF8F5] text-[#121E24]' : 'bg-black text-white selection:bg-white selection:text-black'
    }`}>
      {/* Ocean Wave Sweep Overlay when toggling themes */}
      <OceanWaveTransition />

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
        isBeach ? 'bg-[#F0F7F9] border-[#0097A7]/15 text-[#4A5B66]' : 'bg-black border-white/10 text-[#BDBDBD]'
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
