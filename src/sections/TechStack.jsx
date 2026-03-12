const frontendTechs = [
  "React.js", "html", "css", "JavaScript", "TypeScript", "Git", "Github",
  "Next.js", "Vite", "Tailwind CSS", "Bootstrap", "Material UI", "Zustand", "Redux Toolkit",
  "TanStack Query", "shadcn/ui", "Framer Motion", "Axios / Fetch API", "Responsive Design",
];

const backendTechs = [
  "Node.js", "Express.js", "MongoDB", "JWT Authentication",
];

const workflowTechs = [
  "Agile / Scrum", "Azure DevOps", "Slack", "Microsoft Teams", "Sprint Planning", "Code Reviews",
];

const Badge = ({ children, variant = "cyan" }) => {
  const base = "!px-4 !py-2 rounded-full font-medium shadow-sm";
  const variants = {
    cyan: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
    neutral: "bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200",
    workflow: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};

const TechStack = () => {
  return (
    <section id="tech" className="!py-20 !px-6">
      <div className="max-w-5xl !mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center !mb-10">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Frontend & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontendTechs.map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Backend (familiar)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Comfortable working with APIs and servers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {backendTechs.map((tech, i) => (
                <Badge key={i} variant="neutral">{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Workflow & Collaboration
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Experienced in agile team environments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {workflowTechs.map((tech, i) => (
                <Badge key={i} variant="workflow">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
