import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Projects() {
  const { lang } = useContext(LanguageContext);
  const projects = [
    {
      title: "Simulated e-commerce application",
      description:
        "A web app built with React, Vite, and TailwindCSS, designed to emulate an e-commerce shop. It utilizes localStorage for persistent data storage, enabling features like saving user preferences and cart items across sessions. The application also incorporates responsive design for seamless use across devices.",
      image:
        "https://thaka.bing.com/th/id/OIP.LeyZ3l-PnC7b3B_VLFSgMwHaE7?w=290&h=194&c=7&r=0&o=5&pid=1.77",
      link: "https://ecommercefake.onrender.com/",
      repo: "https://github.com/adrianny90/Portfolio/tree/main/e_commerce_fake",
    },
    {
      title: "Blog with recipes",
      description:
        "A fullstack blog application with a frontend built using React, TailwindCSS, and Vite for a fast and responsive user interface. The backend is powered by Node.js and Express, providing robust API endpoints for content management. It utilizes a PostgreSQL database for efficient data storage and retrieval.",
      image:
        "https://images.lecker.de/tarta-mit-kirschen-und-schokolade-lecker-03-2025,id=29a4d334,b=lecker,w=980,rm=sk.webp",
      link: "https://fullstack-blog-ui.onrender.com/",
      repo: "https://github.com/adrianny90/Fullstack-blog",
    },
    {
      title: "Berlin Give",
      description:
        "This is a platform for sharing used items for free, built using Vite, React, TailwindCSS, vanilla CSS, React Router, Node.js, Express, and MongoDB. It features user authentication, email verification, messaging between users, and an interactive map displaying all listed items.",
      image: "https://berlingive.onrender.com/image/img.jpg",
      link: "https://berlingive.onrender.com",
      repobackend: "https://github.com/adrianny90/Final_project_server",
      repofrontend: "https://github.com/adrianny90/Final_project_client",
    },
  ];
  const projekte = [
    {
      title: "Simulierte E-Commerce Anwendung",
      description:
        "Diese Webanwendung wurde mit React, Vite und Tailwind CSS entwickelt und simuliert die Funktionalität eines modernen E-Commerce-Shops. Sie nutzt den localStorage zur persistenten Speicherung von Daten, wodurch benutzerspezifische Einstellungen und Warenkorbinhalte auch über mehrere Sitzungen hinweg erhalten bleiben. Dank ihres responsiven Designs ist die Anwendung nahtlos auf verschiedenen Endgeräten nutzbar – von Desktop bis Smartphone.", // Ziel des Projekts war es, zentrale Aspekte eines Fullstack-Workflows wie State-Management, Benutzerinteraktion und Frontend-Performance praxisnah umzusetzen.",
      image:
        "https://thaka.bing.com/th/id/OIP.LeyZ3l-PnC7b3B_VLFSgMwHaE7?w=290&h=194&c=7&r=0&o=5&pid=1.77",
      link: "https://ecommercefake.onrender.com/",
      repo: "https://github.com/adrianny90/Portfolio/tree/main/e_commerce_fake",
    },
    {
      title: "Blog mit Rezepten",
      description:
        "Bei dieser Fullstack-Blog-Anwendung wurde das Frontend mit React, Tailwind CSS und Vite entwickelt, um eine schnelle und reaktionsfähige Benutzeroberfläche zu gewährleisten. Das Backend basiert auf Node.js und Express und stellt robuste API-Endpunkte für das Content-Management bereit. Für die effiziente Speicherung und Abfrage der Daten kommt eine PostgreSQL-Datenbank zum Einsatz.",
      image:
        "https://images.lecker.de/tarta-mit-kirschen-und-schokolade-lecker-03-2025,id=29a4d334,b=lecker,w=980,rm=sk.webp",
      link: "https://fullstack-blog-ui.onrender.com/",
      repo: "https://github.com/adrianny90/Fullstack-blog",
    },
    {
      title: "Give Berlin",
      description:
        "Bei dieser Plattform handelt es sich um eine Anwendung zum kostenfreien Teilen gebrauchter Artikel, entwickelt mit Vite, React, Tailwind CSS, Vanilla CSS, React Router, Node.js, Express und MongoDB. Die Anwendung umfasst Funktionen wie Benutzerauthentifizierung, E-Mail-Verifizierung, einen Nachrichtenaustausch zwischen Nutzern sowie eine interaktive Karte, die alle gelisteten Artikel übersichtlich darstellt.",
      image: "https://berlingive.onrender.com/image/img.jpg",
      link: "https://berlingive.onrender.com",
      repobackend: "https://github.com/adrianny90/Final_project_server",
      repofrontend: "https://github.com/adrianny90/Final_project_client",
    },
  ];

  return (
    <>
      {!lang ? (
        <section id="projects" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      View Project
                    </a>

                    {project?.repo ? (
                      <>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <div className="m-5">
                            <FaGithub />
                          </div>
                        </a>
                      </>
                    ) : (
                      <div className="">
                        <a
                          href={project?.repofrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <p>Frontend</p>
                          <div className="ml-5">
                            <FaGithub />
                          </div>
                        </a>
                        <a
                          href={project?.repobackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <p>Backend</p>
                          <div className="ml-5">
                            <FaGithub />
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="projects" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              Meine Projekte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projekte.map((projekt, index) => (
                <motion.div
                  key={projekt.title}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <img
                    src={projekt.image}
                    alt={projekt.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">
                      {projekt.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{projekt.description}</p>
                    <a
                      href={projekt.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      Projekt ansehen
                    </a>

                    {projekt?.repo ? (
                      <>
                        <a
                          href={projekt.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <div className="m-5">
                            <FaGithub />
                          </div>
                        </a>
                      </>
                    ) : (
                      <div className="">
                        <a
                          href={projekt?.repofrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <p>Frontend</p>
                          <div className="ml-5">
                            <FaGithub />
                          </div>
                        </a>
                        <a
                          href={projekt?.repobackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" hover:text-teal-400 transition-colors duration-300"
                        >
                          <p>Backend</p>
                          <div className="ml-5">
                            <FaGithub />
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
