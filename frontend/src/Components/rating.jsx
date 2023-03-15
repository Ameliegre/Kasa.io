import fullStar from "../Assets/full-star.svg"
import emptyStar from "../Assets/empty-star.svg"

function Rating ({scaleValue}) {

    const range = [1, 2, 3, 4, 5]
    
    return (
        <div className="rating-container">
            <div className='rating-list'>
                {range.map((rangeEl, index) => scaleValue >= rangeEl ? 
                    <img className="rating" key={index} src={fullStar} alt="note"/> 
                    : 
                    <img className="rating" key={index} src={emptyStar} alt="note"/> 
                )}
            </div>
        </div>
    )
}

export default Rating