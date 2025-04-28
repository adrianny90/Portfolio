import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            Hi, I'm Adrian Bakalarz
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Fullstack Web Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Transforming Ideas into Beautifully Responsive Websites
          </p>
          <div className="flex gap-4 mb-6">
            <a
              href="#contact"
              className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="/path-to-cv.pdf"
              download
              className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500">
            <img
              src="./src/image/AB.jpg"
              alt="Adrian Bakalarz"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
