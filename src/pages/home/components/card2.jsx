import React from 'react'
import './css/card.css'
const Card2 = ()=>{
    return(
        <div className="Card"> 
            <div className="card-title text-center">BACK END WEB <br /> DEVELOPMENT</div>
            <div className="card-divider"></div>
            <div className="card-details">
                I build backend services and APIs using <span className="highlight">NodeJS/PHP</span> to develop 
                a secured and reliable resource
            </div>
            <button className="btn-view-proj">View projects</button>
            <div className="tools">
                <div className=" tools-heading-text">TOOLS/TECHNOLOGIES</div>
                <div className="tool-list-box">
                    <ul className="tool-list">
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            Node Js, Express
                        </li>
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            PHP, PHP my admin
                        </li>
                        <li className="tool-list-item">
                            <i className="fa fa-chevron-circle-right list-icons"></i>
                            MySQL, MongoDB, Mongoose
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card2;