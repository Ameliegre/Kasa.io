import Banner from '../Components/banner'
import seeBannerXL from '../Assets/big-see.png'
import seeBannerS from '../Assets/small-see.png'
import Card from '../Components/card'
import { useEffect } from 'react'

function Home () {

    useEffect(() =>{
        document.title = '🛖 Accueil';
    })

    return (
        <div className='page-container'>
            <Banner>
                <img srcSet={`${seeBannerS} 425w, ${seeBannerXL}, 426w`} alt ='bannière mer' className='img-Banner'/>
                <h1 className='banner-title'>Chez vous,{window.innerWidth < 426 && <br/> } partout et ailleurs</h1>
            </Banner>
            <Card></Card>
        </div>
    )
}

export default Home