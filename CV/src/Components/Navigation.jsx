import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="mx-auto px-6 sm:px-8">
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
      </div>
    </nav>
  );
}
