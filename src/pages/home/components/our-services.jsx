import React from 'react'
import Fade from 'react-reveal/Fade'
import './css/services.css'
const Services = ()=>{
    return(
       <Fade duration={1000} bottom>
            <div className="our-service text-center">
            <div className="colored-services-text">Services</div>
            <div className="my-service-text">My Services</div>
            <div className="service-details-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit neque velit perspiciatis labore sint possimus, laborum ea! Sit, doloribus perspiciatis.
            </div>
            <div className="colored-divider"></div>
        </div>
       </Fade>
    )
}

export default Services