import "./about.css";
import "../../App.css";
export function About() {
  return (
    <div className="about">
      <div className="wrapper">
        <h3 className="about__title">Background</h3>

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

      <div className="wrapper">
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
      </div>
    </div>
  );
}
