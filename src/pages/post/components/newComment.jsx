import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from '../../../config.json'
import Comment from './comments'
import '../css/new-comment.css'

const NewComment = ({postId})=>{
    const [allComments, setAllComments]= useState([])
    const [filteredComments, setFilteredComments]= useState([])
    const [data, setData] = useState({
        name:'',
        email:'',
        body:'',
        postId
    })
    useEffect(()=>{
        console.log(postId)
        async function getComments (){
            const response = await axios.get(`${apiUrl}/comment`)
            console.log(response.data.data)
            setAllComments(response.data.data)

            const filtered = response.data.data.filter(item=>item.postId==postId)
            setFilteredComments(filtered)
            console.log(filtered);
            
        }
        getComments()
    },[])

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        // console.log(data)
    }

    const handleSubmit = async ()=>{
        console.log(data);
        clearField()
        
        try{
            const response = await axios.post(`${apiUrl}/comment`, data)
            console.log(response.data);
            if(response.data.status==="success"){
                const clone=[...filteredComments]
                clone.push({
                    name:data.name,
                    email:data.email,
                    body:data.body,
                    createdAt:'Today'
                })
                setFilteredComments(clone)
                // console.log(clone);
                
            }
            // setAllComments(response.data.data)
            clearField()
            
        }catch(ex){
            console.log(ex.response?.data)
        }
    }

    const clearField = (e)=>{
        const clone = {...data}
        clone.name = ''
        clone.email = ''
        clone.body = ''
        setData(clone)
    }
    return(
        <>
            <div className="comment-title">{filteredComments.length} Comments</div>
            {filteredComments.map((item, i)=>
            <Comment 
                key={i}
                name={item.name}
                body={item.body}
                date={item.createdAt} 
            />
            )}
            {/* <Comment allComments={allComments} /> */}
            <div className="new-comment">
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control comment-inpt" 
                    placeholder="Name"
                    onChange={(e)=>handleChange(e)}
                    value={data.name}
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    name="email" 
                    className="form-control comment-inpt" 
                    placeholder="email"
                    onChange={(e)=>handleChange(e)}
                    value={data.email}
                />
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control comment-inpt" 
                    rows="10" 
                    name="body" 
                    id=""  
                    placeholder="write your comment"
                    onChange={(e)=>handleChange(e)}
                    value={data.body}

                >
                    
                </textarea>
            </div>
            <div className="foem-group">
                <button className="btn btn-danger form-control btn-submit-comment" onClick={()=>handleSubmit()}>Submit comment</button>
            </div>
        </div>
        </>
    )
}
export default NewComment