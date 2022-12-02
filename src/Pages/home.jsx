import Banner from '../Components/banner'
import seeBanner from '../Assets/big-see.png'
import Card from '../Components/card'

function Home () {
    return (
        <div className='home-container'>
            <Banner>
                <img src={seeBanner} alt ='bannière mer' className='imgSee-Banner'/>
                <h1 className='seeBanner-Title'>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Card></Card>
        </div>
    )
}

export default Home