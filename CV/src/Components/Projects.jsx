import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Projects() {
  const { lang } = useContext(LanguageContext);
  const projects = [
    {
      title: "E-Commerce Fake",
      description: "A web app built with React, Vite and TailwindCss.",
      image:
        "https://thaka.bing.com/th/id/OIP.LeyZ3l-PnC7b3B_VLFSgMwHaE7?w=290&h=194&c=7&r=0&o=5&pid=1.77",
      link: "https://ecommercefake.onrender.com/",
      repo: "https://github.com/adrianny90/Portfolio/tree/main/e_commerce_fake",
    },
    {
      title: "Blog with recipes",
      description:
        "Fullstack blog with frontend in React, TailwindCss and backend in Node.js.",
      image:
        "https://images.lecker.de/tarta-mit-kirschen-und-schokolade-lecker-03-2025,id=29a4d334,b=lecker,w=980,rm=sk.webp",
      link: "https://fullstack-blog-31jr.onrender.com/",
      repo: "https://github.com/adrianny90/Fullstack-blog",
    },
    // {
    //   title: "Project Three",
    //   description: "A portfolio website with MongoDB backend.",
    //   image: "./src/image/project3.jpg",
    //   link: "https://example.com",
    // },
  ];
  const projekte = [
    {
      title: "E-Commerce-Fälschung",
      description: "Eine mit React, Vite und TailwindCss erstellte Web-App.",
      image:
        "https://thaka.bing.com/th/id/OIP.LeyZ3l-PnC7b3B_VLFSgMwHaE7?w=290&h=194&c=7&r=0&o=5&pid=1.77",
      link: "https://ecommercefake.onrender.com/",
      repo: "https://github.com/adrianny90/Portfolio/tree/main/e_commerce_fake",
    },
    {
      title: "Blog mit Rezepten",
      description:
        "Fullstack-Blog mit Frontend in React, TailwindCss und Backend in Node.js.",
      image:
        "https://images.lecker.de/tarta-mit-kirschen-und-schokolade-lecker-03-2025,id=29a4d334,b=lecker,w=980,rm=sk.webp",
      link: "https://fullstack-blog-31jr.onrender.com/",
      repo: "https://github.com/adrianny90/Fullstack-blog",
    },
    // {
    //   title: "Project Three",
    //   description: "A portfolio website with MongoDB backend.",
    //   image: "./src/image/project3.jpg",
    //   link: "https://example.com",
    // },
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

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-teal-400 transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
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

                    <a
                      href={projekt.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-teal-400 transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
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
