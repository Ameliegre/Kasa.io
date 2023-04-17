import { NavLink } from 'react-router-dom'
import { useEffect } from "react";
import { useSelector, useStore } from 'react-redux'
import { fetchOrUpdateLodges } from '../Features/lodges';
import { selectLodges } from '../Utils/selector';

function CardList () {
    // on récupère le store grâce au hook useStore()
    const store = useStore()

    // on utilise useEffect pour lancer la requête au chargement du composant
    useEffect(() => {
    // on exécute notre action asynchrone avec le store en paramètre
    fetchOrUpdateLodges(store)
    // On suit la recommandation d'ESLint de passer le store
    // en dépendances car il est utilisé dans l'effet
    // cela n'as pas d'impacte sur le fonctionnement car le store ne change jamais
    }, [store])

    const lodges = useSelector(selectLodges)

    return (
        <div className="card-container">
                {lodges.data?.map((lodge) => (
                    <NavLink to={`/lodge/${lodge.id}`} key={lodge.id}>
                        <div className="card-element">
                            <h1 className='card-title'>{lodge.title}</h1>
                            <img className='card-img' src={lodge.cover} alt="logement"/>
                        </div>
                    </NavLink>
                ))}
        </div>
    )
}

export default CardList