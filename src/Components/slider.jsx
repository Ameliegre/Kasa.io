//import lodgingList  from '../Datas/logements.json'
import arrow from '../Assets/arrow.svg'

function Slider () {
    return (
        <div className='slider-container'>
            <div className="slider-content">
                <button  className="arrow-btn left"> 
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
                <div className="pagination">3/4</div>
                <button className="arrow-btn right">
                    <img src={arrow} alt="flèche de navigation"/>
                </button>
            </div>
            
        </div>
    )
}

export default Slider
