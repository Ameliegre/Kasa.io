import arrow from '../Assets/arrow.svg'
import {useState} from 'react';

function Slider ({pictures}) {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentlodge = Object.values(pictures);

    const prevImage = () => 
    {
        setCurrentImageIndex(currentImageIndex === 0 ? currentlodge.length - 1 : currentImageIndex -1);
    }

    const nextImage = () =>
    {
        setCurrentImageIndex(currentImageIndex === currentlodge.length - 1 ? 0 : currentImageIndex + 1)
    }

    return (
        <div className='slider-container'>
            <img src={currentlodge[currentImageIndex]} className='slider-img' alt="carrousel"/>
            <div className="slider-wrapper">
                <button  className={"arrow-btn left " + (currentlodge.length === 1 ? 'hidden' : '')} onClick={(prevImage)}> 
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
                <div className={"pagination " + (currentlodge.length === 1 ? 'hidden' : '')}>{currentImageIndex + 1}/{currentlodge.length}</div>
                <button className={"arrow-btn right " + (currentlodge.length === 1 ? 'hidden' : '')} onClick={(nextImage)}>
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
            </div>
        </div>
    )
}

export default Slider
