import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform flex flex-col justify-between !p-6"
    >
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-md !mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800 !mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 !mb-4">{project.description}</p>
      </div>

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="w-full !px-4 !py-2 rounded-lg bg-cyan-500 text-white font-semibold text-center hover:bg-cyan-600 transition "
      >
        Live
      </a>
    </motion.div>
  );
};

export default ProjectCard;

