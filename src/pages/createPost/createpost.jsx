import React, {useState} from 'react'
import Joi from 'joi-browser'
import _ from 'lodash'
import Header from '../home/components/header'
import './css/createpost.css'

const CreatePost = ()=>{
    const[errorMsg, setErrorMsg] = useState(null)
    // const [successMsg, setSuccessMsg] = useState(false)
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
        // console.log(data);
        
    }

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setdata(clone)
        // console.log(data);
        
    }

    const handleSubmit = async ()=>{
        if(data.permitId !=="124") return setErrorMsg('Incorrect permit Id supplied')
        console.log(data);
        
        let formData = new FormData()
        formData.append('file', data.file)
        formData.append('title', data.title)
        formData.append('category', data.category)
        formData.append('post', data.post)

        const {error} = validate()
        if(error){
            return setErrorMsg(error.details[0].message)
        }
        console.log('error free');
        
        

    }
    return(
        <div className="create-post">
            <Header/>
            <div className="create-post-form">
                {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:''}
                <div className="form-group">
                    <input onChange={(e)=>handleImgSelect(e)} type="file" name="" className="form-control"/>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control create-new-input" 
                        placeholder="Post title"
                        name="title"
                        onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div className="form-group">
                   <select onChange={(e)=>handleChange(e)} name="category" id="" className="form-control">
                        <option value="">Select category</option>
                       <option value="copywritting">Copywritting</option>
                       <option value="Email marketing">Email Marketing</option>
                       <option value="Seo Optimization">Seo Optimization</option>
                       <option value="Affiliate marketing">Affiliate Marketing</option>
                   </select>
                </div>
         
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Permit Id" 
                        className="form-control" 
                        name="permitId"
                        onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        rows="10" 
                        placeholder="Write something..."
                        name="post"
                        onChange={(e)=>handleChange(e)}
                    ></textarea>
                </div>
               <div className="form-group">
                    <button onClick={()=>handleSubmit()} className="btn-danger form-control">upload post</button>
                </div>
            </div>
        </div>
    )
}
export default CreatePost

 
