import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
          About Me
        </h2>
        <motion.div
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="mb-4">
            I'm Adrian Bakalarz, a passionate Fullstack Web Developer with
            experience in building responsive and user-friendly websites. I
            specialize in technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p>
            My goal is to transform ideas into reality through clean code and
            innovative solutions. When I'm not coding, you can find me exploring
            new tech trends or working on personal projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
