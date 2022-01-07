import React,{useState} from 'react'
import { Divider } from '@material-ui/core';
 import './css/dashboard.css'

export default function Dashboard() {
    const [categories, setCategories] =useState(
        [
            { id:0, name:'All',active:true, category:'all'},
            {id:1,name:'CopyWritting',active:false, category:'cr' },
            { id:2, name:'Email Marketing',active:false, category:'em' },
            { id:3, name:'SEO optimization',active:false, category:'so'}
        ] 
    )

    const [data, setData] = useState(
        [
            {
                author:'CR',
                date:'23rd December, 2022',
                title:'Ten secrets you wanna know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos obcaecati perferendis voluptatum debitis?',
                image:'images.jpg',
                category:'cr'
            },
            {
                author:'EM',
                date:'23rd January, 2022',
                title:'Ten secrets you wanna know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos obcaecati perferendis voluptatum debitis?',
                image:'icopy.jpg',
                category:'em'
            },
            {
                author:'SEO',
                date:'23rd December, 2022',
                title:'Ten secrets you wanna know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos obcaecati perferendis voluptatum debitis?',
                image:'images.jpg',
                category:'so'
            },
            {
                author:'CR',
                date:'23rd December, 2022',
                title:'Ten secrets you wanna know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos obcaecati perferendis voluptatum debitis?',
                image:'images.jpg',
                category:'cr'
            },
        ]
    
    )
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
        
            
            {/* <div className="page-title-dash">Your posts</div> */}
            <div className="categ-tab-dash ">
            
                {categories.map((item, i)=>
                    <button 
                        key={i} 
                        className={`btn-categs ${item.active?'active':''}`}
                        onClick={()=>handleSelection(item, i)}
                    >
                        {item.name}
                    </button>
                )}
                <Divider/>
            </div>
       
        
        <div className="proj-cards row">
            {(filtered.length===0?data:filtered).map((item, i)=>
                <div key={i} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 proj-card">
                <img src={`../../../assets/${item.image}`} className="proj-img" alt="display"  />
                <div className="proj-card-texts">
                    <div className="textIcons">
                        <span className="text-icon">
                            <i className="fa fa-proj-card fa-user"></i> By <span className="admin">{item.author}</span>
                        </span> 
                        <span className="text-icon">
                            <i className="fa fa-proj-card fa-calendar"></i> {item.date}
                        </span>
                    </div>
                    <div className="card-title">
                        {item.title}
                    </div>  
                    <div className="card-read-more">
                        Read more <i className="fa fa-arrow-right"></i>
                    </div>
                </div> 
                <button className="btn btn-edit btn-dash-action">Edit</button> 
                <button className="btn btn-delete btn-dash-action  pull-right">Delete</button>
            </div>
            )}

        </div>

        </>
          
    )
}                             