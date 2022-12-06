import aboutList from "../Datas/about.json"
import CollapseItem from "./collapseItem";

function Collapse () {
    return (
        <div className="collapse-container">
            {aboutList.map((about, index) => (
                <CollapseItem key={index} title={about.title} text={about.text}/>
            ))}
        </div>
    )
}

export default Collapse