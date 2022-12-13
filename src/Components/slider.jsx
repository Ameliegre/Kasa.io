import arrow from '../Assets/arrow.svg'
import { useParams } from 'react-router-dom'
import lodging from "../Datas/logements.json"
import {useState} from 'react';

function Slider () {
    const {id} = useParams()
    const currentlodge = lodging.find(item => item.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => 
    {
        setCurrentImageIndex(currentImageIndex === 0 ? currentlodge.pictures.length - 1 : currentImageIndex -1);
    }

    const nextImage = () =>
    {
        setCurrentImageIndex(currentImageIndex === currentlodge.pictures.length - 1 ? 0 : currentImageIndex + 1)
    }
    


    return (
        <div className='slider-container'>
            <img src={currentlodge.pictures[currentImageIndex]} className='slider-img' alt="carrousel"/>
            <div className="slider-wrapper">
                <button  className="arrow-btn left" onClick={(prevImage)}> 
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
                <div className="pagination">{currentImageIndex + 1}/{currentlodge.pictures.length}</div>
                <button className="arrow-btn right" onClick={(nextImage)}>
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
            </div>
        </div>
    )
}

export default Slider
