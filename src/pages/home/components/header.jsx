import React from 'react'
//import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Box } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import './css/header.css'


const useStyles = makeStyles({
  paper:{
    background:'#1D1E26',
    color:'whitesmoke',
    paddingTop:'30px'
  }
})



const Header = () => {

    const NavOptions = [
        {
            id:0,
            name:'Home',
            link:'/home'
        },
        {
            id:1,
            name:'Upload blog',
            link:'/newpost'
        },
        {
            id:2,
            name:'Services',
            link:'/service'
        },
        {
            id:3,
            name:'About Me',
            link:'/about'
        },
        {
            id:4,
            name:'Blogs',
            link:'/blog'
        },
    ]
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
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
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          
        >
          <List>
                {NavOptions.map((item, index) => (
                    <div className="NavBar-item" key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':'', paddingLeft:'50px', marginBottom:'30px'}}>
                      <Link to={item.link} style={{textDecoration:'none', color:'lightgrey'}}>
                        <span className="NavBar-item-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                         <span className="NavBar-item-item-text">{item.name}</span>
                      </Link>
                    </div>
                ))} 
                
            </List>
         <hr/>
        
        </Box>
      );
    
     const styles = useStyles() 
    return ( 
        <div className="header">
             <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            classes={{paper:styles.paper}}
          >
               {list()}
          </SwipeableDrawer>
            {/* <img src="../../../assets/icopy.jpg" alt="logo" className="logo-img" /> */}
            <span className="app-name"> <span className="colored-i">i</span>copy Story</span>
            <span className="pull-right">
                <span className="hideOnMobile">
                    <ul className="nav ">
                        {NavOptions.map((el, i)=>
                          <Link key={i} to={el.link} style={{textDecoration:'none'}}>
                               <li className="nav-item">{el.name}</li>
                         </Link> 
                        )}
                        
                        <li>
                            <button className="btn-contactus">Contact Us</button>
                        </li>
                    </ul>
                </span>
                <span className="hideOnDesktop" onClick={toggleDrawer('right', true)}>
                    
                        <i className="fa fa-bars fa-2x"></i>
                   
                </span>
            </span>
        </div>
     );
}
 
export default Header;