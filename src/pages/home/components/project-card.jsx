import React from 'react'
import { Fade } from 'react-reveal'
import {Link} from 'react-router-dom'
import './css/card.css'
const ProjectCard = ({title, link, details, tech, index, animation, target})=>{
    return(
        <div className="Card" style={{backgroundColor:'#1f2235'}}> 
            <Fade duration={1000} left>
            <div className="bold-num" >{index}</div>
            </Fade>
            <div className="card-title" id="proj-card-title"> {title} </div>
            <div className="project-link">{link}</div>
            <div className="card-details" id="proj-card-details">
                {details}
            </div>
            
            <div className="proj-tools">
                <i className="fa fa-code proj-icon"></i>
               {tech}
            </div>
            <Link to={target}><button className="btn-visit">Visit site <i className="fa fa-external-link"></i></button></Link>
            <div className="learn-more">Learn more <i className="fa fa-arrow-right fa-1x arrow-icon"></i></div>
        </div>
    )
}
export default ProjectCard;