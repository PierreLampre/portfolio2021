import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrap">
                <h3>Connect with me on:</h3>
                <a href="https://github.com/PierreLampre/" className="footer-link">
                    <button className="footer-btn">Github</button>
                </a>
                <a href="https://www.linkedin.com/in/justin-mark-lampe/" className="footer-link">
                    <button className="footer-btn">LinkedIn</button>
                </a>
                <a href="mailto:pierrelampre@gmail.com" className="footer-link">
                    <button className="footer-btn">Gmail</button>
                </a>
            </div>
        </div>
    )
}

export default Footer
