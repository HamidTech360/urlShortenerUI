import React,{useState, useEffect} from 'react'
import {apiUrl} from '../../../../config.json'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Divider, CircularProgress } from '@material-ui/core';
import {Backdrop}  from '@material-ui/core'
 import './css/dashboard.css'

export default function Dashboard() {


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
    const [open, setOpen] = useState(true)


    const handleClose=()=>{
        setOpen(false)
    }

    const handleToggle= ()=>{
        setOpen(!open)
    }

    useEffect(()=>{
        async function getPosts(){
            const response =  await axios.get(`${apiUrl}/upload/post/`)
            console.log(response.data.data);
            
            setData(response.data.data)
            setImg_dir(response.data.image_dir)
            
            
        }
        getPosts()
    },[])

    const deletePost = async (item)=>{
        handleToggle()
        console.log(item);
        let confirmAction = window.confirm('Are you sure you want to delete this post')
        if(!confirmAction) return
        
        
        try{
            const response= await axios.delete(`${apiUrl}/upload/post/${item._id}`, {
                headers:{
                    'Authorization':localStorage.getItem('auth_token')
                }
            })
            console.log(response.data);
            const clone = [...data]
            if(response.data.status==="success"){
                const filtered = data.filter(el=>el._id!==item._id)
                setData(filtered)
            }

            
            // setData(refetch.data.data)
            
        }catch(ex){
            console.log(ex.response?.data);
            
        }
    }


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
       
            <Backdrop
                open={true}
                onClick={handleClose}
            >
                <CircularProgress/>
            </Backdrop>


        <div className="proj-cards row">
            {(filtered.length===0?data:filtered).map((item, i)=>
                <div key={i} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 proj-card">
                <img src={`${item.filename}`} className="proj-img" alt="display"  />
                <div className="proj-card-texts">
                    <div className="textIcons">
                        <span className="text-icon">
                            <i className="fa fa-proj-card fa-fa-list-alt"></i>  <span className="admin">{item.category}</span>
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
                <Link to={`/admin/edit/${item._id}`}><button className="btn btn-edit btn-dash-action">Edit</button></Link> 
                <button className="btn btn-delete btn-dash-action  pull-right" onClick={()=>deletePost(item)}>
                    delete
                </button>
            </div>
            )}

        </div>

        </>
          
    )
}                             