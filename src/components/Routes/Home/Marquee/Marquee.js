import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
    return (
        <div className="marquee centered">
            <motion.h1
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 5 }}
            >
                JUSTIN LAMPE</motion.h1>
            <motion.h3
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 5.5 }}
            >
                Web Developer</motion.h3>
        </div>
    )
}

export default Marquee
