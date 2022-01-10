
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { Box } from '@material-ui/core'

import './css/drawer.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';




const useStyles = makeStyles({
  paper:{
    paddingTop:'0px',
    width:'240px',
    background:'rgb(25, 25, 44)',
    color:'white'
  }
})



const Drawer = ({NavOptions})=>{
  const history = useHistory()
  const LogOut = ()=>{
    localStorage.removeItem('auth_token')
    history.push('/login')
  }
    const [state, setState] = React.useState({
        top: false,  
        bottom: false,
        right: false,
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
          
        >
          <List>
                {NavOptions.map((item, index) => (
                    <div className="drawer-item"   key={index} style={{ paddingLeft:'50px'}}>
                      <Link to={item.link} style={{textDecoration:'none', color:'white'}}>
                        <span className="drawer-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                         <span className="drawer-item-text">{item.name}</span>
                      </Link>
                    </div>
                ))}

                  <div className="drawer-item" onClick={()=>LogOut()}   style={{ paddingLeft:'50px'}}>
                        <span className="drawer-item-icon"> <i className={`fa fa-sign-out fa-1x`}></i> </span>
                         <span className="drawer-item-text">Log out</span>
                    </div>
            </List>
       
        
        </Box>
      );
    
     const styles = useStyles() 
    return(
        <div className="navBa">
      

        <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            classes={{paper:styles.paper}}
          >
              <img src="../../../../assets/logo3.png" alt="dashboard logo"  className="drawer-logo float-left" />
               {list()}
          </SwipeableDrawer>
           
            
          <button className="btn btn-menu home-menu-icon hideOnDesktop" style={{ marginLeft:'20px'}} onClick={toggleDrawer('left', true)}>
              <i className="fa fa-bars   fa-2x " ></i>
            </button>
          
        </div>
    )
}

export default Drawer