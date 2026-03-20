const Education = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface-container-lowest" id="education">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
        {/* Experience */}
        <div>
          <h2 className="font-editorial text-4xl font-bold mb-12 text-white uppercase tracking-tighter">
            <span className="text-primary block text-sm font-mono tracking-widest mb-2">
              04/ LOG_FILE
            </span>
            Activities.
          </h2>
          <div className="space-y-12 border-l border-outline-variant/30 pl-8 relative">
            {/* GDG */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-primary rounded-full"></div>
              <span className="font-mono text-[10px] text-primary mb-1 block">
                2024 - 2025
              </span>
              <h4 className="text-xl font-headline text-white">
                Google Developer Groups
              </h4>
              <p className="text-sm text-outline mb-4 font-mono">
                Committee Member
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Coordinated 3 hackathons and coding bootcamps with 600+ participants, fostering collaborative tech community
              </p>
            </div>
            {/* GYM */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-primary rounded-full"></div>
              <span className="font-mono text-[10px] text-primary mb-1 block">
                2025 - Present
              </span>
              <h4 className="text-xl font-headline text-white">
                GYM Management System
              </h4>
              <p className="text-sm text-outline mb-4 font-mono">Core Member | Head of Events</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Led planning and execution of environmental initiatives and community workshops, increasing engagement by 150%
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="font-editorial text-4xl font-bold mb-6 text-white uppercase tracking-tighter text-right">
            <span className="text-secondary block text-sm font-mono tracking-widest mb-2">
              05/ ARCHIVE
            </span>
            Education.
          </h2>
          <div className="space-y-4">
            <div className="p-6 border border-outline-variant bg-surface-container hover:border-secondary transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-headline text-white group-hover:text-secondary transition-colors">
                  Information Technology University
                </h4>
                <span className="font-mono text-[10px] text-outline">2024-<span className="text-[10px] text-secondary mt-2 font-mono">ENROLLED</span></span>
              </div>
              <p className="text-sm text-on-surface-variant font-body">
                BS in Computer Science
              </p>
            </div>
            <div className="p-6 border border-outline-variant bg-surface-container hover:border-outline transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-headline text-white">
                  Punjab Group of Colleges
                </h4>
                <span className="font-mono text-[10px] text-outline">2022-2024</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body">
                ICS Physics
              </p>
            </div>
            <div className="p-6 border border-outline-variant bg-surface-container hover:border-outline transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-headline text-white">
                  Qazi Grammar School
                </h4>
                <span className="font-mono text-[10px] text-outline">2008-2022</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body">
                Matriculation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
