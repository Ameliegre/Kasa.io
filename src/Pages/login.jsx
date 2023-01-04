import pink_logo from '../Assets/logo-pink.svg'

function login () {
    return (
        <div className="login-container">
            <img src={pink_logo} alt="logo Kasa rose" className='pink_logo log'/>
            <div className='login-wrapper'>
                <h1>Connexion</h1>
                <p>Email</p>
                <input></input>
                <p>Mot de passe</p>
                <input></input>
                <button className='log-btn'>Se connecter</button>
            </div>
            <p className='signin'>Creer un nouveau compte</p>
        </div>
    )
}

export default login