const skills = [
  { icon: "devicon-cplusplus-plain", name: "C++", color: "text-secondary" },
  { icon: "devicon-flutter-plain ", name: "Flutter", color: "text-primary" },
  { icon: "devicon-firebase-plain colored", name: "Firebase", color: "text-secondary" },
  { icon: "devicon-react-original colored", name: "React", color: "text-primary" },
  { icon: "devicon-javascript-plain colored", name: "JavaScript", color: "text-primary" },
  { icon: "devicon-python-plain colored", name: "Python", color: "text-primary" },
  { icon: "fa-solid fa-database", name: "SQL", color: "text-primary" },
];

const Skills = () => {
  return (
    <>
      <section className="py-24 px-8 md:px-24 bg-surface-container-lowest" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-editorial text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
              <span className="text-secondary block text-sm font-mono tracking-widest mb-2">
                02/ TECH_STACK
              </span>
              Arsenal.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 bg-surface-container hover:bg-surface-container-highest transition-colors group"
              >
                <i
                  className={`${skill.icon} ${skill.color} text-2xl mb-4 block group-hover:scale-110 transition-transform`}
                />
                <p className="font-mono text-xs text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;