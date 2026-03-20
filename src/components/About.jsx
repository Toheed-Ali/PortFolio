const About = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="font-editorial text-4xl md:text-6xl font-bold mb-8 text-white uppercase tracking-tighter">
            <span className="text-primary block text-sm font-mono tracking-widest mb-2">
              01/ ABOUT_ME
            </span>
            Digital <br />
            Precisionist.
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 text-lg">
            I am a Computer Science student at ITU, focused on building technical
            solutions that bridge the gap between high-level logic and intuitive user
            experiences.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            <div className="border-l border-primary pl-4">
              <span className="block font-mono text-2xl text-white">3.11</span>
              <span className="block font-label text-[10px] text-outline uppercase tracking-widest">
                CGPA (Current)
              </span>
            </div>
            <div className="border-l border-secondary pl-4">
              <span className="block font-mono text-2xl text-white">05+</span>
              <span className="block font-label text-[10px] text-outline uppercase tracking-widest">
                Core Projects
              </span>
            </div>
            <div className="border-l border-tertiary pl-4">
              <span className="block font-mono text-2xl text-white">02+</span>
              <span className="block font-label text-[10px] text-outline uppercase tracking-widest">
                Experience Years
              </span>
            </div>
          </div>
        </div>

        {/* Terminal Card */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-1 relative">
          <div className="flex items-center gap-2 p-3 bg-surface-container-highest/50 mb-1">
            <div className="terminal-header-dot bg-[#ff5f56]"></div>
            <div className="terminal-header-dot bg-[#ffbd2e]"></div>
            <div className="terminal-header-dot bg-[#27c93f]"></div>
            <span className="ml-4 font-mono text-[10px] text-outline">
              user@toheed: ~/stats
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed text-primary-dim">
            <p className="mb-2">
              <span className="text-secondary">$</span> whoami
            </p>
            <p className="text-white mb-4">
              &gt; Toheed Ali. CS Major. Problem Solver.
            </p>
            <p className="mb-2">
              <span className="text-secondary">$</span> fetch --education
            </p>
            <p className="text-white mb-4">
              &gt; Information Technology University (ITU)
            </p>
            <p className="mb-2">
              <span className="text-secondary">$</span> status --availability
            </p>
            <p className="text-white mb-4">&gt; [Open for Collaborations]</p>
            <p className="mb-2">
              <span className="text-secondary">$</span>{" "}
              <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
