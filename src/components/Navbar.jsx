const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl border-b border-[#494847]/20 shadow-[0_0_15px_rgba(160,255,196,0.05)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#00ff9f] font-headline">
          &lt;TA /&gt;
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
            href="#about"
          >
            About
          </a>
          <a
            className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
            href="#education"
          >
            Education
          </a>
          <a
            className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
            href="#contact"
          >
            Contact
          </a>
          <span className="material-symbols-outlined text-[#00ff9f]">code</span>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-primary">menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
