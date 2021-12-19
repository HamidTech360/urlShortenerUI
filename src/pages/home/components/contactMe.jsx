import React from 'react'
import { Fab } from '@material-ui/core'
import './css/contactMe.css'
export default function ContactMe() {
    return (
        <div className="contactMe">
            <div className="contactme-text text-center">
                <div className="banner2-medium">HAVE ANY QUERY?</div>
                <div className="banner2-bold">CONTACT ME</div>
                <div className="banner-2-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, 
                        vitae minima aliquid libero nesciunt ad a dicta quod fuga vel?
                </div>
            </div>
            <div className="form">
                <div className="form-group">
                    <input type="text" className="form-control contact-input" placeholder="Your name"  />
                </div>

                <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-control contact-input" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Your Subject" className="form-control contact-input" />
                </div>

                <div className="form-group">
                    <textarea cols="80" placeholder="Your Message" className="form-control contact-input" />
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-submit-msg form-control">Submit</button>
                </div>
            </div>

            <div className="footer text-center">
                <span className="fabs">
                    <Fab style={{height:'30px', color:'whitesmoke', width:'30px', backgroundColor:'#282853'}}><i className="fa fa-facebook"></i></Fab>
                </span>
                <span className="fabs">
                    <Fab style={{height:'30px', color:'whitesmoke', width:'30px', backgroundColor:'#282853'}}><i className="fa fa-whatsapp"></i></Fab>
                </span>
                <span className="fabs">
                    <Fab style={{height:'30px', color:'whitesmoke', width:'30px', backgroundColor:'#282853'}}><i className="fa fa-linkedin"></i></Fab>
                </span>
            </div>
        </div>
    )
}
