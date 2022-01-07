import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl} from '../../config'
import Header from '../home/components/header'
import Comment from './components/comments'
import NewComment from './components/newComment'


import './css/post.css'

const Post = (props)=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        window.scrollTo(0,0)
        const postId = props.match.params.id
        console.log(postId);
        
        async function getPost (){
            try{
                const response = await axios.get(`${apiUrl}/upload/post/${postId}`)
                console.log(response.data);
                
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
                backgroundImage:`url('../../../assets/images.jpg')`,
                 backgroundSize:'cover',
                 backgroundRepeat:'no-repeat',
                //  backgroundPosition:'center'
                 }}>
                 
            </div>
            <div className="post-title ">
                <div className="text-cent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit 
                </div>
                <div className="sub-title">
                    <span className="tab-link"> Back to Home >></span>
                    <span className="post-date">Posted on 25th, 2022</span>
                </div>
            </div>
            <div className="post-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa dolore quidem dolorum corrupti cum earum possimus. Placeat obcaecati, fugit, similique cum cumque eius quae dignissimos tempore quo exercitationem ut aperiam nobis ipsa quasi sed? Ipsum id consequuntur voluptatibus ipsa dicta, voluptas dolore eaque! Earum iusto, excepturi repellat ut ducimus recusandae, in veniam minima animi culpa quo quasi quisquam eius, aut iure expedita quos nemo velit perspiciatis quam ipsum rem. Optio harum officiis atque modi at quod quas, mollitia doloribus, autem, quae similique aperiam tempore molestias fugit veritatis placeat illo nam. Id, qui! Suscipit enim eaque voluptate quam. Labore, accusantium ipsum quidem possimus fuga, aliquam natus fugiat 
                similique porro consequatur illum, voluptatem eos numquam aspernatur voluptates quas animi vero eum.


                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur maxime error praesentium vero. Debitis, aut! Nostrum atque dignissimos incidunt aspernatur assumenda totam iusto nihil maxime rerum consequuntur inventore aliquam officiis adipisci magni, optio possimus soluta perspiciatis facilis! Similique, unde repellat recusandae pariatur optio expedita rem magnam voluptatem cum, consequatur saepe veritatis, temporibus facilis error dolore omnis. Ipsam atque unde est veniam recusandae sint quibusdam voluptate suscipit asperiores non, fugiat praesentium tempore explicabo quas voluptas maiores aliquid placeat totam quisquam animi adipisci sapiente repudiandae. Delectus numquam dicta possimus omnis autem ipsa quos voluptatem repellat, corrupti suscipit a asperiores necessitatibus, culpa iste maiores blanditiis voluptate officiis fugit quaerat quidem consectetur cupiditate dolorem assumenda fugiat. Atque dignissimos animi dolor nisi quibusdam maxime nemo corrupti. Possimus nemo ducimus recusandae natus sapiente adipisci, deserunt beatae quae tempore minima ex fugiat aliquam, quibusdam totam.
                 Aspernatur, beatae adipisci! Maxime odit facilis sit quisquam expedita doloremque eaque totam?
            </div>
            <div className="comment-title">5 Comments</div>
            <Comment/>
            <Comment/>
            <NewComment/>
        </div>
        </div>
    )
}

export default Post 