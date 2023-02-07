import pink_logo from '../Assets/logo-pink.svg'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className="header-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo'/>
            <nav>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/about'}>A Propos</Link>
                <Link to={logout} className="log-btn">Se déconnecter</Link>
            </nav>
        </div>
    )
}

export default Header