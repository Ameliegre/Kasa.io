import { useEffect } from 'react'
import Slider from '../Components/slider'
import { useParams } from 'react-router-dom'
import lodging from "../Datas/logements.json"
import Tag from "../Components/tag"
import Rating from '../Components/rating'
import CollapseItem from '../Components/collapseItem'

function LodgingForm () {

    const {id} = useParams()
    const currentlodge = lodging.find(item => item.id === id);
    const ratingNumber = parseInt(currentlodge.rating)

    useEffect(() =>{
        document.title = '🛖 Logement';
    })

    return (
        <div className='page-container'>
            <Slider/>
            <div className='lodging-text-container'>
                <div className='lodging-text'>
                    <h1>{currentlodge.title}</h1>
                    <h2>{currentlodge.location}</h2>
                </div>
                <div className='lodging-profile'>
                    <p>{currentlodge.host.name}</p>
                    <img src={currentlodge.host.picture} alt="profil du propriétaire"/>
                </div>
            </div>
            <div className='lodging-wrapper-component'>
                <Tag/>
                <Rating scaleValue={ratingNumber}/>
            </div>
            <div className='collapse-container-lodging'>
                <CollapseItem title="Description" text={currentlodge.description}/>
                <CollapseItem title="Équipements" text={currentlodge.equipments}/>
            </div>
        </div>
    )
}

export default LodgingForm