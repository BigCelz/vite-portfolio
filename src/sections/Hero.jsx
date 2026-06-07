const Hero = () => {
  return (
    <section className="relative !min-h-screen flex items-center justify-center !px-6 overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128,128,128,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,128,128,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ---- Everything below is UNCHANGED ---- */}
      <div className="relative z-10 max-w-5xl text-center">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight"
        >
          Hi, I'm <span className="text-cyan-500">Stanley Chilaka</span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
          className="!mt-6 mb-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Frontend Developer building fast, modern, and visually engaging web
          applications with React, Next.js, and Tailwind CSS.
        </p>

        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          className="!mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="!px-3 !py-2 rounded-md bg-cyan-500 dark:bg-cyan-400 text-white dark:text-gray-900 font-semibold shadow-lg hover:bg-cyan-600 dark:hover:bg-cyan-300 transition"
          >
            View Projects
          </a>

          {/* <a
            href="#contact"
            className="!px-3 !py-2 rounded-md bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 font-semibold shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            Contact Me
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
