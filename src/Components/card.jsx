import lodgingList  from '../Datas/logements.json'

function Card () {
 return (
    <div className="card-container">
            {lodgingList.map((lodging) => (
                <div className="card-element" key={lodging.id}>
                    <h1 className='card-title'>{lodging.title}</h1>
                    <img className='card-img' src={lodging.cover} alt="logement"/>
                </div>
            ))}
    </div>
)
}

export default Card