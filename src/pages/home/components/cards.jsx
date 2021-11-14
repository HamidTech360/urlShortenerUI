import React from 'react'
import Card from './card';
import Card2 from './card2';
import Fade from 'react-reveal'

import './css/cards.css'
const Cards = () => {
    const  frontendskills =[
        ['HTML','CSS', 'Javascript'],
        ['React', 'JQuery'],
        ['Bootstrap', 'MaterialUI', 'Tailwind and more awesome design dependencies']
    ]
    return ( 
        <div className="cards">
            <div className="row card-grid">
               <Fade duration={1000} bottom>
                    <div className="col-lg-4 col-md-4 col-sm-12-col-xs-12 card-col">
                            <Card skills={frontendskills} />
                    </div>
               </Fade>
               <Fade duration={1000} bottom>
                <div className="col-lg-4 col-md-4 col-sm-12-col-xs-12 card-col">
                        <Card2/>
                    </div>
               </Fade>
               
            </div>
        </div>
     );
}
 
export default Cards;