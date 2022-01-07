import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import {apiUrl} from '../../config.json'
import { useHistory } from 'react-router'
import { Route} from 'react-router-dom'
import { Chip, Avatar } from '@material-ui/core'
import Drawer from './pages/components/drawer'
import SideNav from './pages/components/sidenav'
import CreatePost from './pages/upload/createpost'
import Dashboard from './pages/dashboard/dashbord'
import Settings from './pages/settings/settings'


import './admin.css'
const Admin = ()=>{
    const history = useHistory()
    // const login_token = localStorage.getItem('login_token')
    // const [userData, setUserData] = useState({})
    // useEffect(()=>{
    //     window.scrollTo(0,0)
    //     if(!login_token){
    //         history.push('/login')
           
    //     }else{
    //         // alert('you are authorized')
    //         try{
    //             const login_token = localStorage.getItem('login_token')
    //             async function getUserData (){
    //                 const response = await axios.get(`${apiUrl}/user/dashboard`, {headers:
    //                     {'Authorization':`Bearer ${login_token}`}
    //                 })
    //                 console.log(response.data);
    //                 setUserData(response.data.data)
    //             }
    //             getUserData()
                
    //        }catch(ex){
    //            console.log(ex.response?.data);
    //            alert('An error occured, please check your internet connection')
    //        }
    //     }
    // },[history, login_token])
    const NavOptions = [
        {
            id:0,
            name:'Dashboard',
            link:'/admin',
            icon:'fa-user',
            isActive:true
        },
        {
            id:1,
            name:'Upload',
            link:'/admin/upload',
            icon:'fa-upload',
            isActive:false
        },
        {
            id:2,
            name:'Settings',
            link:'/admin/settings',
            icon:'fa-cog',
            isActive:false
        }
    ]

    return(

    <div className="user">
        <div className="dashboard-sidenav   hideOnMobile" style={{backgroundColor:'black'}}>
            <SideNav NavOptions={NavOptions} />
        </div>
        <div className="dashboard-contents" id="dashboard-contents" style={{padding:'0 !important'}}>
                <div className="dashboard-pg-header">
                    
                    <span className="hideOnDesktop">
                        <Drawer NavOptions={NavOptions}  />
                    </span>
                    {/* <span className="pull-right justify-content-end icons">
                        <i className="fa fa-bell-o" style={{marginRight:'10px'}}></i>
                        <Chip
                                style={{ backgroundColor:'#df8919', fontSize:'10px'}}
                                avatar={<Avatar alt="Natacha" src={''} style={{color:'#df8919'}} />}
                                label={''}
                                variant="outlined"
                            />
                         
                        </span> */}
                </div>
                    <div className="dashboard-main">                 
                        <Route path="/admin/settings"  component={Settings} />
                        <Route path="/admin/upload"  component={CreatePost} />
                        <Route path="/admin" exact component={Dashboard} />
                    </div>       
        </div>
    </div>
       
    )
}
export default Admin