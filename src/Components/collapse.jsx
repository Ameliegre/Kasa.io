import { useState } from "react";
import arrow from "../Assets/arrow.svg"



function Collapse () {
    const [isOpen, setIsOpen] = useState(true);

    return isOpen ? (
        <div className="collapse-container">
            <div className="collapse-element">
                <h1 className="collapse-title">Titre</h1>
                <button className="collapse-btn" onClick={() => setIsOpen(false)}><img src={arrow} alt="flèche de navigation" className="collapse-img"/></button>
            </div>
            <p className="collapse-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>
    ) : (
        <div className='collapse-container closed'>
			 <div className="collapse-element">
                <h1 className="collapse-title">Titre</h1>
                <button className="collapse-btn" onClick={() => setIsOpen(true)}><img src={arrow} alt="flèche de navigation" className="collapse-img"/></button>
            </div>
		</div>
    )
}

export default Collapse