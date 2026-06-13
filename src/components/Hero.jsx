import { useEffect } from "react";
import heroBackground from "../assets/hero-bg.webp";
import myPic from "../assets/my-pic.webp";
import avatar1 from "../assets/Chess.png";
import avatar2 from "../assets/File Explorer.jpg";

const Hero = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/40 lg:bg-black/20 z-0" />

      {/* Person image — centered, full body visible */}
      <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
        <img
          src={myPic}
          alt="Toheed Ali"
          className="h-full w-auto max-w-[95%] lg:max-w-[70%] object-contain object-bottom drop-shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* 10+ projects badge */}
      <div className="absolute z-20 flex items-center gap-3 top-28 left-6 lg:top-[42%] lg:left-[8rem]">
        {/* 3 overlapping circles */}
        <div className="flex items-center" style={{ marginRight: "4px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(255, 0, 0, 0.3)",
              zIndex: 1,
              position: "relative",
            }}
          >
            <img src={avatar1} alt="Project 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(255, 0, 0, 0.3)",
              marginLeft: "-19px",
              zIndex: 2,
              position: "relative",
            }}
          >
            <img src={avatar2} alt="Project 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div
            className="flex items-center justify-center"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#f5f4f4ff",
              marginLeft: "-19px",
              zIndex: 3,
              position: "relative",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-none">10+</p>
          <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(255, 255, 255, 0.78)" }}>
            Projects Built
          </p>
        </div>
      </div>

      {/* Mobile container / Desktop contents */}
      <div className="absolute z-20 bottom-12 left-6 right-6 flex flex-col gap-5 items-start lg:contents">
        
        {/* Resume button */}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="static lg:absolute lg:top-[33%] lg:right-[24.5%] lg:left-auto lg:bottom-auto group"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Resume
            </span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </a>

        {/* Descriptor paragraph */}
        <div className="static lg:absolute lg:top-[40%] lg:right-[15%] lg:left-auto lg:bottom-auto max-w-[95%] lg:max-w-[250px] text-left">
          <p
            className="leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.8rem", lineHeight: "1.7" }}
          >
            Full-Stack & Systems Developer | AI/ML Enthusiast | Open-Source Builder | 3.11 CGPA at ITU Lahore
          </p>
        </div>

        {/* Main headline */}
        <div className="static lg:absolute lg:bottom-[12%] lg:left-[9.5%] lg:top-auto lg:right-auto flex flex-col lg:block">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "0.25rem",
            }}
          >
            Full-Stack App and Web Developer
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 9vw, 8rem)",
              color: "#fce4e4",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Toheed Ali
          </h1>
        </div>

      </div>
    </section>
  );
};

export default Hero;