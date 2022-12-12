import { NavLink } from 'react-router-dom'
import lodgingList  from '../Datas/logements.json'

function Card () {

    return (
        <div className="card-container">
                {lodgingList.map((lodging) => (
                    <NavLink to={`/lodging-form/${lodging.id}`} key={lodging.id}>
                        <div className="card-element">
                            <h1 className='card-title'>{lodging.title}</h1>
                            <img className='card-img' src={lodging.cover} alt="logement"/>
                        </div>
                    </NavLink>
                ))}
        </div>
)
}

export default Card