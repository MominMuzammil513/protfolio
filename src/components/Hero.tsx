import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Hero = () => {
    // 
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(50);
  
    const textArray = useMemo(() => [
      "Full-Stack Developer",
      "React.js & Next.js Expert",
      "TypeScript Enthusiast",
      "3D Web Application Developer",
      "Redux & State Management Specialist",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "RESTful APIs & Secure Authentication",
      "MongoDB & Prisma ORM"
    ], []);
  
    const period = 1000;
  
    const tick = useCallback(() => {
      let i = loopNum % textArray.length;
      let fullText = textArray[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setTypingSpeed(prevSpeed => prevSpeed / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(50);
      }
    }, [isDeleting, loopNum, text, textArray]);
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, typingSpeed);
  
      return () => { clearInterval(ticker) };
    }, [tick, typingSpeed]);
  // 
  // const {theme,setTheme} = useTheme()

  return (
    <>
    <div className="pb-20 mt-10">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="pink"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="pink"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="pink" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look  */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
         />
       </div>

      <div className="flex justify-center items-center relative my-20 z-10 rounded-2xl md:flex-row flex-col">
        <div className=" flex w-full flex-col items-center justify-center pl-1">
          {/* max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] */}
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            
          </p> */}
       {/* <button className="bg-white text-black text-4xl" onClick={()=>setTheme("light") }>THEME</button> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Hi! I&apos;m Muzammil"
            className="text-center text-xl  md:text-3xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-2xl">
            {/* text-green-500 sm:text-red-700 md:text-blue-600 lg:text-orange-500 */}
            I&apos;m a {text}<span className="cursor border-r-2 animate-blink"></span>
          </p>
          <p className="text-justify md:tracking-wider mb-4 text-sm">
          {/* I&apos;m a software developer with 1 year and 5 months of experience in full-stack development, specializing in React, Next.js, and Node.js. I&apos;ve worked on building responsive UIs and designing RESTful APIs, delivering scalable software solutions. */}
          I&apos;m  Full-Stack Developer with a passion for building high-performance web applications. I love combining creativity and technical skills to create solutions that not only meet but exceed expectations.
          </p>
          <Link href="#Contact">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
        <div className="w-full h-full relative">
      <Image src={'/Me/m1r.png'} alt="m1" width={2000} height={2000} className=" w-full h-1/2"/>
    </div>
      </div>
    </div>
    {/* <div className="w-full h-full border-2 relative">
      <Image src={'/Me/m1.jpg'} alt="m1" width={2000} height={200} className="object-cover w-full h-full"/>
    </div> */}
    </>
  );
};

export default Hero;
