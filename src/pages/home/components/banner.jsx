import React from 'react'
import Header from './header';

import './css/banner.css'
const Banner = () => {
    return ( 
        <div className="banner1">
            <Header/>
            <div className="banner-grid row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid1">
                    <div className="small-colored">Change your view of Copy writing</div>
                    <div className="big-bold">Rank Your Buisness With Copy Writing</div>
                    <div className="small-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, et ratione?
                         Fuga minus perferendis aperiam possimus atque, ad mollitia iste
                    </div>
                    <div className="banner-btns">
                        <button className=" get-started-btn ">Get Started</button>
                        <button className="read-more">Read more</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bn1-grid2">
                    <img src="../../../assets/banner-image.png" alt="banner" className="banner1-img" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;