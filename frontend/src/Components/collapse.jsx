import CollapseItem from "./collapseItem";
import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import { fetchOrUpdateAbout } from "../Features/about";
import { selectAbout } from "../Utils/selector";


function Collapse () {

    const store = useStore()

    useEffect(() => {
        fetchOrUpdateAbout(store);
    }, [store]);

    const about = useSelector(selectAbout)
    
    return (
        <div className="collapse-container">
            {about.data?.map((about) => (
                <CollapseItem key={about.id} title={about.title} description={about.text}/>
            ))}
        </div>
    )
}

export default Collapse