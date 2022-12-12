import { useState } from "react";
import arrow from "../Assets/arrow.svg"

function CollapseItem ({title, text, index}) {
    const [isOpen, setIsOpen] = useState(false);

    return  (
        <div className="collapse" key={index}>
            <div className={"collapse-element " + (isOpen ? 'open' : 'close')}>
                <h1 className="collapse-title">{title}</h1>
                <button className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrow} alt="flèche de navigation" className="collapse-img"/>
                </button>
            </div>
            <p className={"collapse-text  " + (isOpen ? 'slidedown' : 'slideup' )}>{text}</p>
        </div>
    );
    
}

export default CollapseItem