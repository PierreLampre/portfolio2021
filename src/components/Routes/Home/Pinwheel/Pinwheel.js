import React from 'react'
import { motion } from "framer-motion"

const Pinwheel = () => {
    return (
        <motion.div
            className="anim-box1 centered"
            animate={{ width: 400, rotate: 180 }}
            transition={{ ease: "easeInOut", duration: 3 }}
        >
            <motion.div
                className="anim-box2 centered"
                animate={{ width: 390, rotate: 140 }}
                transition={{ ease: "linear", duration: 3 }}
            >
                <motion.div
                    className="anim-box3 centered"
                    animate={{ width: 380, rotate: 85 }}
                    transition={{ ease: "linear", duration: 3 }}
                >
                    <motion.div
                        className="anim-box4 centered"
                        animate={{ width: 360, rotate: 225 }}
                        transition={{ ease: "linear", duration: 3 }}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Pinwheel
