import { useState } from "react";
import arrow from "../Assets/arrow.svg"

function CollapseItem ({title, text, index}) {
    const [isOpen, setIsOpen] = useState(false);

    const content = Array.isArray(text) ? (
        <ul className={"collapse-text list " + (isOpen ? 'slidedown' : 'slideup' )}>
            {text.map((equipment,index) => <li  key={index}>{equipment}</li>)}
        </ul>
        
        ) : (
        <p className={"collapse-text  " + (isOpen ? 'slidedown' : 'slideup' )}>{text}</p> 
    )

    return  (
        <div className="collapse" key={index}>
            <div className={"collapse-element " + (isOpen ? 'open' : 'close')}>
                <h1 className="collapse-title lodging">{title}</h1>
                <button className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrow} alt="flèche de navigation" className="collapse-img"/>
                </button>
            </div>
            {content}
        </div>
    );
    
}

export default CollapseItem