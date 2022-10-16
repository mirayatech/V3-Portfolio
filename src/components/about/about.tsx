import "./about.css";
import "./darkmode.css";
import "../../App.css";

import technologist from "../../assets/emojis/technologist.png";

export function About() {
  return (
    <div id="about">
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
          , I enjoy spending time with my family and working out.
        </p>
      </div>
      <div className="about__img">
        <img src={technologist} alt="emoji technologist" />
      </div>
    </div>
  );
}
