import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

//Definition du hook useContext avec auth
//Permet d'eviter la répétition avec les imports useContext et AuthContext
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth