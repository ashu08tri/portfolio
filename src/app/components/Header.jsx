"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <motion.div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row" initial={{y: '-200vh'}} animate={{y: 0}} transition={{duration: 1}}>
     {/*Image Container*/}
        <div className="relative h-[35%] md:h-full md:w-1/2">
            <Image
             src="/hero.png"
             fill
             className="object-contain"
             alt="header_image"
            />
        </div>
        {/*Text Container*/}
        <div className="h-[65%] md:h-full md:w-1/2 flex flex-col gap-8 items-center justify-center text-black px-4 sm:px-4 md:px-8 lg:px-12 xl:px-24">
    <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
    <p className="md:text-xl text-black">Welcome to my digital canvas, where innovation and creativity converge. With a keen eyes for aesthetics and a 
      mastery of code, my portfolio showcases a diverse collection of projects that reflects my commitment to excellence.
    </p>
        <div className="w-full flex gap-4">
          <Link href='/portfolio'>
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">View My Work</button>
          </Link>
          <Link href='/contact'>
          <button className="p-4 rounded ring-1 ring-black text-black">Contact Me</button>
          </Link>
        </div>
        </div>
    </motion.div>
  )
}

export default Header;