import React from 'react'
import ProjectCard from './project-card';
import Zoom from 'react-reveal'
import './css/proj-cards.css'
import './css/cards.css'
const ProjectCards = () => {
    
    return ( 
        <div className="cards" id="proj-cards">
            <div className="row card-grid">
           
               <Zoom duration={2000} clear>
                <div className="col-lg-4 col-md-4 col-sm-12-col-xs-12 card-col" id="proj-card-col">
                        <ProjectCard 
                            title="The Next Stage Lab Community"
                            link="tnsl.netlify.app"
                            details="An online community where users from various regions can collaborate to earn, learn 
                                    post jobs and lot more"
                            tech="React.js, MaterialUI, Bootstrap"
                            index="01"
                            animation="right"
                            target="https://tnsl.netlify.app/"
                        />
                    </div>
               </Zoom>
               <Zoom duration={2000} clear>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card-col" id="proj-card-col">
                    <ProjectCard 
                        title="Blog website"
                        link="hamidstories.great-site.net"
                        details="A blog website that enables the admin to upload posts including images. Users can comment and like any post "
                        tech="JQUery, PHP, Bootstrap, MySQL"
                        index="02"
                        animation="left"
                        target="http://hamidstories.great-site.net/"
                    />
                </div>
                </Zoom>
               
               <Zoom duration={2000} clear>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card-col" id="proj-card-col">
                    <ProjectCard 
                        title="Meda foodie"
                        link="https://blab-emo-recipe.netlify.app"
                        details="An online store that displays their products for clients to see"
                        tech="React.js, MaterialUI, Bootstrap"
                        index="03"
                        animation="right"
                        target="https://blab-emo-recipe.netlify.app"
                    />
                </div>
                </Zoom>

                <Zoom duration={2000} clear>
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card-col" id="proj-card-col">
                    <ProjectCard 
                        title="GTA Real Estate"
                        link="gtarealestatealade.com.ng"
                        details="A real estate and property management agency that manages properties of their customers "
                        tech="Bootstrap, JQuery, PHP, MySQL"
                        index="04"
                        animation="left"
                        target="https://www.gtarealestatealade.com.ng/"
                    />
                </div>
               </Zoom>
            </div>
        </div>
     );
}
 
export default ProjectCards;