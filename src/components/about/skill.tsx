import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Skill() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          // delay: 0.1,
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
    <motion.div animate={animation} ref={ref} className="wrapper">
      <h3 className="about__title last">Skills</h3>

      <div className="wrapper__skills">
        <ul>
          <h3>Languages</h3>
          <li>JavaScript (ES6) </li>
          <li>TypeScript</li>
          <li>CSS/Sass</li> <li>HTML</li>
        </ul>

        <ul>
          <h3>Frameworks </h3> <li>React</li>
          <li>Tailwind</li>
          <li></li>
        </ul>

        <ul>
          <h3>Libraries</h3>
          <li>Material UI</li>
          <li>Framer Motion</li>
          <li></li>
        </ul>

        <ul>
          <h3>Tools</h3>
          <li>Git & Github</li>
          <li>Chrome DevTools</li>
          <li></li>
        </ul>

        <ul>
          <h3>Extra</h3>
          <li>Firebase</li>
          <li>Web Accessibility</li>
        </ul>

        <ul>
          <h3>Design</h3>
          <li>Figma</li>
        </ul>
      </div>
    </motion.div>
  );
}
