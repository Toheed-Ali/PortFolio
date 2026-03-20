const SideNav = () => {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-16 z-40 border-r border-[#494847]/20 bg-[#0e0e0e]/80 backdrop-blur-lg hidden lg:flex flex-col items-center py-8 gap-8">
      <div className="font-mono text-[10px] text-slate-500 rotate-90 mb-4 whitespace-nowrap">
        CONNECT
      </div>
      <a
        className="text-slate-500 hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="https://www.linkedin.com/in/toheed-ali-7b90b2340/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin text-xl"></i>
      </a>
      <a
        className="text-slate-500 hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="https://github.com/Toheed-Ali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github text-xl"></i>
      </a>
      <a
        className="text-slate-500 hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="mailto:toheedali3.14159@gmail.com"
      >
        <i className="fa-solid fa-envelope text-xl"></i>
      </a>
    </aside>
  );
};

export default SideNav;
