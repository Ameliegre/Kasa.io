import { useState, useRef, useEffect } from "react";
import axios from '../Api/axios'
import { faTimes, faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pink_logo from '../Assets/logo-pink.svg'

const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNIN_URL ='/api/signup';

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

    //validation du username avec les conditions REGEX
    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidUser(result);
    }, [user])

    //validation du pwd avec les conditions REGEX
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    //Affichage message erreur
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    //Permet de soumettre le formulaire avec une double validation des conditions REGEX vers le Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg("Entrée invalide");
            return;
        }
        try {
            const response = await axios.post(SIGNIN_URL,{
                    user: user,
                    password: pwd
                }
            );
            console.log(response.data);
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Echec de l\'inscription');
            } 
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="login-container">
                    <h1>Inscription réalisée avec succès!</h1>
                    <p>
                        <a href='/login'>Connecte toi </a>
                    </p>
                </section>
            ) : (
                <div className="login-container">
                    <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form method="post" onSubmit={handleSubmit} className='login-wrapper signin'>
                        <h1 className='login-title'>Inscription</h1>
                        <label htmlFor="email" className='input-title'>
                            Email :
                            <FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validUser || !user ? "hide" : "invalid"}/>
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
                        <label htmlFor="password" className='input-title'>
                            Mot de passe :
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"}/>
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPwd(e.target.value)} 
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            placeholder='Tape ton mot de passe'>
                        </input>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 à 23 caractères.<br/>
                            Doit inclure une lettre majuscule et une minuscule, un chiffre et un caractère spécial.<br />
                            Caractères spéciaux autorisés: 
                                <span aria-label="exclamation mark"> !</span> 
                                <span aria-label="at symbol"> @</span> 
                                <span aria-label="hashtag"> #</span> 
                                <span aria-label="dollar sign"> $</span> 
                                <span aria-label="percent"> %</span>
                        </p>
                        <label htmlFor="confirm_pwd" className='input-title'>
                            Confirmation du mot de passe :
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validMatch|| !matchPwd ? "hide" : "invalid"}/>
                        </label>
                        <input 
                            type="password" 
                            id="confirm_pwd" 
                            onChange={(e) => setMatchPwd(e.target.value)} 
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            placeholder='Tape ton mot de passe à nouveau'>
                        </input>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Doit correspondre au mot de passe inscrit précédement.
                        </p>
                        <button className='log-btn' disabled={!validUser || !validPwd || !validMatch}>
                            <span className="submit">S'inscrire</span>
                        </button>
                    </form> 
                    <p className='link'>Déjà inscrit ? alors par <a href='/login'>ici</a></p>
                </div>
            )}
        </>
    )
}

export default Signin