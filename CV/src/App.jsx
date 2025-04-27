import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
