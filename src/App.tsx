import { Intro, About, Projects, Footer } from "./components/index";
import { DarkMode } from "./components/theme/darkMode";

export function App() {
  return (
    <div className="app">
      <DarkMode />

      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
