import { Intro, About, Project, Footer, Skills } from "./components/index";
import { DarkMode } from "./components/theme/darkMode";

export function App() {
  return (
    <div className="app">
      <DarkMode />
      <Intro />
      <About />
      <Skills />
      {/* <Project />
      <Footer /> */}
    </div>
  );
}
