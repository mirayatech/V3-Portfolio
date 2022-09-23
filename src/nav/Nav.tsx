import { DarkMode } from "../components/theme/darkMode";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import "./nav.css";
import "./darkmode.css";
import { motion } from "framer-motion";
import { useState } from "react";
export function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <DarkMode />

      <div className="hamburger ">
        {openMenu ? (
          <button onClick={() => setOpenMenu(false)}>
            <HiX />{" "}
          </button>
        ) : (
          <button onClick={() => setOpenMenu(true)}>
            <HiOutlineMenu />
          </button>
        )}

        {openMenu === true && (
          <motion.div
            className="hamburger__menu"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <a onClick={() => setOpenMenu(false)} href="#about">
              About
            </a>
            <a onClick={() => setOpenMenu(false)} href="#skills">
              Skills
            </a>
            <a onClick={() => setOpenMenu(false)} href="#projects">
              Projects
            </a>
          </motion.div>
        )}
      </div>

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
          About
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
          Skills
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
          Projects
        </motion.a>
      </div>
    </nav>
  );
}
