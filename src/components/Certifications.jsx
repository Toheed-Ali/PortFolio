import { useState, useEffect, useCallback } from "react";
import CodeRush from "../assets/CodeRush.webp";
import MOS from "../assets/MOS.webp";
import XRHackathon from "../assets/XR-Hackathon.webp";
import GDGLogo from "../assets/GDG.webp";
import MicrosoftLogo from "../assets/Microsoft.webp";
import FCSCLogo from "../assets/FCSC.webp";

const certifications = [
  {
    title: "Code Rush Participation",
    issuer: "Google Developer Group",
    image: CodeRush,
    logoImg: GDGLogo,
  },
  {
    title: "MOS Certification",
    issuer: "Office Specialist",
    image: MOS,
    logoImg: MicrosoftLogo,
  },
  {
    title: "XR Hackathon 3.0",
    issuer: "Forman Computer Science Club",
    image: XRHackathon,
    logoImg: FCSCLogo,
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [loadedLogos, setLoadedLogos] = useState({});

  const markImageLoaded = (index) =>
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  const markLogoLoaded = (index) =>
    setLoadedLogos((prev) => ({ ...prev, [index]: true }));

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    setSelected((s) => (s - 1 + certifications.length) % certifications.length);
  }, []);

  const next = useCallback(() => {
    setSelected((s) => (s + 1) % certifications.length);
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <>
      <section
        className="py-24 px-8 md:px-24 bg-surface border-y border-outline-variant/10"
        id="certifications"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-4xl font-bold mb-20 text-white uppercase tracking-tighter">
            <span className="text-secondary block text-sm font-mono tracking-widest mb-2">
              06/ ACHIEVEMENT_DUMP
            </span>
            Certifications.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelected(index)}
              >
                {/* Top Left Circular Logo Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-black rounded-full border-2 border-outline flex items-center justify-center shadow-2xl group-hover:border-primary transition-all duration-500 z-20 p-2 overflow-hidden">
                  {/* logo skeleton */}
                  {!loadedLogos[index] && (
                    <div className="absolute inset-0 rounded-full skeleton-shimmer" />
                  )}
                  <img
                    src={cert.logoImg}
                    alt={cert.issuer}
                    loading="eager"
                    onLoad={() => markLogoLoaded(index)}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      loadedLogos[index] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="relative aspect-[16/12] bg-surface-container rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  {/* Skeleton shimmer shown until image loads */}
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 skeleton-shimmer z-10" />
                  )}

                  {/* Zoom hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-white text-sm font-mono">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zm3-8H8m3-3v6" />
                      </svg>
                      View
                    </div>
                  </div>

                  <img
                    src={cert.image}
                    loading="lazy"
                    onLoad={() => markImageLoaded(index)}
                    className={`absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105 ${
                      loadedImages[index] ? "" : "invisible"
                    }`}
                    alt={cert.title}
                  />

                  {/* Bottom gradient info */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <p className="font-mono text-[10px] text-white/80 mb-1 uppercase tracking-[0.2em] drop-shadow-md">
                      {cert.issuer}
                    </p>
                    <h4 className="text-white text-lg md:text-xl font-headline font-bold drop-shadow-lg leading-tight">
                      {cert.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={close}
          />

          {/* Modal content */}
          <div
            className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4"
            style={{ animation: "scaleUp 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
          >
            {/* Top bar */}
            <div className="w-full flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <img
                  src={certifications[selected].logoImg}
                  alt={certifications[selected].issuer}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-widest">
                    {certifications[selected].issuer}
                  </p>
                  <h3 className="text-white text-base font-bold leading-tight">
                    {certifications[selected].title}
                  </h3>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                {/* Download button */}
                <a
                  href={certifications[selected].image}
                  download={`${certifications[selected].title}.webp`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Download"
                  title="Download"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>

                {/* Close button */}
                <button
                  onClick={close}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={certifications[selected].image}
                alt={certifications[selected].title}
                className="w-full h-auto max-h-[75vh] object-contain bg-black"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-5">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {certifications.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === selected ? "bg-white w-6" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default Certifications;
