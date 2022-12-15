import Banner from '../Components/banner'
import mountBanner from '../Assets/big-mountain.png'
import Collapse from '../Components/collapse'
import { useEffect } from 'react'

function About () {

    useEffect(() =>{
        document.title = '🛖 A Propos';
    })

    return (
        <div className="page-container">
            <Banner>
                <img src={mountBanner} alt ='bannière montagne' className='img-Banner'/>
            </Banner>
            <Collapse></Collapse>
        </div>
    )
}

export default About