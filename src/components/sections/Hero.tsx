import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas"; 
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full flex items-center justify-center overflow-hidden">
      <div className={`pt-[80px] sm:pt-[100px] mx-auto max-w-7xl w-full px-4 sm:px-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-10`}>
        
        <div className="flex flex-row items-start gap-4 sm:gap-5 flex-1 min-w-[280px] w-full">
          
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#DCAFB3]" />
            <div className="violet-gradient h-40 w-1 sm:h-64 md:h-80" />
          </div>

          <div className="flex flex-col w-full">
            <h1 className={`${styles.heroHeadText} text-white whitespace-normal sm:whitespace-nowrap`}>
              Hi, I'm <span className="text-[#DCAFB3]">{config.hero.name}</span>
            </h1>
            
            <div className="w-full mt-3 sm:mt-4">
              <p className={`${styles.heroSubText} text-white-100 max-w-xl`}>
                {config.hero.p[0]} <br className="hidden sm:block" />
                {config.hero.p[1]}
              </p>
            </div>
          </div>

        </div>

        <div className="w-full sm:w-[45%] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] -mt-10 xs:-mt-16 sm:mt-16 md:mt-24 z-10 flex items-center justify-center">
          <ComputersCanvas />
        </div>

      </div>

      <div className="xs:bottom-10 absolute bottom-8 sm:bottom-12 flex w-full items-center justify-center z-20">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="6"
              className="stroke-secondary w-5 h-5 mb-1"
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;