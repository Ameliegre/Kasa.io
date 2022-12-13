import Slider from '../Components/slider'

function LodgingForm () {

    return (
        <div className='page-container'>
            <Slider></Slider>
            <div className='lodging-text'>
                <h1>Nom appart</h1>
                <h2>Ville</h2>
                <p>Propriétaire</p>
            </div>
        </div>
        
    )
}

export default LodgingForm