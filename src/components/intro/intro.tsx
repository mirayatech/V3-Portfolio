import "./intro.css";
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
      <h1 className="intro__text">
        Hello!
        <img src={WaveHand} alt="" className="emoji wave-hand animated" />
      </h1>

      <h2 className="intro__text">
        I'm <span className="thick__text ">Miraya</span>, a front-end developer
        focused on building beautiful user interfaces & experiences
        <img src={Technologist} alt="" className="emoji technologist" />
      </h2>

      <h3 className="intro__contact intro__text">
        <span>Get in touch </span>
        <img src={Pointer} alt="" className="emoji pointer" />
        <span>
          <a
            href="mailto:mirayaabrodi@icloud.com"
            target="_blank"
            className="highlight-link intro__text"
          >
            mirayaabrodi@icloud.com
          </a>
        </span>
      </h3>

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
