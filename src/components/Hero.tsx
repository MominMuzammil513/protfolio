// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import Image from "next/image";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(50);

//   const textArray = useMemo(() => [
//     "Full-Stack Developer",
//     "React.js & Next.js Expert",
//     "TypeScript Enthusiast",
//     "3D Web Application Developer",
//     "Redux & State Management Specialist",
//     "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
//     "RESTful APIs & Secure Authentication",
//     "MongoDB & Prisma ORM"
//   ], []);

//   const period = 1000;

//   const tick = useCallback(() => {
//     let i = loopNum % textArray.length;
//     let fullText = textArray[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setTypingSpeed(prevSpeed => prevSpeed / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setTypingSpeed(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setTypingSpeed(50);
//     }
//   }, [isDeleting, loopNum, text, textArray]);

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, typingSpeed);

//     return () => { clearInterval(ticker) };
//   }, [tick, typingSpeed]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="blue"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-20">
//         {/* Text content */}
//         <motion.div 
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
//         >
//           <TextGenerateEffect
//             words="Hi! I'm Muzammil"
//             className="text-4xl md:text-6xl font-bold text-white mb-4"
//           />
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="text-xl md:text-2xl text-gray-300 mb-6"
//           >
//             I&apos;m a <span className="text-blue-400 font-semibold">{text}</span>
//             <span className="cursor border-r-2 border-blue-400 animate-blink"></span>
//           </motion.p>
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//             className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
//           >
//             I&apos;m a Full-Stack Developer with a passion for building high-performance web applications. I love combining creativity and technical skills to create solutions that not only meet but exceed expectations.
//             I&apos;m a Full-Stack Developer crafting high-performance web solutions. I blend creativity with technical expertise to exceed expectations and push boundaries.
//           </motion.p>
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.9 }}
//           >
//             <Link href="#Contact">
//               <MagicButton
//                 title="Show my work"
//                 icon={<FaLocationArrow />}
//                 position="right"
//                 otherClasses="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//               />
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Image */}
//         <motion.div 
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="w-full md:w-1/2 pl-0 md:pl-10"
//         >
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="relative w-full max-w-md mx-auto"
//           >
//             <Image
//               src="/Me/m1r.png"
//               alt="Muzammil"
//               width={500}
//               height={500}
//               className="rounded-full shadow-2xl border-4 border-blue-400"
//             />
//             <motion.div 
//               animate={{ 
//                 background: [
//                   "linear-gradient(0deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(60deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(20deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(80deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(40deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(100deg, #3b82f6, #8b5cf6)",
//                   "linear-gradient(160deg, #3b82f6, #8b5cf6)",
//                 ]
//               }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               className="absolute -inset-0.5 rounded-full blur opacity-75"
//             ></motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const textArray = useMemo(() => [
    "Full-Stack Developer",
    "React & Next.js Expert",
    "TypeScript Enthusiast",
    "3D Web Developer",
    "State Management Specialist",
    "SSR & SSG Expert",
    "API & Auth Specialist",
    "Database Expert"
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden" 
    >
      {/* Background effects */}
      {/* <div className="absolute inset-0"> */}
        {/* <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        /> */}
        {/* <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        /> */}
        {/* <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" /> */}
      {/* </div> */}
      <div className="w-full absolute left-0 -top-72 min-h-96 ">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          height={100} width={100}
          className="w-full h-full opacity-50 "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-20">
        {/* Text content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <TextGenerateEffect
            words="Hi! I'm Muzammil"
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          />
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            I&apos;m a <span className="text-blue-400 font-semibold">{text}</span>
            <span className="cursor border-r-2 border-blue-400 animate-blink"></span>
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            I&apos;m a Full-Stack Developer crafting high-performance web solutions. I blend creativity with technical expertise to exceed expectations and push boundaries.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-grow flex-wrap justify-start items-center gap-4"
          >
            <Link href="#Contact">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              />
            </Link>
            <Link href="mailto:muzammilaumed2376@gmail.com">
              <MagicButton
                title="get in touch"
                icon={<FaLocationArrow />}
                position=""
                otherClasses="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 pl-0 md:pl-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-md mx-auto"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full opacity-75 blur-lg"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative rounded-full overflow-hidden shadow-2xl border-4 border-blue-400"
              style={{ width: '100%', paddingBottom: '100%' }}
            >
              <Image
                src="/Me/m1r.png"
                alt="profile"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
              {/* <motion.div 
              animate={{ 
                background: [
                  "linear-gradient(0deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(60deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(20deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(80deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(40deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(100deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(160deg, #3b82f6, #8b5cf6)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-0.5 rounded-full blur opacity-75"
            ></motion.div> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;