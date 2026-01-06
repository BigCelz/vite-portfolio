const frontendTechs = [
  "React.js",
  "html",
  "css",
  "JavaScript",
  "TypeScript",
  "Git",
  "Github",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Bootstrap",
  "Zustand",
  "Redux Toolkit",
  "TanStack Query",
  "shadcn/ui",
  "Framer Motion",
  "Axios / Fetch API",
  "Responsive Design",
];

const backendTechs = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT Authentication",
];

const Badge = ({ children, variant = "cyan" }) => {
  const base = "!px-4 !py-2 rounded-full font-medium shadow-sm";
  const variants = {
    cyan: "bg-cyan-100 text-cyan-700",
    neutral: "bg-gray-100 text-gray-800",
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};

const TechStack = () => {
  return (
    <section id="tech" className="!py-20 !px-6 bg-[#FFFDF9]">
      <div className="max-w-5xl !mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center !mb-10">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Frontend & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontendTechs.map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Backend (familiar)</h3>
            <p className="text-sm text-gray-500 mb-4">Comfortable working with APIs and servers</p>
            <div className="flex flex-wrap justify-center gap-4">
              {backendTechs.map((tech, i) => (
                <Badge key={i} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
