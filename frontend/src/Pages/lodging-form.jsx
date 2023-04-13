import { useEffect } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Slider from '../Components/slider'
import { useParams, Navigate } from 'react-router-dom'
import Tag from "../Components/tag"
import Rating from '../Components/rating'
import CollapseItem from '../Components/collapseItem'
import { useSelector, useStore } from 'react-redux'
import { fetchOrUpdateLodge } from '../Features/lodge'
import { selectLodge } from '../Utils/selector'

function LodgingForm () {

    // on récupère le store grâce au hook useStore()
    const store = useStore()
    const {id: lodgeId} = useParams()

    // on utilise useEffect pour lancer la requête au chargement du composant
    useEffect(() => {
    fetchOrUpdateLodge(store, lodgeId)
    }, [store, lodgeId])

    const lodge = useSelector(selectLodge(lodgeId))

    console.log(lodge.data)

    useEffect(() => {
        document.title = '🛖 Logement';
    })

    if(lodge.status === 'rejected') {
         return <Navigate to={'/404'}/>
    }

    if (!lodge) {
         return null 
    }
    
    const ratingNumber = parseInt(lodge.data?.rating)

    return (
        <div>
            <Header/>
            <div className='page-container'>
                <Slider pictures={lodge.data?.pictures}/>
                <div className='lodging-text-container'>
                    <div className='lodging-text'>
                        <h1>{lodge.data?.title}</h1>
                        <h2>{lodge.data?.location}</h2>
                        <Tag tags={lodge.data?.tags}/>
                    </div>
                    <div className='lodging-wrapper'>
                        <div className='lodging-profile'>
                                <p>{lodge.data?.host.name}</p>
                                <img src={lodge.data?.host.picture} alt="profil du propriétaire"/>
                        </div>
                        <Rating scaleValue={ratingNumber}/>
                    </div>
                </div>
                <div className='collapse-container-lodging'>
                    <CollapseItem title="Description" description={lodge.data?.description}/>
                    <CollapseItem title="Équipements" equipments={lodge.data?.equipments}/>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default LodgingForm