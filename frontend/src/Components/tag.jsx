import { useParams } from 'react-router-dom'
import tags from "../Datas/logements.json"
import axios from '../Api/axios'
import { useState, useEffect } from 'react'

const TAG_URL = '/api/lodging/'

function Tag ({tags}) {
    console.log('iririri',tags)
    return (
        <div className="tags-container">
            {Object.values(tags).map((tag, index) => <div className="tags-element" key={index}>{tag}</div>)}
        </div>
    )
}

export default Tag