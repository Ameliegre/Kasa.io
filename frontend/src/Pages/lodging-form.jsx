import { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Slider from '../Components/slider'
import { useParams, Navigate } from 'react-router-dom'
import Tag from "../Components/tag"
import Rating from '../Components/rating'
import CollapseItem from '../Components/collapseItem'
import axios from '../Api/axios'

const ONELODG_URL ='/api/lodge/';

function LodgingForm () {

    const [lodge, setOneLodge] = useState()
    const [error, setError] = useState()
    const {id} = useParams()

    const getOneLodge = async () => {
        try {
            const response = await axios.get(ONELODG_URL + id);
            setOneLodge(response.data[0])
        } catch (err) {
            setError(err)
        }
    } 

    useEffect(() => {
        getOneLodge();
    });

    useEffect(() => {
        document.title = '🛖 Logement';
    })

    if(error?.response?.status === 404) {
        return <Navigate to={'/404'}/>
    }
    if (!lodge) {
        return null 
    }
    const ratingNumber = parseInt(lodge.rating)

    return (
        <div>
            <Header/>
            <div className='page-container'>
                <Slider pictures={lodge.pictures}/>
                <div className='lodging-text-container'>
                    <div className='lodging-text'>
                        <h1>{lodge.title}</h1>
                        <h2>{lodge.location}</h2>
                        <Tag tags={lodge.tags}/>
                    </div>
                    <div className='lodging-wrapper'>
                        <div className='lodging-profile'>
                                <p>{lodge.host.name}</p>
                                <img src={lodge.host.picture} alt="profil du propriétaire"/>
                        </div>
                        <Rating scaleValue={ratingNumber}/>
                    </div>
                </div>
                <div className='collapse-container-lodging'>
                    <CollapseItem title="Description" description={lodge.description}/>
                    <CollapseItem title="Équipements" equipments={lodge.equipments}/>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default LodgingForm