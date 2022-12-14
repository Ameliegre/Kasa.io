import { useParams } from 'react-router-dom'
import rating from "../Datas/logements.json"

function Rating () {

    const {id} = useParams()
    const currentlodge = rating.find(item => item.id === id);
    
    return (
        <div className="rating-container">
            <div className='rating-list'>
                1, 2, 3, 4, 5
            </div>
        </div>
    )
}

export default Rating