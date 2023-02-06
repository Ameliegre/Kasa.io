import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

//Logique d'autorisation d'accès à l'utilisateur après connexion uniquement
function RequireAuth () {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Outlet/>
            : <Navigate to="/home" state={{from: location}} replace />
    )
}

export default RequireAuth;