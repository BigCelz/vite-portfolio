import ProjectCard from "../components/ProjectCard";
import projects from "../datas/Projects";


const Projects = () => {
  return (
    <section id="projects" className="!py-20 bg-[#FFFDF9] !px-6">
      <div className="max-w-6xl !mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
