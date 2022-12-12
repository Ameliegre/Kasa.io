import { useParams } from 'react-router-dom'
import Slider from '../Components/slider'

function LodgingForm () {

    const {id} = useParams()
    console.log(id)

    return (
        <div className='page-container'>
            <Slider></Slider>
            {/* <div className='lodging-text'>
                <h1>Nom appart</h1>
                <h2>Ville</h2>
            </div> */}
        </div>
        
    )
}

export default LodgingForm