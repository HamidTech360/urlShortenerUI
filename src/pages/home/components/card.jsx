import React from 'react'
import './css/card.css'
const Card = ()=>{
    return(
        <div className="Card"> 
            <div className="card-title text-center">FRONT END WEB <br /> DEVELOPMENT</div>
            <div className="card-divider"></div>
            <div className="card-details">
                I use Javascript and javascript libraries ( <span className="highlight">React, JQuery</span> )
                 to build multifaceted designs across  wide range software platforms
            </div>
            <button className="btn-view-proj">View projects</button>
            <div className="tools">
                <div className=" tools-heading-text">TOOLS/TECHNOLOGIES</div>
                <div className="tool-list-box">
                    <ul className="tool-list">
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            HTML, CSS, Javascript 
                        </li>
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            React, JQuery 
                        </li>
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            Bootstrap, MaterialUI, Tailwind and more awesome CSS libraries
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;