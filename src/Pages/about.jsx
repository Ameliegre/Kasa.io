import Banner from '../Components/banner'
import mountBanner from '../Assets/big-mountain.png'
import Collapse from '../Components/collapse'

function About () {
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