
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { Box } from '@material-ui/core'

import './css/drawer.css'
import 'bootstrap/dist/css/bootstrap.css'




const useStyles = makeStyles({
  paper:{
    paddingTop:'30px',
    backgroundColor:'#1f2235'
 
  }
})

const Drawer = ()=>{

    
    const [NavOptions, setNavOptions] =useState(
        [
            {
                id:0,
                name:'Home',
                link:'/',
                icon:'fa-home',
                isActive:true
            },
            {
                id:1,
                name:'Portfolio',
                link:'#proj-cards',
                icon:'fa-users',
                isActive:false
            },
            {
                id:2,
                name:'Jobs',
                link:'/',
                icon:'fa-balance-scale',
                isActive:false
            },
            {
                id:3,
                name:'Tasks',
                link:'/',
                icon:'fa-user-md',
                isActive:false
            }
        ]
    ) 
     
    const handleNavigation = (index)=>{
        const options = [...NavOptions]
         options.map(el=>el.isActive=false)
        const selectedItem = NavOptions[index]
        selectedItem.isActive= true
        setNavOptions(options)

    }

    const [state, setState] = React.useState({
        top: false,  
        bottom: false,
        right: false,
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if ( event && event.type === 'keydown' &&(event.key === 'Tab' || event.key === 'Shift') ) {return }
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%' }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          
        >
          <List>
                {NavOptions.map((item, index) => (
                    <div className="drawer-item" onClick={()=>handleNavigation(index)}  key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':'', paddingLeft:'50px'}}>
                      <Link to={item.link} style={{textDecoration:'none', color:'white'}}>
                        <span className="drawer-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                         <span className="drawer-item-text">{item.name}</span>
                      </Link>
                    </div>
                ))}
            </List>
       
        
        </Box>
      );
    
     const styles = useStyles() 
    return(
        <div className="navBa">
      

        <SwipeableDrawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
            classes={{paper:styles.paper}}
          >
              {/* <img src="../../../../assets/logo3.png" alt="dashboard logo"  className="drawer-logo float-left" /> */}
               {list()}
          </SwipeableDrawer>
           
            
            <i className="fa fa-bars fa-1x hideOnDesktop" style={{color:'white', marginLeft:'20px'}} onClick={toggleDrawer('top', true)}></i>
          
        </div>
    )
}

export default Drawer