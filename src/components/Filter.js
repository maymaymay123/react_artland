import React from 'react'
import {Link} from 'react-router-dom'

export default function Filter() {
    return (
        <div>
            <div><Link to="./Classification">Classification</Link></div>
            <div><Link to="./Era">Era</Link></div>
            <div><Link to="./Geography">Geography</Link></div>
        </div>
    )
}
