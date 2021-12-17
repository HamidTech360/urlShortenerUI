import React from 'react'
import Card from './card';
import './css/card.css'

const Cards = () => {
    return ( 
        <div className="cards row">
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                    img="copywriting.png" 
                    header="Copy Writing" 
                    details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                            reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                 />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                        img="seo.png" 
                        header="SEO OptimiZation" 
                        details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                                reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                    />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 card-box">
                <Card 
                        img="email-mktng.png" 
                        header="Email Marketing" 
                        details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab iusto
                                reiciendis possimus debitis modi sit omnis facilis iste praesentium."
                    />
            </div>
        </div>
     );
}
 
export default Cards;