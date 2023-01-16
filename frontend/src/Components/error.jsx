function Error () {
    return ( 
        <div className="error-container">
            <div className="error-element">
                <p className="error-figures">404</p>
                <p className="error-text">Oups! La page que {window.innerWidth < 606 && <br/> } vous demandez n'existe pas.</p>
                <a  className="error-link" href='/'>Retourner sur la page d'accueil</a>
            </div>
        </div>
    )
}

export default Error