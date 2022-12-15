import { useParams } from 'react-router-dom'
import tags from "../Datas/logements.json"

function Tag () {

    const {id} = useParams()
    const currentlodge = tags.find(item => item.id === id);
    
    return (
        <div className="tags-container">
            {currentlodge.tags.map((tag,index) => <div className="tags-element" key={index}>{tag}</div>)}
        </div>
    )
}

export default Tag