import ReactCountryFlag from "react-country-flag";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Navigation() {
  const { lang, setLang } = useContext(LanguageContext);
  const callLand = () => {
    setLang((prev) => !prev);
  };
  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 shadow-lg">
      <div className=" mx-auto px-6 sm:px-8">
        <div className="flex justify-between">
          <div>
            {!lang && (
              <button onClick={callLand}>
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{
                    width: "3em",
                    height: "3em",
                  }}
                  title="US"
                />
              </button>
            )}
            {lang && (
              <button onClick={callLand}>
                <ReactCountryFlag
                  countryCode="DE"
                  svg
                  style={{
                    width: "3em",
                    height: "3em",
                  }}
                  title="DE"
                />
              </button>
            )}
          </div>
          {!lang ? (
            <ul className="flex flex-wrap justify-end items-center py-2 gap-3 text-base sm:text-lg md:text-xl font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-wrap justify-end items-center py-2 gap-3 text-base sm:text-lg md:text-xl font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Startseite
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Fähigkeiten
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Projekte
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
