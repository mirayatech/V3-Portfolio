import { DarkMode } from "../theme/darkMode";
import "./nav.css";
export function Nav() {
  return (
    <nav className="nav">
      <DarkMode />

      <div className="nav__links">
        <a href="#about" className="nav__links--link">
          About
        </a>
        <a href="#skills" className="nav__links--link">
          Skills
        </a>
        <a href="#projects" className="nav__links--link">
          Projects
        </a>
        <a href="#contact" className="nav__links--link">
          Contact
        </a>
      </div>
    </nav>
  );
}
