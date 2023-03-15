import Banner from '../Components/banner'
import mountBannerXL from '../Assets/big-mountain.png'
import mountBannerS from '../Assets/small-mountain.png'
import Collapse from '../Components/collapse'
import { useEffect } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'

function About () {

    useEffect(() =>{
        document.title = '🛖 A Propos';
    })

    return (
        <div>
            <Header/>
            <div className="page-container">
                <Banner>
                <picture>
                        <source srcSet={mountBannerS} media="(max-width: 425px)"/>
                        <source srcSet={mountBannerXL}/>
                        <img src={mountBannerXL} alt ='bannière montagn' className='img-Banner'/>
                </picture>
                </Banner>
                <Collapse></Collapse>
            </div>
            <Footer/>
        </div>
    )
}

export default About