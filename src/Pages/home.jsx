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
                <picture>
                    <source srcSet={seeBannerS} media="(max-width: 425px)"/>
                    <source srcSet={seeBannerXL}/>
                    <img src={seeBannerXL} alt ='bannière mer' className='img-Banner'/>
                </picture>
                <h1 className='banner-title'>Chez vous,{window.innerWidth < 426 && <br/> } partout et ailleurs</h1>
            </Banner>
            <Card></Card>
        </div>
    )
}

export default Home