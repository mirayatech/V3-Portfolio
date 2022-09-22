import "./intro.css";
import "./darkmode.css";

import WaveHand from "../../assets/emojis/wave.png";
import Pointer from "../../assets/emojis/pointright.png";
import Technologist from "../../assets/emojis/technologist.png";
import PointingUp from "../../assets/emojis/pointing-up.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Intro() {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="intro">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            translateY: "-20px",
            opacity: 0,
          },
          visible: {
            translateY: "0px",
            opacity: 1,
            transition: {
              delay: 0.3,
              type: "spring",
              duration: 0.8,
            },
          },
        }}
        onClick={goToTop}
        className="intro__text"
      >
        Hello!
        <img src={WaveHand} alt="" className="emoji wave-hand animated" />
      </motion.h1>

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            translateY: "-20px",
            opacity: 0,
          },
          visible: {
            translateY: "0px",
            opacity: 1,
            transition: {
              delay: 0.4,
              type: "spring",
              duration: 1,
            },
          },
        }}
        className="intro__text"
      >
        I'm <span className="thick__text ">Miraya</span>, a front-end developer
        focused on building beautiful user interfaces & experiences
        <img src={Technologist} alt="" className="emoji technologist" />
      </motion.h2>

      <motion.h3
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            translateY: "-20px",
            opacity: 0,
          },
          visible: {
            translateY: "0px",
            opacity: 1,
            transition: {
              delay: 0.6,
              type: "spring",
              duration: 1.5,
            },
          },
        }}
        className="intro__contact intro__text"
      >
        <span>
          Get in touch
          <img src={Pointer} alt="" className="emoji pointer" />
        </span>
        <span>
          <a
            href="mailto:mirayaabrodi@icloud.com"
            target="_blank"
            className="highlight-link intro__text"
          >
            mirayaabrodi@icloud.com
          </a>
        </span>
      </motion.h3>

      {showButton === true ? (
        <motion.img
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
          }}
          src={PointingUp}
          className="pointing-up"
          onClick={goToTop}
        />
      ) : (
        ""
      )}
    </div>
  );
}
