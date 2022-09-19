import "./darkmode.css";
import { BiSun } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";

export const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme: any;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (event: any) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      event.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      event.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <div className="toggle-btn">
      <BiSun className="icon" />
      <label className="switch">
        <input type="checkbox" onClick={(event) => switchTheme(event)} />
        <span className="slider round"></span>
      </label>

      <FiMoon className="icon xs" />
    </div>
  );
};
