import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import List from '@material-ui/core/List';

import 'bootstrap/dist/css/bootstrap.css'
import './css/sidebar.css'


const useStyles = makeStyles({
  paper:{
    background:'rgb(25, 25, 44)',
    paddingTop:'30px',
    width:'240px',
    border:'1px solid rgba(255, 255, 255, 0.21)'
   
  }
})

const SideNav = ({NavOptions})=>{
    const styles = useStyles()

    // const [NavOptions, setNavOptions] =useState(
   
    // ) 

    // const handleNavigation = (index)=>{
    //     const options = [...NavOptions]
    //      options.map(el=>el.isActive=false)
    //     const selectedItem = NavOptions[index]
    //     selectedItem.isActive= true
    //     setNavOptions(options)

    // }
    return(

        
      
        <Drawer
            sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
            classes={{paper:styles.paper}}
        >
                <img src="../../../../assets/logo3.png" alt="dashboard logo"  className="dashboard-logo float-left" />
                <Toolbar />
               
                <List>
                {NavOptions.map((item, index) => (
                   <Link to ={item.link} style={{textDecoration:'none'}} key={index}>
                         <div className="list-item dash-list-item" key={index} style={{ paddingLeft:'50px'}}>
                            <span className="list-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                            <span className="list-item-text">{item.name}</span>
                        </div>
                   </Link>
                ))}
                </List>
                <div className="fixed-logout">Logout</div>
            </Drawer>
        
    )
}

export default SideNav