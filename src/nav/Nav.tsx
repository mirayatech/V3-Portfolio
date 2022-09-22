import { DarkMode } from "../components/theme/darkMode";
import "./nav.css";
import "./darkmode.css";
import { motion } from "framer-motion";
export function Nav() {
  return (
    <nav>
      <DarkMode />

      <div className="nav__links">
        <motion.a
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.3,
              },
            },
          }}
          href="#about"
        >
          <span>01.</span> About
        </motion.a>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.3,
              },
            },
          }}
          href="#skills"
        >
          <span>02.</span> Skills
        </motion.a>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.3,
              },
            },
          }}
          href="#projects"
        >
          <span>03.</span> Projects
        </motion.a>
      </div>
    </nav>
  );
}
