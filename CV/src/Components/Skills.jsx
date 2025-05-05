import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function Skills() {
  const { lang } = useContext(LanguageContext);

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!lang ? (
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
            My Skills
          </h2>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
            Meine Fähigkeiten
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl text-teal-400 hover:text-white transition-colors duration-300 mb-2">
                {skill.icon}
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
