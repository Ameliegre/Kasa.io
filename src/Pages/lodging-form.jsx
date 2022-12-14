import { useEffect } from 'react'
import Slider from '../Components/slider'
import { useParams } from 'react-router-dom'
import lodging from "../Datas/logements.json"
import Tag from "../Components/tag"
import Rating from '../Components/rating'

function LodgingForm () {

    const {id} = useParams()
    const currentlodge = lodging.find(item => item.id === id);

    useEffect(() =>{
        document.title = 'Kasa - Logements';
    })

    return (
        <div className='page-container'>
            <Slider></Slider>
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
                <Tag></Tag>
                <Rating></Rating>
            </div>
        </div>
    )
}

export default LodgingForm