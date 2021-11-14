import React from 'react'
import { Fade } from 'react-reveal';
import './css/aboutme.css'
const AboutMe = () => {
    return ( 
       <Fade duration={1000} bottom>
            <div className="our-service text-center">
            <div className="my-service-text">About Me</div>
             <div className="colored-divider"></div>
             <div className="img-box">
                <img src="../../../assets/meda5.PNG" alt="my image" className="my-img-2" />
            </div>
            <div className="service-details-text">
                I am a software developer experienced in designing multifaceted technical solutions across a wide range software. 
                I have an excellent background as a web developer along with my academic education (Bsc. Computer science and engineering (OAU, Ile-Ife))
            </div>
           
           
        </div>

       </Fade>
     );
}
 
export default AboutMe;