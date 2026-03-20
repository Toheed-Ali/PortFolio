import CodeRush from "../assets/CodeRush.png";
import MOS from "../assets/MOS.png";
const certifications = [
  {
    title: "Code Rush Participation",
    issuer: "Google Developer Group",
    image: CodeRush,
    logo: "fa-solid fa-award",
    logoColor: "text-primary",
  },
  {
    title: "MOS Certification",
    issuer: "Office Specialist",
    image: MOS,
    logo: "devicon-windows8-original",
    logoColor: "text-secondary",
  },
];

const Certifications = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface border-y border-outline-variant/10" id="certifications">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-editorial text-4xl font-bold mb-20 text-white uppercase tracking-tighter">
          <span className="text-secondary block text-sm font-mono tracking-widest mb-2">
            06/ ACHIEVEMENT_DUMP
          </span>
          Certifications.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              {/* Top Left Circular Logo Badge - Positioned outside the clipped area */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-surface-container-highest rounded-full border-2 border-outline flex items-center justify-center shadow-2xl group-hover:border-primary transition-all duration-500 z-20">
                <i className={`${cert.logo} ${cert.logoColor} text-2xl md:text-3xl`}></i>
              </div>

              {/* The Card Box (Clipped Area) */}
              <div className="relative aspect-[16/12] bg-surface-container rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-2xl">
                {/* Main Certification Image */}
                <img
                  src={cert.image}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                  alt={cert.title}
                />

                {/* Bottom Information Shadow Overlay */}
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
  );
};

export default Certifications;
