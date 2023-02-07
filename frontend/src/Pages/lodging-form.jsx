import { useEffect } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Slider from '../Components/slider'
import { useParams, Navigate } from 'react-router-dom'
import lodging from "../Datas/logements.json"
import Tag from "../Components/tag"
import Rating from '../Components/rating'
import CollapseItem from '../Components/collapseItem'


function LodgingForm () {

    useEffect(() => {
        document.title = '🛖 Logement';
    })

    const {id} = useParams()
    const currentlodge = lodging.find(item => item.id === id);
    if (!currentlodge) {
        return <Navigate to="/404" />
    }

    const ratingNumber = parseInt(currentlodge.rating)

    return (
        <div>
            <Header/>
            <div className='page-container'>
                <Slider/>
                <div className='lodging-text-container'>
                    <div className='lodging-text'>
                        <h1>{currentlodge.title}</h1>
                        <h2>{currentlodge.location}</h2>
                        <Tag/>
                    </div>
                    <div className='lodging-wrapper'>
                        <div className='lodging-profile'>
                                <p>{currentlodge.host.name}</p>
                                <img src={currentlodge.host.picture} alt="profil du propriétaire"/>
                        </div>
                        <Rating scaleValue={ratingNumber}/>
                    </div>
                </div>
                <div className='collapse-container-lodging'>
                    <CollapseItem title="Description" text={currentlodge.description}/>
                    <CollapseItem title="Équipements" text={currentlodge.equipments}/>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default LodgingForm