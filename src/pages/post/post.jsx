import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from '../../config'
import Header from '../home/components/header'
import Comment from './components/comments'
import NewComment from './components/newComment'


import './css/post.css'

const Post = (props)=>{
    const [data, setData] = useState([])
    const [img_dir, setImg_dir] = useState('')
    useEffect(()=>{
        window.scrollTo(0,0)
        const postId = props.match.params.id
        console.log(postId);
        
        async function getPost (){
            try{
                const response = await axios.get(`${apiUrl}/upload/post/${postId}`)
                setData(response.data.data)
                setImg_dir(response.data.image_dir)
                console.log(response.data.data);
                
            }catch(ex){
                console.log(ex);
                
            }
        }

        getPost()
    },[])
    return(
        <div className="post-page">
            <Header/>
            <div className="post">
            
        
            
            <div className="image-box" style={{
                backgroundImage:`url(../../../assets/placeholder2.jpg)`,
                 backgroundSize:'cover',
                 backgroundRepeat:'no-repeat',
                 backgroundPosition:'center'
                 }}>
                 
            </div>
            <div className="post-title ">
                <div className="text-cent">
                    {data.title}
                </div>
                <div className="sub-title">
                    <span className="tab-link"> Back to Home </span>
                <span className="post-date">Posted on {data.createdAt} </span>
                </div>
            </div>
            <div className="post-text">
                {data.body}
            </div>
            
           
            <NewComment postId={props.match.params.id} />
        </div>
        </div>
    )
}

export default Post 