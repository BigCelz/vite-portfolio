import StackIcons from "@/StackIcons";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform flex flex-col justify-between p-4 sm:p-6 max-w-sm mx-auto overflow-hidden"
    >
      {/* Project Content */}
      <div>
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-md mb-3 w-full h-36 sm:h-40 object-cover"
        />

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-lg">
          {project.stack?.map((tech) => (
            <span
              key={tech}
              title={tech.toUpperCase()}
              className="hover:scale-110 transition-transform"
            >
              {StackIcons[tech]}
            </span>
          ))}
        </div>
      </div>

      {/* Live Button */}
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="w-full px-4 py-2 rounded-lg bg-cyan-500 text-white font-medium text-center text-sm sm:text-base hover:bg-cyan-600 transition-colors"
      >
        Live
      </a>
    </motion.div>
  );
};

export default ProjectCard;

