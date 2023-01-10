import { useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import pink_logo from '../Assets/logo-pink.svg'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Signin () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
            <form onSubmit={handleSubmit} className='login-wrapper signin'>
                <h1 className='login-title'>Inscription</h1>
                <label className='input-title'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='tonadresse@gmail.com'></input>
                <label className='input-title'>Mot de passe</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Tape ton mot de passe'></input>
                <label className='input-title'>Confirmer votre mot de passe</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Tape ton mot de passe'></input>
                <button className='log-btn'>S'inscrire</button>
            </form>
            <p className='signin'>Déjà inscrit ? c'est par <a href='/login'>ici</a></p>
        </div>
    )
}

export default Signin