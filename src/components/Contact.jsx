const Contact = () => {
  return (
    <section
      className="py-24 px-8 md:px-24 bg-surface-container-lowest overflow-hidden relative"
      id="contact"
    >
      <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/5 blur-[100px]"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-editorial text-4xl md:text-7xl font-bold mb-12 text-white uppercase tracking-tighter">
          Let&apos;s Build <br />
          Something <p className="text-primary">Together.</p>
        </h2>
        <form className="grid gap-6 max-w-2xl mx-auto text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
                User_Name
              </label>
              <input
                className="w-full bg-surface border-b-2 border-outline-variant focus:border-primary outline-none py-3 px-4 text-white font-mono transition-all"
                placeholder="Enter identification..."
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
                Electronic_Mail
              </label>
              <input
                className="w-full bg-surface border-b-2 border-outline-variant focus:border-secondary outline-none py-3 px-4 text-white font-mono transition-all"
                placeholder="name@domain.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
              Transmission_Message
            </label>
            <textarea
              className="w-full bg-surface border-b-2 border-outline-variant focus:border-primary outline-none py-3 px-4 text-white font-mono transition-all"
              placeholder="Initialize inquiry..."
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-8 px-12 py-4 bg-primary-fixed text-on-primary-fixed font-mono font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all glow-hover"
          >
            SEND_SIGNAL
          </button>
        </form>
        <div className="mt-24 flex justify-center gap-12 border-t border-outline-variant/30 pt-12">
          <a
            className="font-mono text-xs text-outline hover:text-primary transition-colors flex items-center gap-2"
            href="https://github.com/Toheed-Ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            GITHUB
          </a>
          <a
            className="font-mono text-xs text-outline hover:text-secondary transition-colors flex items-center gap-2"
            href="https://www.linkedin.com/in/toheed-ali-7b90b2340/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            LINKEDIN
          </a>
          <a
            className="font-mono text-xs text-outline hover:text-white transition-colors flex items-center gap-2"
            href="#"
          >
            <i className="fa-brands fa-x-twitter"></i>
            TWITTER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
