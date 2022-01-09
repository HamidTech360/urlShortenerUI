import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {apiUrl} from '../../../../config'
import './css/setting.css'
import { CircularProgress } from '@material-ui/core';
import _ from 'lodash'
const Settings = ()=>{
    const token = localStorage.getItem('auth_token')
    const [err_msg, setErr_msg]= useState(null)
    const [success_msg, setSuccess_msg]= useState(null)
    const [showProgress, setShowProgress]= useState(false)
    const [data, setData] = useState({
        email:'',
        password:''
    })

    useEffect(()=>{
        async function getData (){
            try{
                const response = await axios.get(`${apiUrl}/admin/create_admin`,{
                    headers:{
                        'Authorization':token
                    }
                })
                 console.log(response.data);
                 setData(response.data.data)
                // if(response.data.status==="success"){
                //     localStorage.setItem('auth_token', response.data.token)
                //     history.push('/admin')
                // }
            }catch(ex){
                setErr_msg(ex.response?.data)
                console.log(ex.response?.data);
                setShowProgress(false)
    
            }
        }

        getData()
    },[])

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        // console.log(data);
        
    }
    const handleSubmit = async ()=>{
        setShowProgress(true)
        console.log(data);
        
        try{
            const response = await axios.put(`${apiUrl}/admin/create_admin`,{email:data.email, password:data.password},{
                headers:{
                    'Authorization':token
                }
            })
            console.log(response.data);
            if(response.data.status==="success") {
                setSuccess_msg('Record updated successfully')
                setErr_msg(null)
            }
            setShowProgress(false)
        }catch(ex){
            console.log(ex.response?.data);
            setSuccess_msg(null)
            setErr_msg(ex.response?.data)
           setShowProgress(false) 
        }
        
        
    }
    return(
        <div className="settings">

            <div className="setting-form-box">
                <div className="setting-header">
                    Settings
                </div>
                {err_msg?<div className="alert alert-danger text-center">{err_msg}</div>:''}
                {success_msg?<div className="alert alert-success text-center"> {success_msg} </div>:''}
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control setting-inpt" 
                        placeholder="Gmail"
                        name="email"
                        value={data.email}
                        onChange={(e)=>handleChange(e)}
                     />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control setting-inpt" 
                        placeholder=" Password"
                        name="password"
                        value={data.password}
                        onChange={(e)=>handleChange(e)}
                     />
                </div>
                <div className="form-group">
                   <button className="btn btn-danger btn-save-changes " onClick={()=>handleSubmit()}>
                       {showProgress?<CircularProgress size={20}/>:'Edit details'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings;