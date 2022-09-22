import { Intro, About, Project, Footer, Skills, Nav } from "./components/index";
import { DarkMode } from "./components/theme/darkMode";

export function App() {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
