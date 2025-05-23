import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Home from "./Components/Home";
import LanguageProvider from "./Components/LanguageProvider";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-white min-h-screen scroll-smooth">
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark" // Optional: match your app's theme
        />
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
