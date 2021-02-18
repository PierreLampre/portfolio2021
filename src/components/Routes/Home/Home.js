import React from 'react'
import Pinwheel from "./Pinwheel/Pinwheel"
import Marquee from "./Marquee/Marquee"
import { motion } from "framer-motion"
import "./home.css"

const Home = () => {
    return (
        <div className="home-container">
            <motion.div className="pinwheel-box centered"
                animate={{ x: -350, rotate: [0, 360] }}
                transition={{ delay: 3, duration: 2 }}
            >
                <Pinwheel />

            </motion.div>
            <Marquee />
        </div>
    )
}

export default Home
