import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: `font-body antialiased transition-colors duration-1000 ${isBeach ? 'bg-[#FAF8F5] text-[#121E24]' : 'bg-black text-white selection:bg-white selection:text-black'}`, children: [_jsx(OceanWaveTransition, {}), _jsx(CinematicNavbar, {}), _jsxs("main", { className: "relative", children: [_jsx(CinematicHero, {}), _jsx(CinematicAbout, {}), _jsx(CinematicExperience, {}), _jsx(CinematicSkills, {}), _jsx(CinematicProjects, {}), _jsx(CinematicCertifications, {}), _jsx(CinematicHobbies, {}), _jsx(CinematicContact, {})] }), _jsx(GraceAIAssistant, {}), _jsx("footer", { className: `border-t py-10 px-6 text-center text-xs font-mono transition-colors duration-1000 ${isBeach ? 'bg-[#F0F7F9] border-[#0097A7]/15 text-[#4A5B66]' : 'bg-black border-white/10 text-[#BDBDBD]'}`, children: _jsx("p", { children: "\u00A9 2026 GRACE RESHAL LEWIS. All rights reserved." }) })] }));
}
export default function App() {
    return (_jsx(ThemeProvider, { children: _jsx(PortfolioContent, {}) }));
}
