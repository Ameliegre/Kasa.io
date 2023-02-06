import { createContext, useState } from "react";

//centralisation de l'etat d'authentification pour toute la page au global à un seul niveau accessible à tous les composants.
//Initialisation d'un objet vide par défaut 
const AuthContext = createContext({});

// fct qui sert à passer le contenu dans le context, il transporte la valeur
export const AuthProvider = ({ children }) => {
    //Init sous forme de state
    const [auth, setAuth] = useState({});

    return (
    //On passe les valeurs définies dans le state par le provider pour diffuser à tous les enfants de l'app
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;