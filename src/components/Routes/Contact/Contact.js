import React from 'react'
import Footer from "../../Footer/Footer"
import { motion } from "framer-motion"
import "./contact.css"

const Contact = () => {
    return (
        <motion.div className="contact-container" animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2>Contact</h2>
            <div className="contact-box">

            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact
