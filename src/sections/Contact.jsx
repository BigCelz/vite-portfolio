import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-2 items-center">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Let’s build something that actually ships.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-md mx-auto md:mx-0 mb-8">
            I work with teams and founders to turn ideas into fast, clean,
            production-ready interfaces.
          </p>

          <a
            href="https://wa.me/2347083429516"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Right */}
        <div className="bg-white/5 backdrop-blur rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 text-center md:text-left">
            Or reach me here
          </h3>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:chilaka.stanley2004@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <HiOutlineMail className="text-xl text-cyan-400" />
              <span className="text-slate-200 text-sm sm:text-base break-all">
                chilaka.stanley2004@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/BigCelz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub className="text-xl text-white" />
              <span className="text-slate-200 text-sm sm:text-base">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedin className="text-xl text-blue-400" />
              <span className="text-slate-200 text-sm sm:text-base">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
