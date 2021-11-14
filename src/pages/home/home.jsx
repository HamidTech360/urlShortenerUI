import React, {useEffect, useState} from 'react'
import Banner1 from './components/banner1'
import Header from './components/header'
import Services from './components/our-services'
import Cards from './components/cards'
import AboutMe from './components/aboutme'
import Experience from './components/experience'
import ProjectCards from './components/proj-cards'
import Footer from './components/footer'
import ReactLoading from 'react-loading'



import './components/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
const Home = ()=>{
    const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{
        
        setTimeout(() => {
            setPreloader(false)
        }, 200);
    },[])

    // if(preloader){
    //     return (
    //      <div className="preloader-box text-center">
    //         <ReactLoading 
    //             type="bars"
    //             color="#C84C5B"
    //             height={100}
    //             width={100}
             
    //         />
    //      </div>
    //     )
    // }

    return(
        <div className="home-wrapper">
          
            <Header/>
            <Banner1/>
            <Services/> 
            <Cards/>
            <AboutMe/>
            <Experience/>
            <Footer/>
            {/* <ProjectCards/> */}
        </div>
    
    )}
export default Home;