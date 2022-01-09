import React from 'react'
import '../css/comment.css'

const Comment =({name, date, body})=>{
    return (
        <div className="comment">
            
            <div className="comment-tab">
                <div className="comment-name">{name}</div>
                <div className="comment-date">{date}</div>
                <div className="comment-text"> {body} </div>
            </div>
        </div>
    )
}

export default Comment