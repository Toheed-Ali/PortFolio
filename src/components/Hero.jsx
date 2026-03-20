import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = "010101010101010101010101010101010101";
    const fontSize = 16;
    const columns = Math.ceil(width / fontSize);

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#00fc9d"; // Primary fixed color
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let frameCount = 0;
    const animate = () => {
      // Slow down the animation slightly
      if (frameCount % 2 === 0) {
        draw();
      }
      frameCount++;
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="h-screen min-h-[600px] flex flex-col justify-center items-start px-8 md:px-24 relative overflow-hidden bg-surface-container-lowest">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      />

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
          <a
            href="#contact"
            className="px-8 py-4 border-[1.5px] border-primary-fixed text-primary-fixed font-mono text-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-300 glow-hover w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-comment-dots"></i>
            CONTACT_ME
          </a>
          <a
            href="/Resume.pdf"
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