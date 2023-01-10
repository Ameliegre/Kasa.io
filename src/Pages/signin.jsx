import { useState, useRef, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pink_logo from '../Assets/logo-pink.svg'

const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{8,23}$/;

function Signin () {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //permet de définir le focus sur l'input de l'utilisateur lors du chargement du composant
    useEffect(() => {
        userRef.current.focus();
    }, [])

    //validation du username
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);
    }, [user])

    //validation du pwd
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    //Affichage message erreur
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
            <form onSubmit={handleSubmit} className='login-wrapper signin'>
                <h1 className='login-title'>Inscription</h1>
                <label htmlFor="email" className='input-title'>
                    Email :
                    <span className={validUser ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validUser || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                    type="email" 
                    id="email" 
                    ref={userRef} 
                    autoComplete="off" 
                    onChange={(e) => setUser(e.target.value)} 
                    required  
                    aria-invalid={validUser ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)} //lorsque vous quittez le champ de saisie utilisateur
                    placeholder='tonadresse@gmail.com'>
                </input>
                <p id="uidnote" className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Doit contenir un @.<br/>
                </p>
                <label htmlFor="pwd" className='input-title'>Mot de passe :</label>
                <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder='Tape ton mot de passe'></input>
                <label htmlFor="" className='input-title'>Confirmer votre mot de passe :</label>
                <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder='Tape ton mot de passe'></input>
                <button className='log-btn'>S'inscrire</button>
            </form>
            <p className='signin'>Déjà inscrit ? c'est par <a href='/login'>ici</a></p>
        </div>
    )
}

export default Signin