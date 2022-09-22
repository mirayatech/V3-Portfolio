import { DarkMode } from "../components/theme/darkMode";
import "./nav.css";
import "./darkmode.css";
import { useState } from "react";

export function Nav() {
  return (
    <nav>
      <DarkMode />

      <div className="nav__links">
        <a href="#about">
          <span>01.</span> About
        </a>
        <a href="#skills">
          <span>02.</span> Skills
        </a>
        <a href="#projects">
          <span>03.</span> Projects
        </a>
      </div>
    </nav>
  );
}
