import pink_logo from '../Assets/logo-pink.svg'

function Header() {
    return (
        <div className="header-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo'/>
            <nav>
                <a href='/'>Accueil</a>
                <a href='/about'>A Propos</a>
            </nav>
        </div>
    )
}

export default Header