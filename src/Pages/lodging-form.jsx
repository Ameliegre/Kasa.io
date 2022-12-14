import { useEffect } from 'react'
import Slider from '../Components/slider'

function LodgingForm () {

    useEffect(() =>{
        document.title = 'Kasa - Logements';
    })

    return (
        <div className='page-container'>
            <Slider></Slider>
            <div className='lodging-wrapper'>
                <div className='lodging-text'>
                    <h1>Nom appart</h1>
                    <h2>Ville</h2>
                </div>
                <div className='lodging-profile'>
                    <p>Propriétaire</p>
                </div>
            </div>
        </div>
    )
}

export default LodgingForm