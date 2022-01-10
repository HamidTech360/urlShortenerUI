import React, {useState, useEffect} from 'react'
import {apiUrl} from '../../../../config'
import axios from 'axios'
import Joi from 'joi-browser'
import _ from 'lodash'
import { CircularProgress } from '@material-ui/core'


const EditPost = (props)=>{
    const postId = props.match.params.id
    const[errorMsg, setErrorMsg] = useState(null)
    const [showProgress, setShowProgress] = useState(false)
    const [successMsg, setSuccessMsg] = useState(null)
    const [data, setData] = useState({
        title:'',
        body:'',
        category:''
        
    })

    useEffect(()=>{
        window.scrollTo(0,0)
        
        console.log(postId);
        
        async function getPost (){
            try{
                const response = await axios.get(`${apiUrl}/upload/post/${postId}`)
                setData(response.data.data)
                
                console.log(response.data.data);
                
            }catch(ex){
                console.log(ex);
                
            }
        }

        getPost()
    },[])

    const validate = ()=>{
        const schema = {
            title:Joi.string().min(10).required(),
            body:Joi.string().min(10).required(),
            category:Joi.string().required()
        }
        const payload = _.pick(data, ['title', 'category', 'body'])
        return Joi.validate(payload, schema, {abortEarly:false})

    }
  

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        // console.log(data);
        
    }

    const handleSubmit = async ()=>{
      
        // console.log(data);
        
        
        const payload = _.pick(data, ['title','category', 'body'])
        console.log(payload);
        

        const {error} = validate()
        if(error) {
            setSuccessMsg(null)
            return setErrorMsg(error.details[0].message)
        }
        setShowProgress(true)
        try{
            const response = await axios.put(`${apiUrl}/upload/post/${postId}`, payload,{
                headers:{
                    'Authorization': localStorage.getItem('auth_token')
                }
            } )
            console.log(response.data);
            
            if(response.data.status==="success"){
                setErrorMsg(null)
                setSuccessMsg('Post Edited successfully')
                setShowProgress(false)
            }
            console.log(response.data);
            
        }catch(ex){
            console.log(ex.response?.data);
            setShowProgress(false)
            setErrorMsg(ex.response?.data)
        }
        
        
        

    }
    return(
        <div className="create-post">
        
            <div className="create-post-form">
                <div className="page-title">Edit Post</div>
                {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:''}
                {successMsg?<div className="alert alert-success text-center">{successMsg}</div>:''}
                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control create-new-input upload-inpt" 
                        placeholder="Post title"
                        name="title"
                        onChange={(e)=>handleChange(e)}
                        value={data.title}
                    />
                </div>
                <div className="form-group">
                   <select value={data.category} onChange={(e)=>handleChange(e)} name="category" id="" className="form-control upload-inpt">
                        <option value="">Select category</option>
                       <option value="copywritting">Copywritting</option>
                       <option value="Email marketing">Email Marketing</option>
                       <option value="Seo Optimization">Seo Optimization</option>
                       <option value="Affiliate marketing">Affiliate Marketing</option>
                   </select>
                </div>
         
             
                <div className="form-group">
                    <textarea 
                        className="form-control upload-inpt" 
                        rows="10" 
                        placeholder="Write something..."
                        name="body"
                        onChange={(e)=>handleChange(e)}
                        value={data.body}
                    ></textarea>
                </div>
               <div className="form-group">
                    {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:''}
                    {successMsg?<div className="alert alert-success text-center">{successMsg}</div>:''}
                    <button onClick={()=>handleSubmit()} className="btn-danger form-control"> {showProgress?<CircularProgress size={20}/>:'Edit post'} </button>
                </div>
            </div>
        </div>
    )
}
export default EditPost


 
