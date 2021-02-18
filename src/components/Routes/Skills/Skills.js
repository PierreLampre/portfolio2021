import React from 'react'
import Footer from "../../Footer/Footer"
import { motion } from "framer-motion"
import "./skills.css"

const Skills = () => {
    return (
        <motion.div className="skills-container" animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2>Skills</h2>
            <div className="contact-box">

            </div>
            <Footer />
        </motion.div>
    )
}

export default Skills
