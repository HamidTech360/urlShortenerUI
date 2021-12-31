import React,{useState} from 'react'
// import { Fab } from '@material-ui/core';
import './css/portfolio.css'

export default function Portfolio() {
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
        <div className="portfolio" id="portfolio">
            <div className="service-bold text-center">Portfolio Showcase</div>
            <div className="portfolio-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat placeat voluptatum enim assumenda 
                laborum nostrum tempora laboriosam impedit delectus!
            </div>
            <div className="text-center"><button className="btn-divider"></button></div>
            
            <div className="categ-tab text-center">
            
                {categories.map((item, i)=>
                    <button 
                        key={i} 
                        className={`btn-categs ${item.active?'active':''}`}
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
                <img src={`../../../assets/${item.image}`} className="proj-img" alt="display photo"  />
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
            </div>
            )}

        </div>

        </>
          
    )
}                             