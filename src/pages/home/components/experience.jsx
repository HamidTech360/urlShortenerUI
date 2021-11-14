import React from 'react'
import ProjectCards from './proj-cards';
import './css/experience.css'
const Experience = () => {
    return ( 
        <div className=" experience">
            
           <div className="text-center">
                    <div className="my-service-text">Portfolio Show case</div>
                    <div className="service-details-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit neque velit perspiciatis labore sint possimus, laborum ea! Sit, doloribus perspiciatis.
                    </div>
                    <div className="colored-divider"></div>
            </div>
            <ProjectCards/>

            {/* <div className="project-grid align-left">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-col">
                        <img src="../../../assets/project1.png" className="project-img" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-col">
                        <img src="../../../assets/project-3.png" className="project-img" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-col">
                        <img src="../../../assets/project-2.png" className="project-img" />
                    </div>
                </div>
            </div> */}
        </div>
     );
}
 
export default Experience;