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
                    I’m a skilled Fullstack Web Developer and Controls Engineer
                    with extensive experience in building responsive,
                    user-friendly websites and industrial automation systems. My
                    expertise spans technologies like React, JavaScript,
                    Node.js, Tailwind CSS, Python, and PostgreSQL, as well as
                    PLC programming and HMI/SCADA development.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed">
                    I see a strong parallel between industrial systems and web
                    applications: PLCs, motors, and sensors act as the robust
                    backend, while HMIs and SCADA systems serve as the intuitive
                    frontend. Over the past three years, I worked at Tesla, one
                    of the most technologically advanced companies, as a
                    Controls Engineer. There, I honed my skills in cutting-edge
                    automation technologies, including PLC, SCADA, HMI, and
                    integrated software solutions using Python and PostgreSQL.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed">
                    My passion is transforming complex ideas into seamless,
                    innovative solutions—whether it’s crafting clean code for
                    web applications or designing reliable control systems. When
                    I’m not coding, I’m exploring emerging tech trends or
                    building personal projects to push my skills further.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4 text-lg leading-relaxed">
                    Ich bin ein erfahrener Fullstack-Webentwickler und
                    Steuerungsingenieur mit umfassender Erfahrung in der
                    Entwicklung responsiver, benutzerfreundlicher Websites und
                    industrieller Automatisierungssysteme. Meine Expertise
                    umfasst Technologien wie React, JavaScript, Node.js,
                    Tailwind CSS, Python und PostgreSQL sowie SPS-Programmierung
                    und HMI/SCADA-Entwicklung.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed">
                    Ich sehe eine starke Parallele zwischen industriellen
                    Systemen und Webanwendungen: SPS, Motoren und Sensoren
                    bilden das robuste Backend, während HMIs und SCADA-Systeme
                    das intuitive Frontend bilden. In den letzten drei Jahren
                    habe ich bei Tesla, einem der technologisch
                    fortschrittlichsten Unternehmen, als Steuerungsingenieur
                    gearbeitet. Dort habe ich meine Kenntnisse in modernsten
                    Automatisierungstechnologien wie SPS, SCADA, HMI und
                    integrierten Softwarelösungen mit Python und PostgreSQL
                    verfeinert.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed">
                    Meine Leidenschaft ist es, komplexe Ideen in nahtlose,
                    innovative Lösungen zu verwandeln – sei es beim Erstellen
                    von sauberem Code für Webanwendungen oder beim Entwurf
                    zuverlässiger Steuerungssysteme. Wenn ich nicht gerade
                    programmiere, erforsche ich neue Technologietrends oder
                    entwickle persönliche Projekte, um meine Fähigkeiten
                    weiterzuentwickeln.
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
