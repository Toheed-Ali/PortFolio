const Hero = () => {
  return (
    <section className="h-screen min-h-[600px] flex flex-col justify-center items-start px-8 md:px-24 relative overflow-hidden bg-surface-container-lowest">
      {/* Matrix Rain Background (Visual Representation) */}
      <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-x border-primary-fixed/20 h-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <p className="font-mono text-primary-fixed tracking-[0.3em] mb-4 text-xs md:text-sm">
          SYSTEM_INIT_SUCCESS
        </p>
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter mb-6">
          <span className="text-white">TOHEED ALI</span>
          <span className="text-primary-fixed cursor-blink">_</span>
        </h1>
        <div className="h-8 md:h-12 overflow-hidden">
          <div className="font-editorial text-xl md:text-2xl text-secondary flex flex-col gap-2 italic uppercase tracking-widest">
            <span>Computer Science Student</span>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full">
          <button className="px-8 py-4 border-[1.5px] border-primary-fixed text-primary-fixed font-mono text-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-300 glow-hover w-full sm:w-auto flex items-center justify-center gap-2">
            <i className="fa-solid fa-rocket"></i>
            EXECUTE_PROJECTS
          </button>
          <a
            href="/src/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-surface-container border border-outline-variant text-white font-mono text-sm hover:border-secondary transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto text-center"
          >
            GET_RESUME.PDF
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 md:left-24 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-outline-variant"></div>
        <p className="font-mono text-[10px] text-outline uppercase tracking-widest">
          Scroll to explore directory
        </p>
      </div>
    </section>
  );
};

export default Hero;
