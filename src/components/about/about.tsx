import "./about.css";
import "./darkmode.css";
import "../../App.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import technologist from "../../assets/emojis/technologist.png";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "-20px",
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
    <motion.div animate={animation} ref={ref} id="about">
      <div className="wrapper">
        <h3 className="about__title">
          <span className="primary-color">01.</span>Background
        </h3>

        <p>
          I’m a 19 year old self taught{" "}
          <span className="thick__text">Frontend Developer</span>. I found my
          passion in coding after discovering my brother doing it.
          <br />
          <br />I fell in love with the craft of being able to use my creativity
          to build stuff for the web. What kept me on this journey is that I
          found it exciting to always learn new things and challenges that I'm
          not familiar with.
          <br />
          <br />
          <span className="thick__text">
            If I'm not doing anything coding related
          </span>
          , I enjoy reading, drawing and working out.
        </p>
      </div>
      <div className="about__img">
        <img src={technologist} alt="emoji technologist" />
      </div>
    </motion.div>
  );
}
