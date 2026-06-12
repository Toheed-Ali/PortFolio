const SideNav = () => {
  return (
    <aside
      className="fixed left-0 top-1/2 -translate-y-1/2 w-16 z-40 hidden lg:flex flex-col items-center py-8 gap-8 transition-all duration-300 rounded-r-2xl border-[1.5px] border-l-0 border-white/45 bg-transparent backdrop-blur-0"
    >
      <div className="font-mono text-[10px] text-[#FFFFFF] rotate-90 mb-4 whitespace-nowrap">
        CONNECT
      </div>
      <a
        className="text-[#FFFFFF] hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="https://www.linkedin.com/in/toheed-ali-7b90b2340/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin text-xl"></i>
      </a>
      <a
        className="text-[#FFFFFF] hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="https://github.com/Toheed-Ali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github text-xl"></i>
      </a>
      <a
        className="text-[#FFFFFF] hover:text-[#00ff9f] hover:bg-[#2c2c2c] p-2 transition-all duration-300"
        href="mailto:toheedali3.14159@gmail.com"
      >
        <i className="fa-solid fa-envelope text-xl"></i>
      </a>
    </aside>
  );
};

export default SideNav;
