import { useState, useRef, useEffect } from "react";
import axios from '../Api/axios'
import { faTimes, faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pink_logo from '../Assets/logo-pink.svg'

const NAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNIN_URL ='/api/signup';

function Signin () {
    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [surname, setSurname] = useState('')
    const [validSurname, setValidSurname] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);

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

    //validation du mail avec les conditions REGEX
    useEffect(() => {
        const result = EMAIL_REGEX.test(user)
        setValidUser(result);
    }, [user])

    //validation du name avec les conditions REGEX
    useEffect(() => {
        const result = NAME_REGEX.test(name);
        setValidName(result);
    },[name])

    //validation du surname avec les conditions REGEX
    useEffect(() => {
        const result = NAME_REGEX.test(surname);
        setValidSurname(result)
    },[surname])

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
    }, [name, surname, user, pwd, matchPwd])

    //Permet de soumettre le formulaire avec une double validation des conditions REGEX vers le Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = NAME_REGEX.test(name,surname)
        if(!v1 || !v2 || !v3) {
            setErrMsg("Entrée invalide");
            return;
        }
        try {
            const response = await axios.post(SIGNIN_URL,{
                    name: name,
                    surname: surname,
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
                        <label htmlFor="username" className='input-title'>
                            Nom :
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"}/>
                        </label>
                        <input 
                            type="text" 
                            id="username" 
                            ref={userRef} 
                            autoComplete="off" 
                            onChange={(e) => setName(e.target.value)} 
                            required  
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="usernote"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)} //lorsque vous quittez le champ de saisie utilisateur
                            placeholder='Tape ton nom'>
                        </input>
                        <p id="usernote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Ne doit pas contenir de caractères spéciaux :<br/>
                                <span aria-label="exclamation mark"> !</span> 
                                <span aria-label="at symbol"> @</span> 
                                <span aria-label="hashtag"> #</span> 
                                <span aria-label="dollar sign"> $</span> 
                                <span aria-label="percent"> %</span>
                        </p>
                        <label htmlFor="surname" className='input-title'>
                            Prénom :
                            <FontAwesomeIcon icon={faCheck} className={validSurname ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validSurname || !surname ? "hide" : "invalid"}/>
                        </label>
                        <input 
                            type="text" 
                            id="surname" 
                            autoComplete="off" 
                            onChange={(e) => setSurname(e.target.value)} 
                            required  
                            aria-invalid={validSurname ? "false" : "true"}
                            aria-describedby="surnamenote"
                            onFocus={() => setSurnameFocus(true)}
                            onBlur={() => setSurnameFocus(false)} //lorsque vous quittez le champ de saisie utilisateur
                            placeholder='Tape ton prénom'>
                        </input>
                        <p id="surnamenote" className={surnameFocus && surname && !validSurname ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Ne doit pas contenir de caractères spéciaux :<br/>
                                <span aria-label="exclamation mark"> !</span> 
                                <span aria-label="at symbol"> @</span> 
                                <span aria-label="hashtag"> #</span> 
                                <span aria-label="dollar sign"> $</span> 
                                <span aria-label="percent"> %</span>
                        </p>
                        <label htmlFor="email" className='input-title'>
                            Email :
                            <FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validUser || !user ? "hide" : "invalid"}/>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
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