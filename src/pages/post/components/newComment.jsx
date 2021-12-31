import React from 'react'
import '../css/new-comment.css'

const NewComment = ()=>{
    return(
        <div className="new-comment">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="email"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" rows="10" name="" id=""  placeholder="write your comment"></textarea>
            </div>
            <div className="foem-group">
                <button className="btn btn-danger form-control btn-submit-comment">Submit comment</button>
            </div>
        </div>
    )
}
export default NewComment