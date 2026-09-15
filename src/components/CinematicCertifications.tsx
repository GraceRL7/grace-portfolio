import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, X, Maximize2, Play } from 'lucide-react';
import { certificateList, CertificateItem } from '../data/certificatesData';

export default function CinematicCertifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Update scroll navigation arrow state
  const checkScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide index based on scroll offset
    const cardWidth = 340; // average card + gap width
    const newIndex = Math.min(
      Math.floor((scrollLeft + cardWidth / 2) / cardWidth),
      certificateList.length - 1
    );
    setActiveSlideIndex(Math.max(0, newIndex));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);
    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, []);

  const handleScrollNav = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

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
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#000000] text-[#FFFFFF] border-t border-[#FFFFFF]/10 overflow-hidden z-20"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-white/[0.015] blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
              <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
                05 / MY CERTIFICATIONS & HONORS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Antonio',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.03em] leading-none mb-3 text-[#FFFFFF]"
            >
              MY CERTIFICATIONS & AWARDS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Inter',sans-serif] text-base sm:text-xl font-light tracking-wide text-[#CCCCCC]"
            >
              Proof of continuous learning, competitive achievements, and award-winning creative direction.
            </motion.p>
          </div>

          {/* Right Header Callout Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center gap-6 border-l border-white/20 pl-8 py-2 max-w-[420px]"
          >
            <p className="font-['Inter',sans-serif] text-sm text-white/70 leading-relaxed italic">
              "Each certificate & award represents a step in my journey to learn, grow and create meaningful impact."
            </p>
            <span className="font-serif italic text-2xl text-white/40 whitespace-nowrap select-none">
              Better Everyday
            </span>
          </motion.div>
        </div>

        {/* EXHIBITION GALLERY CONTAINER WITH SCROLL NAVIGATION CONTROLS */}
        <div className="relative group">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => handleScrollNav('left')}
              aria-label="Scroll left gallery"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus-visible:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => handleScrollNav('right')}
              aria-label="Scroll right gallery"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus-visible:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* HORIZONTAL CAROUSEL / GRID CONTAINER */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-4 px-1 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificateList.map((cert, index) => {
              const isTouchActive = activeTouchId === cert.id;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View certificate: ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  onTouchStart={() => setActiveTouchId(cert.id)}
                  onClick={() => setSelectedCert(cert)}
                  className="snap-start flex-none w-[260px] xs:w-[290px] sm:w-[340px] lg:w-[380px] group/card relative"
                >
                  {/* STEEL & GLASS 3D DISPLAY CARD */}
                  <div
                    className={`relative h-full flex flex-col justify-between rounded-xl p-3.5 sm:p-5 transition-all duration-500 overflow-hidden bg-gradient-to-b from-[#18181b]/90 via-[#09090b]/95 to-[#000000]/100 backdrop-blur-xl border ${
                      isTouchActive
                        ? 'border-white/60 shadow-[0_15px_35px_rgba(255,255,255,0.15)] -translate-y-2'
                        : 'border-white/15 hover:border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Metallic 3D Subtle Inset Edges */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10 opacity-70 group-hover/card:opacity-100 transition-opacity" />
                    
                    {/* Shimmer / Highlight Sweep Line Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.15)_55%,transparent_80%)] translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                    {/* TOP PREVIEW IMAGE CONTAINER */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#050505] border border-white/10 mb-4 group-hover/card:border-white/40 transition-colors">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                          isTouchActive
                            ? 'filter-none scale-[1.02]'
                            : 'grayscale opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-[1.03]'
                        }`}
                      />

                      {/* Play Button Overlay for Video Items */}
                      {cert.youtubeUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/card:bg-black/20 transition-colors z-20">
                          <div className="w-12 h-12 rounded-full bg-white/90 border border-white text-black flex items-center justify-center shadow-xl group-hover/card:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-black ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Subtle Gradient Shadow At Bottom for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-70 group-hover/card:opacity-20 transition-opacity pointer-events-none" />

                      {/* Category Tag */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/80 border border-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest text-white/90 uppercase z-10 shadow-md">
                        {cert.category}
                      </div>
                    </div>

                    {/* BOTTOM DETAILS */}
                    <div className="flex flex-col justify-between flex-grow pt-1">
                      <div>
                        <h3 className="font-['Inter',sans-serif] text-sm sm:text-base font-semibold text-white/95 group-hover/card:text-white transition-colors line-clamp-2 mb-1.5 leading-snug">
                          {cert.title}
                        </h3>
                        <p className="font-['Inter',sans-serif] text-xs text-white/60 group-hover/card:text-white/80 transition-colors flex items-center gap-2">
                          <span>{cert.issuer}</span>
                          <span className="text-white/30">•</span>
                          <span className="font-mono text-[11px]">{cert.year}</span>
                        </p>
                      </div>

                      {/* VIEW CERTIFICATE FOOTER TRIGGER */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/70 group-hover/card:text-white transition-colors">
                        <span className="tracking-wider uppercase text-[11px] font-mono group-hover/card:translate-x-1 transition-transform">
                          {cert.youtubeUrl ? 'PLAY VIDEO PROJECT' : 'VIEW CERTIFICATE'}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover/card:bg-white group-hover/card:text-black transition-all">
                          {cert.youtubeUrl ? <Play className="w-3.5 h-3.5 fill-current" /> : <Maximize2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GALLERY FOOTER CONTROLS & CAPTIONS */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold tracking-widest">
              {String(activeSlideIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-24 sm:w-36 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-white transition-all duration-300 rounded-full"
                style={{
                  width: `${((activeSlideIndex + 1) / certificateList.length) * 100}%`,
                }}
              />
            </div>
            <span>{String(certificateList.length).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-6 tracking-widest uppercase text-[11px]">
            <span className="hidden md:inline text-white/40">DRAG / SCROLL TO EXPLORE</span>
            <span className="text-white/70">LEARN • APPLY • GROW • REPEAT</span>
          </div>
        </div>
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
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors focus-visible:outline-none"
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
                  <div className="inline-block px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-mono tracking-wider text-white/90 uppercase mb-4">
                    {selectedCert.category}
                  </div>
                  <h3 className="font-['Antonio',sans-serif] text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide leading-tight mb-3">
                    {selectedCert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/70 font-medium mb-4 pb-4 border-b border-white/10">
                    <span>{selectedCert.issuer}</span>
                    <span className="text-white/30">•</span>
                    <span className="font-mono">{selectedCert.year}</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-['Inter',sans-serif] mb-6">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-lg group/btn"
                  >
                    <span>{selectedCert.youtubeUrl ? 'OPEN ON YOUTUBE' : 'VIEW FULL CERTIFICATE'}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-2.5 text-xs text-white/60 hover:text-white transition-colors"
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
