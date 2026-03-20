import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Field requirements not met.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Electronic_Mail signature invalid.");
      return;
    }

    setStatus("loading");

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/xqeyjnnl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Signal transmission failed.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("System link failure.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="py-24 px-8 md:px-24 bg-surface-container-lowest overflow-hidden relative"
      id="contact"
    >
      <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/5 blur-[100px]"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-editorial text-4xl md:text-7xl font-bold mb-12 text-white uppercase tracking-tighter">
          Let&apos;s Build <br />
          Something <span className="text-primary">Together.</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl mx-auto text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
                User_Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface border-b-2 border-outline-variant focus:border-primary outline-none py-3 px-4 text-white font-mono transition-all"
                placeholder="Enter identification..."
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
                Electronic_Mail
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-surface border-b-2 border-outline-variant focus:border-secondary outline-none py-3 px-4 text-white font-mono transition-all"
                placeholder="name@domain.com"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-outline uppercase tracking-widest">
              Transmission_Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-surface border-b-2 border-outline-variant focus:border-primary outline-none py-3 px-4 text-white font-mono transition-all"
              placeholder="Initialize inquiry..."
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 px-12 py-4 bg-primary-fixed text-on-primary-fixed font-mono font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "TRANSMITTING..." : "SEND_SIGNAL"}
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-[#00ff9f] mt-4 animate-pulse uppercase tracking-wider">
                &gt; [SUCCESS] Signal received. Processing...
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-500 mt-4 uppercase tracking-wider">
                &gt; [FAILURE] {errorMessage}
              </p>
            )}
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
