import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let’s build something that actually ships.
          </h2>
          <p className="text-slate-300 text-lg max-w-md mb-10">
            I work with teams and founders to turn ideas into fast, clean,
            production-ready interfaces.
          </p>

          <a
            href="https://wa.me/2347083429516"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Right: Contact Options */}
        <div className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-10 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">
            Or reach me here
          </h3>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:stanleychilaka22270@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <HiOutlineMail className="text-2xl text-cyan-400" />
              <span className="text-slate-200">stanleychilaka22270@gmail.com</span>
            </a>

            <a
              href="https://github.com/BigCelz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub className="text-2xl text-white" />
              <span className="text-slate-200">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <span className="text-slate-200">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
