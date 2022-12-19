import Banner from '../Components/banner'
import mountBannerXL from '../Assets/big-mountain.png'
import mountBannerS from '../Assets/small-mountain.png'
import Collapse from '../Components/collapse'
import { useEffect } from 'react'

function About () {

    useEffect(() =>{
        document.title = '🛖 A Propos';
    })

    return (
        <div className="page-container">
            <Banner>
                <img srcSet={`${mountBannerS} 425w, ${mountBannerXL}, 426w`} alt ='bannière montagne' className='img-Banner'/>
            </Banner>
            <Collapse></Collapse>
        </div>
    )
}

export default About