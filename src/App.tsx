import { Intro, About, Projects, Footer } from "./components/index";

export function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
