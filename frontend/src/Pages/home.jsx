import Header from '../Components/header'
import Footer from '../Components/footer'
import Banner from '../Components/banner'
import seeBannerXL from '../Assets/big-see.png'
import seeBannerS from '../Assets/small-see.png'
import CardList from '../Components/card'
import { useEffect } from 'react'

function Home () {

    useEffect(() =>{
        document.title = '🛖 Accueil';
    })

    return (
        <div>
            <Header/>
            <div className='page-container'>
                <Banner>
                    <picture>
                        <source srcSet={seeBannerS} media="(max-width: 425px)"/>
                        <source srcSet={seeBannerXL}/>
                        <img src={seeBannerXL} alt ='bannière mer' className='img-Banner'/>
                    </picture>
                    <h1 className='banner-title'>Chez vous,{window.innerWidth < 426 && <br/> } partout et ailleurs</h1>
                </Banner>
                <CardList></CardList>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home