import Banner from '../Components/banner'
import seeBanner from '../Assets/big-see.png'
import Card from '../Components/card'
import { useEffect } from 'react'

function Home () {

    useEffect(() =>{
        document.title = '🛖 Accueil';
    })

    return (
        <div className='page-container'>
            <Banner>
                <img src={seeBanner} alt ='bannière mer' className='img-Banner'/>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Card></Card>
        </div>
    )
}

export default Home