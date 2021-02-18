import React from 'react'

const ProjectBtn = ({ name, src, alt }) => {
    return (
        <div className="project-btn">
            <img src={src} alt={alt} className="proj-btn-icon"/>
            <h4>{name}</h4>
        </div>
    )
}

export default ProjectBtn
