import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web app built with React and Node.js.",
      image: "./src/image/project1.jpg",
      link: "https://example.com",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with Tailwind CSS.",
      image: "./src/image/project2.jpg",
      link: "https://example.com",
    },
    {
      title: "Project Three",
      description: "A portfolio website with MongoDB backend.",
      image: "./src/image/project3.jpg",
      link: "https://example.com",
    },
  ];

  return (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
