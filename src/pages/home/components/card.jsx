import React from 'react'
import './css/card.css'

const Card = ({img, header, details}) => {
    return ( 
        <div className="Card text-center">
            <img className="card-imgs" src={`../../../assets/${img}`} alt="cardimg"  />
            <div className="card-heading">{header}</div>
            <div className="card-details">{details}</div>
             <button className="card-btn">Get Started</button>
        </div>
     );
}
 
export default Card;