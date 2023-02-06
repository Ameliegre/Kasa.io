import { useState, useRef, useEffect} from "react";
import useAuth from "../Hooks/useAuth";
import pink_logo from '../Assets/logo-pink.svg'
import axios from '../Api/axios'
import { useLocation, useNavigate } from 'react-router-dom'

const LOGIN_URL ='/api/login';

function Login () {
    //Definition du nouveau state auth si la connexion se fait avec succès
    const { setAuth } = useAuth();

    //
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    //permet de définir le focus sur l'input de l'utilisateur lors du chargement du composant
    useEffect(() => {
        userRef.current.focus();
    }, [])

    //Affichage message erreur
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    ////Permet de soumettre le formulaire vers le backend
    const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post(LOGIN_URL,{
                    user: user,
                    password: pwd
                });
                console.log(response?.data);
                //const accessToken = response?.data?.accessToken;
                //const roles = response?.data?.roles;
                setAuth({user, pwd})
                setUser('');
                setPwd('');
                navigate(from, {replace: true});
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('Echec de la connexion');
                }
                errRef.current.focus();
            }
        }

    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit} className='login-wrapper'>
                <h1 className='login-title'>Connexion</h1>
                <label htmlFor="email" className='input-title'>
                    Email :
                </label>
                <input 
                    type="email"
                    id='email'
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)} 
                    value={user}
                    required>
                </input>
                <label htmlFor="password" className='input-title'>
                    Mot de passe :
                </label>
                <input 
                    type="password" 
                    id='password'
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required>
                </input>
                <button className='log-btn' disabled={!user || !pwd }>
                    <span>Se connecter</span>
                </button>
            </form>
            <p className='link'>Pour créer un nouveau compte, c'est <a href='/signin'>ici</a></p>
        </div>
    )
}
    


export default Login