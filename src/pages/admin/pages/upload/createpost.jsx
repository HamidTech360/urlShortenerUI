import React, {useState} from 'react'
import {apiUrl} from '../../../../config'
import axios from 'axios'
import Joi from 'joi-browser'
import _ from 'lodash'
import './css/createpost.css'
import { CircularProgress } from '@material-ui/core'

const CreatePost = ()=>{
    const[errorMsg, setErrorMsg] = useState(null)
    const[showProgress, setShowProgress] = useState(false)
    const [successMsg, setSuccessMsg] = useState(null)
    const [data, setdata] = useState({
        title:'',
        post:'',
        fileUrl:null,
        file:'',
        category:'',
        permitId:''
    })
    
    const validate = ()=>{
        const schema = {
            title:Joi.string().min(10).required(),
            post:Joi.string().min(10).required(),
            category:Joi.string().required()
        }
        const payload = _.pick(data, ['title', 'category', 'post'])
        return Joi.validate(payload, schema, {abortEarly:false})

    }
    const handleImgSelect = (e)=>{
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend= ()=>{
            const clone = {...data}
            clone['file']= file
            clone['fileUrl'] = reader.result
            setdata(clone)
        }
        reader.readAsDataURL(file)
        console.log(data);
        
    }

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setdata(clone)
        // console.log(data);
        
    }

    const handleSubmit = async ()=>{

        // if(data.permitId !=="124") return setErrorMsg('Incorrect permit Id supplied')
        console.log(data);
        
        let formData = new FormData()
        formData.append('file', data.fileUrl)
        formData.append('title', data.title)
        formData.append('category', data.category)
        formData.append('body', data.post)

        const {error} = validate()
        if(error) {
            setSuccessMsg(null)
            return setErrorMsg(error.details[0].message)
        }
        setShowProgress(true)
        try{
            const response = await axios.post(`${apiUrl}/upload/post`, formData, {
                headers:{
                    'Authorization':localStorage.getItem('auth_token')
                }
            })
            if(response.data.status==="success"){
                setErrorMsg(null)
                setSuccessMsg('Post uploaded successfully')
                setShowProgress(false)
                clearField()
            }
            console.log(response.data);
            
        }catch(ex){
            console.log(ex.response?.data);
            setErrorMsg('Something went wrong. Please make sure to choose an image with your post')
            setShowProgress(false)
            // setErrorMsg(ex.response?.data)
        }
        
        
        

    }

    const clearField= ()=>{
        const clone = {...data}
        clone.category = ''
        clone.title = ''
        clone.post = ''
        setdata(clone)
    }
    return(
        <div className="create-post">
        
            <div className="create-post-form">
                <div className="page-title">Upload Post</div>
                {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:''}
                {successMsg?<div className="alert alert-success text-center">{successMsg}</div>:''}
                {data.file?<div className="img-prev-box">
                    <img src={data.fileUrl} alt="preview" className="img-preview"/>
                </div>:''}
                <div className="form-group">
                    <input onChange={(e)=>handleImgSelect(e)} type="file" name="" className="form-control"/>
                </div>
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
                   <select onChange={(e)=>handleChange(e)} name="category" id="" className="form-control upload-inpt">
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
                        name="post"
                        onChange={(e)=>handleChange(e)}
                        value={data.post}
                    ></textarea>
                </div>
               <div className="form-group">
                    {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:''}
                    {successMsg?<div className="alert alert-success text-center">{successMsg}</div>:''}
                    <button onClick={()=>handleSubmit()} className="btn-danger form-control"> {showProgress?<CircularProgress size={20}/>:'upload post'} </button>
                </div>
            </div>
        </div>
    )
}
export default CreatePost

 
