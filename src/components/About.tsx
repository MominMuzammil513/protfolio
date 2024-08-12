import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillsImages } from "@/app/data";

const About = () => {
  return (
    <>
      <h1 className="heading">
        Get to <span className="text-purple">know me!</span>
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-12 gap-12">
        
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed">
            Passionate <span className="text-purple-600 font-semibold">Frontend Developer</span>, dedicated to crafting sleek, user-centric websites. I merge <span className="text-purple-600 font-semibold">innovation</span> with functionality, transforming ideas into digital reality. <br /><br />
            Let’s build something <span className="text-purple-600 font-semibold">amazing</span> together.
          </p>
        </motion.div>
        
        {/* Vertical Line */}
        <div className="hidden lg:block w-px bg-gray-300 self-stretch"></div>
        
        {/* Skills Section */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-wrap justify-center lg:justify-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {SkillsImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              height={1000}
              width={1000}
              className="h-20 w-20 lg:h-24 lg:w-24 border-2 border-gray-300 p-2 rounded-lg shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default About;
