import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Invisible Backdrop to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-[#00ff9f] font-headline">
          &lt;TA /&gt;
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="font-headline tracking-tighter uppercase text-sm text-slate-400 hover:text-[#00ff9f] transition-all duration-200 hover:[text-shadow:_0_0_8px_#00ff9f]"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <span className="material-symbols-outlined text-[#00ff9f]">code</span>
        </div>

        {/* Mobile Menu Button - 3 lines (sort icon) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-[#00ff9f] hover:bg-white/5 rounded-xl transition-all z-[60]"
        >
          <span className="material-symbols-outlined text-2xl transition-transform duration-300">
            {isOpen ? "close" : "sort"}
          </span>
        </button>

        {/* Animated Mobile Menu Dropdown (Top-Right Box) */}
        <div
          className={`absolute top-16 right-4 w-48 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 ease-out p-2 z-50 ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-slate-300 hover:text-[#00ff9f] hover:bg-white/5 rounded-xl transition-all font-headline tracking-tighter uppercase text-[11px] flex items-center justify-between group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-white/20 font-mono">0{i+1}</span>
                  {link.name}
                </div>
                <span className="material-symbols-outlined text-[14px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold">
                  east
                </span>
              </a>
            ))}
            
            {/* Simple Divider */}
            <div className="h-[1px] bg-white/5 mx-2 my-2"></div>
            
            <div className="flex justify-center gap-6 py-3">
              <a
                href="https://github.com/Toheed-Ali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#00ff9f] transition-colors p-1"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/toheed-ali-7b90b2340/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#00ff9f] transition-colors p-1"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
              </a>
              <a
                href="mailto:toheedali3.14159@gmail.com"
                className="text-slate-500 hover:text-[#00ff9f] transition-colors p-1"
              >
                <i className="fa-solid fa-envelope text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
