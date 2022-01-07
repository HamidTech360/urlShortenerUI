import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import {apiUrl} from '../../config.json'
import './css/login.css'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';




const Login = ()=>{
    const history = useHistory()
    const [err_msg, setErr_msg]= useState(null)
    const [showProgress, setShowProgress]= useState(false)
    const [data, setData] = useState({
        email:'',
        password:''
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
            const response = await axios.post(`${apiUrl}/admin/auth_admin`, data)
             console.log(response.data);
            if(response.data.status==="success"){
                localStorage.setItem('auth_token', response.data.token)
                history.push('/admin')
            }
        }catch(ex){
            setErr_msg(ex.response?.data)
            console.log(ex.response?.data);
            setShowProgress(false)

        }
        
    }
    return(
        <div className="login">
            <div className="login-box">
               
                <div className="setting-header  text-center" id="login-header">
                    Admin Login
                </div>
                {err_msg?<div className="alert alert-danger">{err_msg}</div>:''}
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control login-inpt" 
                        placeholder="Email"
                        name="email"
                        onChange={(e)=>handleChange(e)}
                        // value=""
                     />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control login-inpt" 
                        placeholder="Password"
                        name="password"
                        onChange={(e)=>handleChange(e)}
                        // value=""
                     />
                </div>
                <div className="form-group">
                   <button onClick={()=>handleSubmit()} className="btn btn-login btn-save-changes form-control ">
                       {showProgress?<CircularProgress size={20}/>:'Sign In'}
                    </button>
                   <div className="back-to-home">
                      <Link to="/" style={{color:'rgb(187, 44, 44)'}}> Back to home</Link>
                   </div>
                </div>
            </div>
        </div>
    )
}


export default Login;