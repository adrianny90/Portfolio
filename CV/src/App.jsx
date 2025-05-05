import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Home from "./Components/Home";
import LanguageProvider from "./Components/LanguageProvider";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-white min-h-screen scroll-smooth">
        <Navigation />
        <Home />
        <Skills />
        <Projects />
        <AboutMe />
        <ContactMe />
      </div>
    </LanguageProvider>
  );
}

export default App;
