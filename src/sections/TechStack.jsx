const techs = [
  "React.js",
  "html",
  "css",
  "Github",
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TanStack Query",
  "shadcn/ui",
  "Framer Motion",
  "Axios / Fetch API",
  "Responsive Design",
  "JWT Authentication",
   "Vite",
];

const TechStack = () => {
  return (
    <section id="tech" className="!py-20 !px-6 bg-[#FFFDF9]">
      <div className="max-w-5xl !mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-10">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center !gap-4">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="!px-4 !py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
