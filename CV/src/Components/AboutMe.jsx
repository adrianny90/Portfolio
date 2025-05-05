import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function AboutMe() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <section id="about" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!lang ? (
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              About Me
            </h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              Über mich
            </h2>
          )}
          <motion.div
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="text-gray-300 max-w-2xl mx-auto">
              {!lang ? (
                <>
                  <p className="mb-4 text-lg leading-relaxed">
                    I'm Adrian Bakalarz, a passionate Fullstack Web Developer
                    with experience in building responsive and user-friendly
                    websites. I specialize in technologies like React, Node.js,
                    and Tailwind CSS.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My goal is to transform ideas into reality through clean
                    code and innovative solutions. When I'm not coding, you can
                    find me exploring new tech trends or working on personal
                    projects.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4 text-lg leading-relaxed">
                    Ich bin Adrian Bakalarz, ein leidenschaftlicher
                    Fullstack-Programmier-Enthusiast Webentwickler mit Erfahrung
                    in der Erstellung von responsiven und benutzerfreundliche
                    Websites. Ich bin spezialisiert auf Technologien wie React,
                    Node.js und Rückenwind-CSS.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Mein Ziel ist es, Ideen in die Realität umzusetzen durch
                    sauberen Code und innovative Lösungen. Wenn nicht Ich
                    programmiere, erkunde neue Technologietrends oder arbeite an
                    persönlichen Projekten.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
