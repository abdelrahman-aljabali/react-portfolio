import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../constants";

const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="py-12 border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projekte
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg bg-current p-4"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded object-cover h-full w-full"
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h6 className="font-bold text-xl mb-2 bg-gradient-to-r from-pink-500 via-slate-700 to-purple-900 bg-clip-text tracking-tight text-transparent">
                  {project.title}
                </h6>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </div>
            <div>
              <div className="mt-auto">
                <div className="px-6 pt-4 pb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
