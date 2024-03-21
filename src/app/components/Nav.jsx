"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import {motion} from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/about', title: 'About' },
  { url: '/contact', title: 'Contact' },
]

function Nav() {

  const [open, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen(!open);
  }

  const topVarient = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)'
    }
  }

  const centerVarient = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }

  const bottomVarient = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)'
    }
  }

  const listVarient = {
    closed: {
      x:'100vw'
    },
    opened: {
      x:0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15
      }
    }
  }

  const itemListVarient ={
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

      {/*Links*/}
      <ul className="hidden md:flex gap-4 w-1/3">
        {links.map((link, i) => <NavLink link={link} key={i}/>)}
      </ul>

      {/*Logo*/}
      <div className="w-1/3 flex justify-center">
        <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Ashu</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Dev</span>
        </Link>
      </div>

      {/*Socials*/}
      <div className="hidden md:flex justify-center gap-4 w-1/3 ">
        <Link href='https://github.com/ashu08tri?tab=repositories' className="text-black">
          <Image src='/github.png' alt="github" width={24} height={24} />
        </Link>
        <Link href='/' className="text-black">
          <Image src='/linkedin.png' alt="linkedin" width={24} height={24} />
        </Link>
      </div>

      <button className="sm:block md:hidden w-10 h-8 flex flex-col justify-between z-50 relative" onClick={menuHandler}>
        <motion.div 
        variants={topVarient}
        animate={open ? 'opened' : 'closed'}
        className='bg-black w-10 h-1 rounded origin-left'></motion.div>
        <motion.div 
        variants={centerVarient}
        animate={open ? 'opened' : 'closed'}
        className='bg-black w-10 h-1 rounded'></motion.div>
        <motion.div 
        variants={bottomVarient}
        animate={open ? 'opened' : 'closed'}
        className='bg-black w-10 h-1 rounded origin-left'></motion.div>
      </button>

      {
        open && <motion.div variants={listVarient} initial='closed' animate='opened' className="sm:block md:hidden absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          {links.map((link, i) =>
          <motion.div variants={itemListVarient} key={i}>
          <Link href={link.url}>{link.title}</Link>
          </motion.div>)}
        </motion.div>
      }

    </nav>
  )
}

export default Nav;