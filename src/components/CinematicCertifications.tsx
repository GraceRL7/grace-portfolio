import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Maximize2, Play, Award, GraduationCap } from 'lucide-react';
import { certificateList, CertificateItem } from '../data/certificatesData';
import { useTheme } from '../context/ThemeContext';

type FilterType = 'all' | 'award' | 'certificate';

export default function CinematicCertifications() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  const [activeTab, setActiveTab] = useState<FilterType>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? certificateList 
    : certificateList.filter(item => item.type === activeTab);

  const awardsCount = certificateList.filter(item => item.type === 'award').length;
  const certsCount = certificateList.filter(item => item.type === 'certificate').length;

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section
      id="certifications"
      className={`relative w-full py-20 sm:py-28 lg:py-36 border-t overflow-hidden z-20 transition-colors duration-1000 ${
        isBeach
          ? 'bg-[#FAF6F0] text-[#1C242B] border-[#5C5349]/15'
          : 'bg-[#000000] text-[#FFFFFF] border-[#FFFFFF]/10'
      }`}
    >
      {/* Ambient Lighting Background */}
      <div className={`absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-1000 ${
        isBeach ? 'bg-[#1C6E8C]/05' : 'bg-white/[0.02]'
      }`} />
      <div className={`absolute bottom-10 right-10 w-[450px] h-[450px] blur-[130px] rounded-full pointer-events-none z-0 transition-colors duration-1000 ${
        isBeach ? 'bg-[#7A4A21]/05' : 'bg-white/[0.015]'
      }`} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className={`w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}`} />
              <span className={`font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${
                isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'
              }`}>
                05 / CERTIFICATIONS & HONORS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-['Antonio',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.03em] leading-none mb-3 ${
                isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'
              }`}
            >
              CERTIFICATIONS & AWARDS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-['Inter',sans-serif] text-base sm:text-lg font-light tracking-wide max-w-2xl ${
                isBeach ? 'text-[#5C5349]' : 'text-[#CCCCCC]'
              }`}
            >
              Organized gallery of competitive achievements, 1st place awards, and verified technical industry certifications.
            </motion.p>
          </div>

          {/* Right Header Callout Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`hidden lg:flex items-center gap-6 border-l pl-8 py-2 max-w-[420px] ${
              isBeach ? 'border-[#7A4A21]/20' : 'border-white/20'
            }`}
          >
            <p className={`font-['Inter',sans-serif] text-sm leading-relaxed italic ${
              isBeach ? 'text-[#5C5349]' : 'text-white/70'
            }`}>
              "Each certificate & award represents a step in my journey to learn, grow and create meaningful impact."
            </p>
            <span className={`font-serif italic text-2xl whitespace-nowrap select-none ${
              isBeach ? 'text-[#7A4A21]/60' : 'text-white/40'
            }`}>
              Better Everyday
            </span>
          </motion.div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className={`flex flex-wrap items-center gap-3 mb-10 pb-4 border-b ${
          isBeach ? 'border-[#7A4A21]/15' : 'border-white/10'
        }`}>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'all'
                ? isBeach
                  ? 'bg-[#1C6E8C] text-white font-bold shadow-md'
                  : 'bg-white text-black font-bold shadow-lg shadow-white/10'
                : isBeach
                  ? 'bg-[#F3ECE1] text-[#5C5349] hover:bg-[#1C6E8C]/10 hover:text-[#1C6E8C] border border-[#7A4A21]/15'
                  : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
            }`}
          >
            <span>ALL</span>
            <span className={`px-2 py-0.5 rounded-md text-[10px] ${
              activeTab === 'all'
                ? 'bg-black/20 text-white'
                : isBeach ? 'bg-[#7A4A21]/10 text-[#7A4A21]' : 'bg-white/10 text-white/70'
            }`}>
              {certificateList.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('award')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'award'
                ? isBeach
                  ? 'bg-[#1C6E8C] text-white font-bold shadow-md'
                  : 'bg-white text-black font-bold shadow-lg shadow-white/10'
                : isBeach
                  ? 'bg-[#F3ECE1] text-[#5C5349] hover:bg-[#1C6E8C]/10 hover:text-[#1C6E8C] border border-[#7A4A21]/15'
                  : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>AWARDS & HONORS</span>
            <span className={`px-2 py-0.5 rounded-md text-[10px] ${
              activeTab === 'award'
                ? 'bg-black/20 text-white'
                : isBeach ? 'bg-[#7A4A21]/10 text-[#7A4A21]' : 'bg-white/10 text-white/70'
            }`}>
              {awardsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'certificate'
                ? isBeach
                  ? 'bg-[#1C6E8C] text-white font-bold shadow-md'
                  : 'bg-white text-black font-bold shadow-lg shadow-white/10'
                : isBeach
                  ? 'bg-[#F3ECE1] text-[#5C5349] hover:bg-[#1C6E8C]/10 hover:text-[#1C6E8C] border border-[#7A4A21]/15'
                  : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>CERTIFICATES</span>
            <span className={`px-2 py-0.5 rounded-md text-[10px] ${
              activeTab === 'certificate'
                ? 'bg-black/20 text-white'
                : isBeach ? 'bg-[#7A4A21]/10 text-[#7A4A21]' : 'bg-white/10 text-white/70'
            }`}>
              {certsCount}
            </span>
          </button>
        </div>

        {/* 3-COLUMN GRID LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                tabIndex={0}
                role="button"
                aria-label={`View item: ${cert.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                onClick={() => setSelectedCert(cert)}
                className="group/card relative cursor-pointer h-full"
              >
                {/* WARM CREAM / STEEL 3D DISPLAY CARD */}
                <div className={`relative h-full flex flex-col justify-between rounded-2xl p-4 sm:p-5 transition-all duration-500 overflow-hidden backdrop-blur-xl border hover:-translate-y-2 ${
                  isBeach
                    ? 'bg-[#FFFFFF] border-[#7A4A21]/15 shadow-[0_10px_30px_rgba(90,82,74,0.08)] hover:border-[#1C6E8C]/50 hover:shadow-[0_20px_40px_rgba(28,110,140,0.15)]'
                    : 'bg-gradient-to-b from-[#18181b]/90 via-[#09090b]/95 to-[#000000]/100 border-white/15 hover:border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.15)]'
                }`}>
                  
                  {/* Subtle Inset Edges */}
                  <div className={`absolute inset-0 rounded-2xl pointer-events-none border opacity-70 group-hover/card:opacity-100 transition-opacity ${
                    isBeach ? 'border-[#7A4A21]/10' : 'border-white/10'
                  }`} />

                  {/* TOP PREVIEW IMAGE CONTAINER */}
                  <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border mb-4 group-hover/card:border-white/40 transition-colors ${
                    isBeach ? 'bg-[#FAF6F0] border-[#7A4A21]/15' : 'bg-[#050505] border-white/10'
                  }`}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/card:scale-[1.03] transition-all duration-500 ease-out"
                    />

                    {/* Play Button Overlay for Video Items */}
                    {cert.youtubeUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/card:bg-black/20 transition-colors z-20">
                        <div className="w-12 h-12 rounded-full bg-white/90 border border-white text-black flex items-center justify-center shadow-xl group-hover/card:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-black ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* BOTTOM DETAILS */}
                  <div className="flex flex-col justify-between flex-grow pt-1">
                    <div>
                      <h3 className={`font-['Inter',sans-serif] text-base sm:text-lg font-semibold transition-colors line-clamp-2 mb-2 leading-snug ${
                        isBeach
                          ? 'text-[#1C242B] group-hover/card:text-[#1C6E8C]'
                          : 'text-white/95 group-hover/card:text-white'
                      }`}>
                        {cert.title}
                      </h3>
                      <p className={`font-['Inter',sans-serif] text-xs sm:text-sm transition-colors flex items-center gap-2 ${
                        isBeach ? 'text-[#5C5349]' : 'text-white/60 group-hover/card:text-white/80'
                      }`}>
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span className="font-mono text-[11px]">{cert.year}</span>
                      </p>
                    </div>

                    {/* VIEW ITEM FOOTER TRIGGER */}
                    <div className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs font-medium transition-colors ${
                      isBeach
                        ? 'border-[#7A4A21]/15 text-[#7A4A21] group-hover/card:text-[#1C6E8C]'
                        : 'border-white/10 text-white/70 group-hover/card:text-white'
                    }`}>
                      <span className="tracking-wider uppercase text-[11px] font-mono group-hover/card:translate-x-1 transition-transform">
                        {cert.youtubeUrl ? 'PLAY VIDEO PROJECT' : 'VIEW DETAILS'}
                      </span>
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                        isBeach
                          ? 'bg-[#F3ECE1] border-[#7A4A21]/20 text-[#1C6E8C] group-hover/card:bg-[#1C6E8C] group-hover/card:text-white'
                          : 'bg-white/10 border-white/20 text-white group-hover/card:bg-white group-hover/card:text-black'
                      }`}>
                        {cert.youtubeUrl ? <Play className="w-3.5 h-3.5 fill-current" /> : <Maximize2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX FULL-SCREEN MODAL PREVIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[90vh] border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row ${
                isBeach ? 'bg-[#FAF6F0] border-[#7A4A21]/30' : 'bg-[#0c0c0e] border-white/20'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close preview"
                className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-colors focus-visible:outline-none ${
                  isBeach
                    ? 'bg-[#F3ECE1] border-[#7A4A21]/30 text-[#1C242B] hover:bg-[#1C6E8C] hover:text-white'
                    : 'bg-black/80 border-white/30 text-white hover:bg-white hover:text-black'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Left Image Container or Video Player */}
              <div className="w-full md:w-3/5 bg-black/90 p-4 sm:p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 max-h-[55vh] md:max-h-none overflow-hidden">
                {selectedCert.youtubeUrl ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                    <iframe
                      src={selectedCert.youtubeUrl}
                      title={selectedCert.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                  />
                )}
              </div>

              {/* Modal Right Info Container */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-md border text-xs font-mono tracking-wider uppercase mb-4 ${
                    isBeach ? 'bg-[#F3ECE1] border-[#7A4A21]/20 text-[#1C6E8C]' : 'bg-white/10 border-white/20 text-white/90'
                  }`}>
                    {selectedCert.category}
                  </div>
                  <h3 className={`font-['Antonio',sans-serif] text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight mb-3 ${
                    isBeach ? 'text-[#1C242B]' : 'text-white'
                  }`}>
                    {selectedCert.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-sm font-medium mb-4 pb-4 border-b ${
                    isBeach ? 'text-[#5C5349] border-[#7A4A21]/15' : 'text-white/70 border-white/10'
                  }`}>
                    <span>{selectedCert.issuer}</span>
                    <span>•</span>
                    <span className="font-mono">{selectedCert.year}</span>
                  </div>
                  <p className={`text-sm leading-relaxed font-['Inter',sans-serif] mb-6 ${
                    isBeach ? 'text-[#5C5349]' : 'text-white/80'
                  }`}>
                    {selectedCert.description}
                  </p>
                </div>

                <div className={`pt-4 border-t flex flex-col gap-3 ${
                  isBeach ? 'border-[#7A4A21]/15' : 'border-white/10'
                }`}>
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg group/btn ${
                      isBeach
                        ? 'bg-[#1C6E8C] text-white hover:bg-[#1C6E8C]/90'
                        : 'bg-white text-black hover:bg-white/90'
                    }`}
                  >
                    <span>{selectedCert.youtubeUrl ? 'OPEN ON YOUTUBE' : 'VIEW FULL DOCUMENT'}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className={`w-full py-2.5 text-xs transition-colors ${
                      isBeach ? 'text-[#7A4A21]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
