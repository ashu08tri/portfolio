"use client"
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

function AnimateWrapper({ children }) {

  const path = usePathname();
  let transitionText = path.substring(1);
  
  if(path === '/'){
    transitionText = 'Home'
  }else{
    transitionText = transitionText[0].toUpperCase() + transitionText.slice(1)
  }
 
  return (
    <AnimatePresence mode="wait">
      <div key={path} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div className="w-screen h-screen bg-black rounded-b-[100px] fixed z-40"
          animate={{ height: 0 }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        <motion.div className="fixed m-auto top-0 left-0 right-0 bottom-29 mt-[150px] text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >{transitionText}</motion.div>

        <motion.div className="w-screen h-screen bg-black rounded-t-[100px] bottom-0 fixed z-30"
          initial={{ height: '140vh' }}
          animate={{ height: 0, transition: { delay: 0.5 } }}

        />
        <div className="h-24">
          <Nav />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default AnimateWrapper;