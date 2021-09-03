import React from 'react'
import {Link} from 'react-router-dom'

export default function Filter() {
    return (
        <span className="filterblock">
            <div><Link to="./Classification">Classification</Link></div>
            <div><Link to="./Era">Era</Link></div>
            <div><Link to="./Geography">Geography</Link></div>
        </span>
    )
}
