import "./footer.css";
import Rockon from "../../assets/emojis/rockon.png";
import {
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandInstagram,
  TbBrandGithub,
} from "react-icons/tb";

import "./darkmode.css";

export function Footer() {
  return (
    <footer>
      <h3>
        Developed by Miraya <img src={Rockon} className="emoji rockon" /> 2022
      </h3>

      <div className="social-media">
        <a href="https://github.com/mirayatech" target="_blank">
          Github
        </a>
        <a href="https://www.instagram.com/mirayatech/" target="_blank">
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/miraya-abrodi-a48382237/"
          target="_blank"
        >
          linkedin
        </a>
        <a href="https://www.tiktok.com/@mirayatech" target="_blank">
          Tiktok
        </a>
      </div>

      <div className="social-media-mobile">
        {" "}
        <a href="https://www.linkedin.com/in/miraya-abrodi-a48382237/">
          <TbBrandLinkedin />
        </a>
        <a href="https://www.instagram.com/mirayatech/">
          {" "}
          <TbBrandInstagram />
        </a>{" "}
        <a href="https://github.com/mirayatech">
          {" "}
          <TbBrandGithub />
        </a>
        <a href="https://www.tiktok.com/@mirayatech">
          {" "}
          <TbBrandTiktok />
        </a>
      </div>
    </footer>
  );
}
