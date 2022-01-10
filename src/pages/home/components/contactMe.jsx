import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {apiUrl} from '../../../config.json'
import { Fab, CircularProgress } from '@material-ui/core'
import './css/contactMe.css'
export default function ContactMe() {
    const [showProgress, setShowProgress] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [data, setData] = useState({
        name:'',
        email:'',
        mailBody:''
    })
    
   const handleChange = (e)=>{
       const clone = {...data}
       clone[e.currentTarget.name] = e.currentTarget.value
       setData(clone)
       console.log(data);
       
   }

   const handleSubmit = async ()=>{
        setShowProgress(true)
        try{
            const response = await axios.post(`${apiUrl}/mail`, data)
            console.log(response.data)
            if(response.data.status==="success"){
                setSuccessMsg('Your message has been delivered. Thank you for contacting us')
                setErrorMsg(null)
                setShowProgress(false)
                clearField()
            }
        }catch(ex){
            setErrorMsg(ex.response?.data)
            setSuccessMsg(null)
            setShowProgress(false)
        }
   }


   const clearField = ()=>{
       const clone = {...data}
       clone.name=''
       clone.email=''
       clone.mailBody=''
       setData(clone)
   }
    return (
        <div className="contactMe" id="contactMe">
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
                    <input 
                        type="text" 
                        className="form-control contact-input" 
                        placeholder="Your name" 
                        name="name"
                        onChange={(e)=>handleChange(e)}
                        value={data.name}
                     />
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="form-control contact-input"
                        name="email"
                        onChange={(e)=>handleChange(e)}
                        value={data.email} 
                    />
                </div>

                <div className="form-group">
                    <textarea 
                        rows="10" 
                        placeholder="Your Message" 
                        className="form-control contact-input"
                        name="mailBody"
                        onChange={(e)=>handleChange(e)}
                        value={data.mailBody}
                     />
                </div>
                {successMsg?<div className="alert alert-success"> {successMsg} </div>:''}
                {errorMsg?<div className="alert alert-danger"> {errorMsg} </div>:''}
                <div className="form-group">
                    <button onClick={()=>handleSubmit()} className="btn btn-lg btn-submit-msg form-control"> {showProgress?<CircularProgress/>:'Send Message'} </button>
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
