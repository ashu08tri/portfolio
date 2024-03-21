"use client"
import {motion, useInView, useScroll} from 'framer-motion';
import Brain from '../components/Brain';
import MotionDiv from "../components/MotionDiv";
import { useRef } from 'react';

function About() {
  const container = useRef();

  const {scrollYProgress} = useScroll({container});

  const skillRef = useRef();

  const isSkillInView = useInView(skillRef, {once: true, margin: '-100px'})

  const projectRef = useRef();

  const isProjectInView = useInView(projectRef, {once: true, margin: '-100px'})

  return (
    <MotionDiv>
      {/*Main Container*/}
      <div className="h-[calc(100vh-6rem)] overflow-scroll md:flex" ref={container}>
        {/*Texts Container*/}

        <div className="p-4 sm:p-8 md:p-10 lg:p-16 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 md:w-3/4 xl:w-1/2 xl:pr-0">
          {/*Biograpgy Container*/}

          <div className="flex flex-col gap-10 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            <p className="text-lg">I&#39;m a passionate Front-End Web Developer with a keen eye for detail and a drive for creating captivating user experiences. 
            With a strong foundation in web development technologies and a creative mindset, 
            I strives to craft visually stunning and highly functional websites that engage and inspire users.</p>

            <span className="italic">Bringing pixels to life, one line of code at a time.</span>
            
            <div className="self-end">
              <svg width="203"
                height="95"
                viewBox="0 0 203 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8182 53.0544L25.6364 2L60.1818 81.4898L2 21.3878L86.5455 27.2041L60.1818 45.2993L92.9091 53.0544L67.4545 69.2109L112 2L114.273 32.6973M116.545 63.3946L114.273 32.6973M114.273 32.6973L140.182 27.2041L145.636 69.2109L156.545 27.2041V53.0544H187.455V27.2041L202 40.1293L19.2727 97" stroke="black" />
              </svg>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

           {/*Skills Container*/}

           <div className="flex flex-col gap-10 justify-center" ref={skillRef}>
            <motion.h1 initial={{x: '-300px'}} animate={isSkillInView ? {x: 0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            <motion.div initial={{x: '-300px'}} animate={isSkillInView ? {x: 0} : {}} className="flex flex-wrap gap-4">
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">HTML</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">CSS</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">JAVASCRIPT</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">NODE</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">REACTJS</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">REDUX</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">NEXTJS</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">MONGODB</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">TAILWIND</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">FRAMER-MOTION</div>
            <div className="bg-black text-white rounded p-2 cursor-pointer hover:bg-white hover:text-black">MATERIAL_UI</div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          

           {/*Projects Container*/}
          
           <div
            className="flex flex-col gap-10 justify-center pb-32"
            ref={projectRef}
          >
            {/* PROJECTS TITLE */}
            <motion.h1 className="font-bold text-2xl"
             initial={{x: '-300px'}} animate={isProjectInView ? {x: 0} : {}} transition={{delay: 0.2}}>
              PROJECTS
            </motion.h1>
            {/* Project LIST */}
            <motion.div 
             initial={{x: '-300px'}} animate={isProjectInView ? {x: 0} : {}}
            >
              {/* Project LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Project TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Foodie_Resturant
                  </div>
                  {/* Project DESC */}
                  <div className="p-3 text-sm italic">
                    FullStack Resturant Website.  <br />
                    Stack: Next.js, NextAuth, Material UI, MongoDB, Redux.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* Project LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* PROJECT TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Movie_Hub
                  </div>
                  {/* PROJECT DESC */}
                  <div className="p-3 text-sm italic">
                    An API based Movie Website, show&#39;s details and synopsis of a movie. <br />
                    Stack: (TMdB&#39;s API), React.js, React-Router and Material UI.
                  </div>
                </div>
              </div>
              {/* Project LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Project TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Devs_Meetup
                  </div>
                  {/* Project DESC */}
                  <div className="p-3 text-sm italic">
                    A Developer Meetup event page. <br />
                    Stack: React.js, Redux, React-Router, Tanstack/ReactQuery.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

        </div>

        {/*SVG Container*/}

        <div className="hidden sticky top-0 z-30 md:block w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>

    </MotionDiv>
  )
}

export default About;