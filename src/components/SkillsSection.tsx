import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const SkillsSection = () => {
  return (
    <motion.div
      className="box flex flex-col w-full justify-center items-center mt-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
    {/* <div className="flex flex-col w-full justify-center items-center"> */}
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <p className="text-center mt-8 max-w-6xl">
        I&apos;m a Frontend Focused Web Developer building and managing the
        Front-end of Websites and Web Applications that leads to the success of
        the overall product. Check out some of my work in the Projects section.
        I also like sharing content related to the stuff that I have learned
        over the years in Web Development so it can help other people of the Dev
        Community. Feel free to Connect or Follow me on my Linkedin and
        Instagram where I post useful content related to Web Development and
        Programming I&apos;m open to Job opportunities where I can contribute,
        learn and grow. If you have a good opportunity that matches my skills
        and experience then don&apos;t hesitate to contact me.
      </p>
      <div>
        <Image src='/app.svg' alt='app'     width='300' height='300'/>
        <Image src='/appName.svg' alt='app' width='300' height='300'/>
        <Image src='/b1.svg' alt='app'      width='300' height='300'/>
        <Image src='/b4.svg' alt='app'      width='300' height='300'/>
        <Image src='/b5.svg' alt='app'      width='300' height='300'/>
        <Image src='/c.svg' alt='app'        width='300' height='300'/>
        <Image src='/cloud.svg' alt='app'    width='300' height='300'/>
        <Image src='/cloudName.svg' alt='app' width='300' height='300'/>
        <Image src='/docks.svg' alt='app' width='300' height='300'/>
        <Image src='/dockerName.svg' alt='app' width='300' height='300'/>
        <Image src='/exp1.svg' alt='app' width='300' height='300'/>
        <Image src='/fm.svg' alt='app' width='300' height='300'/>
        <Image src='/footer-grid.svg' alt='app' width='300' height='300'/>
        <Image src='/git.svg' alt='app' width='300' height='300'/>
        <Image src='/grid.svg' alt='app' width='300' height='300'/>
        <Image src='/gsap.svg' alt='app' width='300' height='300'/>
        <Image src='/host.svg' alt='app' width='300' height='300'/>
        <Image src='/hostName.svg' alt='app' width='300' height='300'/>
        <Image src='/insta.svg' alt='app' width='300' height='300'/>
        <Image src='/link.svg' alt='app' width='300' height='300'/>
        <Image src='/next.svg' alt='app' width='300' height='300'/>
        <Image src='/exp4.svg' alt='app' width='300' height='300'/>
        <Image src='/p1.svg' alt='app' width='300' height='300'/>
        <Image src='/p2.svg' alt='app' width='300' height='300'/>
        <Image src='/p3.svg' alt='app' width='300' height='300'/>
        <Image src='/p4.svg' alt='app' width='300' height='300'/>
        <Image src='/profile.svg' alt='app' width='300' height='300'/>
        <Image src='/re.svg' alt='app' width='300' height='300'/>
        <Image src='/s.svg' alt='app' width='300' height='300'/>
        <Image src='/stream.svg' alt='app' width='300' height='300'/>
        <Image src='/streamName.svg' alt='app' width='300' height='300'/>
        <Image src='/tail.svg' alt='app' width='300' height='300'/>
        <Image src='/three.svg' alt='app' width='300' height='300'/>
        <Image src='/ts.svg' alt='app' width='300' height='300'/>
        <Image src='/twit.svg' alt='app' width='300' height='300'/>
        <Image src='/wha.svg' alt='app' width='300' height='300'/>
      </div>
    {/* </div> */}
    </motion.div>
  );
};
export default SkillsSection;
