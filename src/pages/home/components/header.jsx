import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from './drawer'
import './css/header.css'
const Header = () => {
    return ( 
        <div className="header">
       
            <span className="app-name"> <span className="text-h">H</span>amid<span className="text-t">t</span>ech</span>
             <span className="pull-right hideOnDesktop"><Drawer/></span>
            <ul className="nav home-nav  justify-content-end pull-right float-right hideOnMobile">
                <Link to="/" className="nav-link" style={{color:'white',textDecoration:'none', fontSize:'12px'}}>
                    <li className="nav-item">Home</li>
                </Link>
                <Link to="/services" className="nav-link" style={{color:'white',textDecoration:'none', fontSize:'12px'}}>
                    <li className="nav-item"> Services</li>
                </Link>
                <Link to="/about" className="nav-link" style={{color:'white',textDecoration:'none', fontSize:'12px'}}> 
                    <li className="nav-item">About</li>
                </Link>

                <Link to="/skill" className="nav-link" style={{color:'white',textDecoration:'none', fontSize:'12px'}}> 
                    <li className="nav-item">Skill</li>
                </Link>
                
                <Link to="/portfolio" className="nav-link" style={{color:'white',textDecoration:'none', fontSize:'12px'}}> 
                    <li className="nav-item">Portfolio</li>
                </Link>
            </ul>
        </div>
     );
}
 
export default Header;