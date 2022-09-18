import "./intro.css";
import WaveHand from "../../assets/emojis/wave.png";
import Pointer from "../../assets/emojis/pointright.png";
import Technologist from "../../assets/emojis/technologist.png";
import PointingUp from "../../assets/emojis/pointing-up.png";

export function Intro() {
  return (
    <div className="intro">
      <h1>
        Hello!
        <img src={WaveHand} alt="" className="emoji wave-hand animated" />
      </h1>

      <h2>
        I'm <span className="thick__text">Miraya</span>, a front-end developer
        focused on building beautiful user interfaces & experiences
        <img src={Technologist} alt="" className="emoji technologist" />
      </h2>

      <h3 className="intro__contact">
        <span>Get in touch </span>
        <img src={Pointer} alt="" className="emoji pointer" />
        <span>
          <a
            href="mailto:mirayaabrodi@icloud.com"
            target="_blank"
            className="highlight-link"
          >
            mirayaabrodi@icloud.com
          </a>
        </span>
      </h3>

      {/* <img src={PointingUp} className="pointing-up" /> */}
    </div>
  );
}
