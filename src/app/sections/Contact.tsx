"use client";

import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-purple-500 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:john.doe@example.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  john.doe@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-purple-500 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple-500 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6">Social Media</h3>
          <div className="flex gap-6">
            {["Github", "LinkedIn", "Twitter", "Dribbble"].map(
              (social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  {social.charAt(0)}
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Hello John, I'd like to talk about..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
