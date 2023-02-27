import pink_logo from '../Assets/logo-pink.svg'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bars from '../Assets/bars-solid.svg';


function Header() {

    const signOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        signOut();
        navigate("/login")
    }

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
                    <button className='button-account profil'>
                            <img className='icon-bars' src={bars} alt='icon'/>
                            <img className='profil-picture-img' src='https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg' alt='profil'/>
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Header