import CollapseItem from "./collapseItem";
import axios from '../Api/axios'
import { useState } from "react";
import { useEffect } from "react";

const ABOUT_URL ='/api/about';

function Collapse () {

    const [about, setAbout] = useState([])

    const getAbout = async () => {
        try {
            const response = await axios.get(ABOUT_URL);
            setAbout(response.data)
        } catch (err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        getAbout();
    }, []);
    
    return (
        <div className="collapse-container">
            {about.map((about) => (
                <CollapseItem key={about.id} title={about.title} description={about.text}/>
            ))}
        </div>
    )
}

export default Collapse