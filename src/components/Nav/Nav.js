import React from 'react'
import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrap">
                <Link to="/" className="logo">
                    <h1>JUSTIN LAMPE</h1>
                </Link>

                <div className="nav-links">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                    <Link to="/skills">
                        Skills
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Nav
