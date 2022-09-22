import { Intro, About, Project, Footer, Nav } from "./components/index";

export function App() {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
