import { useState } from "react";
import arrow from "../Assets/arrow.svg"

function CollapseItem ({title, text, index}) {
    const [isOpen, setIsOpen] = useState(false);

    return  (<div className="collapse" key={index}>
        <div className={"collapse-element " + (isOpen ? 'open' : '')}>
            <h1 className="collapse-title">{title}</h1>
            <button className="collapse-btn" onClick={() => setIsOpen(!isOpen)}>
                <img src={arrow} alt="flèche de navigation" className="collapse-img"/>
            </button>
        </div>
        {isOpen && <p className="collapse-text">{text}</p>}
    </div>);
    
}

export default CollapseItem