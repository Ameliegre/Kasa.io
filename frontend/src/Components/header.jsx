import pink_logo from '../Assets/logo-pink.svg'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bars from '../Assets/bars-solid.svg';
import { useState } from 'react';


function Header() {

    const signOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        signOut();
        navigate("/login")
    }

    const [open, setIsOpen] = useState(false);

    if (window.location.pathname === '/signin' ) {
        return null
    }

    if (window.location.pathname === '/login' ) {
        return null
    }

    return (
        <div className='fixed-header'>
            <div className="header-container">
                <img src={pink_logo} alt="logo Kasa rose" className='pink_logo'/>
                <nav>
                    <button className='button-account redirect'><Link to='/'>Accueil</Link></button>
                    <button className='button-account redirect'><Link to='/about'>A Propos</Link></button>
                    {/* <Link to='/login'><button className="log-btn" onClick={logout}>Se déconnecter</button></Link> */}
                    <div className={'button-account profil ' + (open ? 'open' : 'close')} onClick={() => {setIsOpen(!open)}} >
                            <img className='icon-bars' src={bars} alt='icon'/>
                            <img className='profil-picture-img' src='https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg' alt='profil'/>
                            <div className='profile-menu'>
                                <ul className='header-list'>
                                    <Link to='/favorite'><button className='btn-list'>Favoris</button></Link>
                                    <Link to='/hostings'><button className='btn-list'>Gérer mes annonces</button></Link>
                                    <Link to='/new-hosting'><button className='btn-list'>Créer une annonce</button></Link>
                                    <Link to='/account-settings'><button className='btn-list'>Compte</button></Link>
                                    <Link to='/login'><button className='btn-list' onClick={logout}>Deconnexion</button></Link>
                                </ul>
                            </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header