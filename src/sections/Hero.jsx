const Hero = () => {
  return (
    <section className="!min-h-screen flex items-center justify-center !px-6">
      <div className="max-w-5xl text-center">
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
            href="https://github.com/BigCelz"
            target="_blank"
            rel="noreferrer"
            className="!px-3 !py-2 rounded-md border border-black dark:border-gray-400 text-black dark:text-gray-200 font-semibold hover:bg-black/20 dark:hover:bg-white/10 transition"
          >
            GitHub
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
