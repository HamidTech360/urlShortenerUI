import React, {useEffect} from 'react'
import Banner from './components/banner'
import OurService from './components/ourservice'
import Cards from './components/cards'
import Banner2 from './components/banner2'
import Portfolio from './components/portfolio'
import ContactMe from './components/contactMe'
import './components/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
const Home = ()=>{
    // const [preloader, setPreloader] = useState(true)
   
    useEffect(()=>{ 
        window.scrollTo(0,0)
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
            <Banner/>
            <OurService/>
            <Cards/>
            <Banner2/>
            <Portfolio/>
            <ContactMe/>
        </div>
    
    )}
export default Home;