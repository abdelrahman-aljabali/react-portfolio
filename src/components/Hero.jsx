import React from "react";
import { HERO_CONTENT } from "../constants";
import profileImg4 from "../assets/profileImg4.png";
import { delay, motion, transform } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <div className="m-7 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-7xl font-thin tracking-right lg:mt-16 lg:text-7xl"
            >
              Abdelrahman Aljabali
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Blockchain- und Softwareentwickler-Student
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-2/5 lg:p-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center lg:justify-end rounded-full overflow-hidden border-2 border-gray-700 p-0"
          >
            <img
              className="w-full -z-10 lg:w-auto lg:max-w-full"
              src={profileImg4}
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
