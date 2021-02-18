import React from 'react'
import ProjectBtn from "./ProjectBtn"
import Footer from "../../Footer/Footer"
import tv from "./img/tv.svg"
import pill from "./img/pill.svg"
import house from "./img/house.svg"
import lari from "./img/lari.svg"
import geet from "./img/geet.svg"
import note from "./img/note.svg"
import burger from "./img/burger.svg"
import crystal from "./img/crystal.svg"
import a_gif from "./img/gif.svg"
import "./projects.css"

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-box">
                <ProjectBtn name={"Tubecast"} src={tv} alt={"a television"}/>
                <ProjectBtn name={"Keep Yourself Alive"} src={pill} alt={"a pill"}/>
                <ProjectBtn name={"Georgian Phonics"} src={lari} alt={"georgian lari"}/>
                <ProjectBtn name={"Rob Moore"} src={geet} alt={"a flying v guitar"}/>
                <ProjectBtn name={"Rentable"} src={house} alt={"a house"}/>
                <ProjectBtn name={"Only The Hits"} src={note} alt={"a music note"}/>
                <ProjectBtn name={"CRUD Burger"} src={burger} alt={"a tasty burger"}/>
                <ProjectBtn name={"Crystal Collector"} src={crystal} alt={"a crystal"}/>
                <ProjectBtn name={"Giphy API"} src={a_gif} alt={"a paper with gif written on it"}/>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
