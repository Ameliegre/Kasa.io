import pink_logo from '../Assets/logo-pink.svg'

function Header() {

    if (window.location.pathname === '/signin' ) {
        return null
    }

    if (window.location.pathname === '/login' ) {
        return null
    }

    return (
        <div className="header-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo'/>
            <nav>
                <a href='/home'>Accueil</a>
                <a href='/about'>A Propos</a>
            </nav>
        </div>
    )
}

export default Header