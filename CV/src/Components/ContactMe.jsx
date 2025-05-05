import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function ContactMe() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      {!lang ? (
        <section id="contact" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              Contact Me
            </h2>
            <motion.form
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      ) : (
        <section id="contact" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              Kontaktiere mich
            </h2>
            <motion.form
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Ihr Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Ihre Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="5"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                Nachricht senden
              </button>
            </motion.form>
          </div>
        </section>
      )}{" "}
    </>
  );
}
