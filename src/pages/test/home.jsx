import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import {apiUrl} from '../../config.json'
import './css/login.css'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'



const Login = ()=>{
    const history = useHistory()
    const [err_msg, setErr_msg]= useState(null)
    const [response, setResponse]= useState(null)
    const [showProgress, setShowProgress]= useState(false)
    const [data, setData] = useState({
        originalUrl:''
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
            const response = await axios.post(`${apiUrl}/encode`, data)
             console.log(response.data);
            setResponse(response.data.data)
            setErr_msg(null)
            setShowProgress(false)
        }catch(ex){
            setShowProgress(false)
           console.log(ex.response?.data);
            setErr_msg(ex.response?.data)
        }
        
    }
    return(
        <div className="login">
            <div className="login-box">
               
                <div className="setting-header  text-center" id="login-header">
                    URL SHORTENER
                </div>
                {err_msg?<div className="alert alert-danger">{err_msg}</div>:''}
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control login-inpt" 
                        placeholder="originalUrl"
                        name="originalUrl"
                        onChange={(e)=>handleChange(e)}
                        // value=""
                     />
                </div>
                <div className="form-group" style={{marginTop:'40px'}}>
                   {response? <div>
                    <a href={`${response.shortUrl}`}>{response.shortUrl}</a>
                    <div>Number of times visited: {response.clicks}</div>
                   </div>:''}
                </div>
                <div className="form-group">
                   <button onClick={()=>handleSubmit()} className="btn btn-success btn-save-changes form-control ">
                       {showProgress?<CircularProgress size={20}/>:'Shrink url'}
                    </button>
                  
                </div>
            </div>
        </div>
    )
}


export default Login;