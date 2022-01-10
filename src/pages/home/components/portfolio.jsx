import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {apiUrl} from '../../../config.json'
import axios from 'axios'
// import { Fab } from '@material-ui/core';
import './css/portfolio.css'

export default function Portfolio() {
    const [categories, setCategories] =useState(
        [
            { id:0, name:'All',active:true, category:'all'},
            {id:1,name:'copywritting',active:false, category:'copywritting' },
            { id:2, name:'Email Marketing',active:false, category:'Email marketing' },
            { id:3, name:'SEO optimization',active:false, category:'Seo Optimization'},
            { id:3, name:'Affiliate Marketing',active:false, category:'Affiliate marketing'}
        ] 
    )

    const [data, setData] = useState([])
    const [img_dir, setImg_dir] = useState('')

    useEffect(()=>{
        async function getPosts(){
            const response =  await axios.get(`${apiUrl}/upload/post/`)
            
            setData(response.data.data)
            setImg_dir(response.data.image_dir)
            
            
        }
        getPosts()
    },[])


    const [filtered, setFiltered] = useState([])
    const handleSelection = (item, i)=>{
        const clone = [...categories]
        clone.map(el=>el.active=false)
        clone[i].active = true
        setCategories(clone)

        const currentActive = categories.find(e=>e.active)
        const acitveCateg = currentActive.category
        const filter = acitveCateg? data.filter(el=>el.category===acitveCateg):data;

        setFiltered(filter)
        console.log(currentActive.category);
    }
   
    return (
        <>
        <div className="portfolio" id="portfolio">
            <div className="service-bold text-center">Portfolio Showcase</div>
            <div className="portfolio-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat placeat voluptatum enim assumenda 
                laborum nostrum tempora laboriosam impedit delectus!
            </div>
            <div className="text-center"><button className="btn-divider"></button></div>
            
            <div className="categ-tab  text-cente">
            
                {categories.map((item, i)=>
                    <button 
                        key={i} 
                        className={`btn-categs ${item.active?'active':''} `}
                        onClick={()=>handleSelection(item, i)}
                    >
                        {item.name}
                    </button>
                )}

            </div>
        </div>

        <div className="proj-cards row">
            {(filtered.length===0?data:filtered).map((item, i)=>
            <div key={i} className="col-lg-3 col-md-3 col-sm-12 col-xs-12 proj-card">
               <Link style={{textDecoration:'none'}} to={`/post/${item._id}`}>
               <img src={`${img_dir}${item.filename}`} className="proj-img" alt="display"  />
                <div className="proj-card-texts">
                    <div className="textIcons">
                        <span className="text-icon">
                            <i className="fa fa-proj-card fa-list-alt"></i> <span className="admin">{item.category}</span>
                        </span> 
                        <span className="text-icon">
                            <i className="fa fa-proj-card fa-calendar"></i> {item.createdAt}
                        </span>
                    </div>
                    <div className="card-title">
                        {item.title}
                    </div>  
                    <div className="card-read-more">
                        Read more <i className="fa fa-arrow-right"></i>
                    </div>
                </div>
               </Link>
            </div>
            )}

        </div>

        </>
          
    )
}                             