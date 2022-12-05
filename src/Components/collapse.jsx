import aboutList from "../Datas/about.json"
import CollapseItem from "./collapseItem";

function Collapse () {
    return (
        <div className="collapse-container">
            {aboutList.map((about, index) => (
                <CollapseItem title={about.title} text={about.text} index={index} />
            ))}
        </div>
    )
}

export default Collapse