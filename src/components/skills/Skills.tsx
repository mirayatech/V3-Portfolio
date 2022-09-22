import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiGooglechrome,
  SiFigma,
  SiFramer,
} from "react-icons/si";

import { IoIosBody } from "react-icons/io";
import { Icon } from "@iconify/react";

import "./skills.css";
import "./darkmode.css";

export function Skills() {
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
    <motion.div animate={animation} ref={ref} id="skills">
      <div className="skills__wrapper">
        <h3 className="skills__title">
          <span className="primary-color">02.</span>Skills
        </h3>
        <div className="wrapper">
          <div className="box">
            <SiHtml5 className="box__icon" />
            <p className="box__name">HTML</p>
          </div>
          <div className="box">
            <SiCss3 className="box__icon" />
            <p className="box__name">CSS</p>
          </div>
          <div className="box">
            <SiSass className="box__icon" />
            <p className="box__name">Sass</p>
          </div>
          <div className="box">
            <SiJavascript className="box__icon" />
            <p className="box__name">JavaScript</p>
          </div>
          <div className="box">
            <SiTypescript className="box__icon" />
            <p className="box__name">TypeScript</p>
          </div>
          <div className="box">
            <SiReact className="box__icon" />
            <p className="box__name">React</p>
          </div>
          <div className="box">
            <SiFirebase className="box__icon" />
            <p className="box__name">Firebase</p>
          </div>
          <div className="box">
            <SiTailwindcss className="box__icon" />
            <p className="box__name">Tailwind </p>
          </div>
          <div className="box">
            <Icon icon="mdi:material-ui" className="box__icon " />
            <p className="box__name">Material UI</p>
          </div>{" "}
          <div className="box">
            <SiFramer className="box__icon" />
            <p className="box__name">Framer Motion</p>
          </div>
          <div className="box">
            <SiGit className="box__icon " />
            <p className="box__name">Git</p>
          </div>
          <div className="box">
            <IoIosBody className="box__icon " />
            <p className="box__name">A11Y</p>
          </div>{" "}
          <div className="box">
            <SiFigma className="box__icon " />
            <p className="box__name">Figma</p>
          </div>{" "}
          <div className="box">
            <SiGooglechrome className="box__icon " />
            <p className="box__name">Dev Tools</p>
          </div>
          <div className="box">
            <Icon icon="mdi:monitor-cellphone" className="box__icon  " />
            <p className="box__name">Responsive Design</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
