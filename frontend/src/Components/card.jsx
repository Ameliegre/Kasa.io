import { NavLink } from 'react-router-dom'
import axios from '../Api/axios'
import { useState } from 'react'
import { useEffect } from "react";

const LODG_URL ='/api/lodge';

function Card () {

    const [lodg, setLodg] = useState([])

    const getLodg = async () => {
        try {
            const response = await axios.get(LODG_URL);
            setLodg(response.data)
        } catch (err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        getLodg();
    }, []);
    

    return (
        <div className="card-container">
                {lodg.map((lodging) => (
                    <NavLink to={`/lodging-form/${lodging.id}`} key={lodging.id}>
                        <div className="card-element">
                            <h1 className='card-title'>{lodging.title}</h1>
                            <img className='card-img' src={lodging.cover} alt="logement"/>
                        </div>
                    </NavLink>
                ))}
        </div>
    )
}

export default Card