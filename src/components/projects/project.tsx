import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { Projects } from "./Projects";

import "./project.css";
import "../../App.css";

export function Project() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <motion.div animate={animation} ref={ref} className="projects">
      <h3 className="projects__title ">Top projects</h3>
      <div className="wrapper">
        <h3 className="projects__title mobile">Top projects</h3>
        {Projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="project__wrapper">
                <h3>{project.name}</h3>
                <span>
                  <a
                    href={project.link}
                    target="_blank"
                    className="project-link"
                  >
                    <FiExternalLink className="arrow" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="project-link"
                  >
                    <FiGithub className="arrow" />
                  </a>
                </span>
              </div>
              <p>{project.desc}</p>
              <div className="project__language">
                {project.dependencies.map((dependencie, index) => {
                  return <span key={index}> {dependencie} </span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
