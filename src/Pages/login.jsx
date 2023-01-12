import { useState, useRef, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import pink_logo from '../Assets/logo-pink.svg'


function Login () {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //permet de définir le focus sur l'input de l'utilisateur lors du chargement du composant
    useEffect(() => {
        userRef.current.focus();
    }, [])

    //Affichage message erreur
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setSuccess(true);
    }

    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
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
                <button type="submit" className='log-btn'>Se connecter</button>
            </form>
            <p className='link'>Pour créer un nouveau compte, c'est <a href='/signin'>ici</a></p>
        </div>
    )
}

export default Login