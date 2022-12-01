import Banner from '../Components/banner'
import seeBanner from '../Assets/big-see.png'

function Home () {
    return (
        <Banner>
            <img src={seeBanner} alt ='bannière mer' className='imgSee-Banner'/>
            <h1 className='seeBanner-Title'>Chez vous, partout et ailleurs</h1>
        </Banner>
    )
}

export default Home