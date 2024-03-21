"use client"
import { motion } from 'framer-motion';

function MotionDiv({children}) {
  return (
    <motion.div initial={{ y: '-200vh' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  )
}

export default MotionDiv;