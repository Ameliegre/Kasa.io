import { useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import pink_logo from '../Assets/logo-pink.svg'


function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
            <form onSubmit={handleSubmit} className='login-wrapper'>
                <h1 className='login-title'>Connexion</h1>
                <label className='input-title'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='tonadresse@gmail.com' id='email'></input>
                <label className='input-title'>Mot de passe</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password'></input>
                <button type="submit" className='log-btn'>Se connecter</button>
            </form>
            <p className='link'>Pour créer un nouveau compte, c'est <a href='/signin'>ici</a></p>
        </div>
    )
}

export default Login