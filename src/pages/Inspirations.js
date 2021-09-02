import React from 'react'
import {Link} from "react-router-dom";

export default function Inspirations() {
    return (
        <div>
            <Link to='./Inventions'>Inventions</Link>
            <Link to='./Creatures'>Creatures</Link>
            <Link to='./Mythology'>Mythology</Link>
            <Link to='./Battles'>Battles</Link>
            <Link to='./Sports_and_Games'>Sports and Games</Link>
            <Link to='./Secrets'>Secrets</Link>
            <Link to='./City_and_Country'>City and Country</Link>
            <Link to='./Magic_and_Mystery'>Magic and Mystery</Link>
            <Link to='./Fashion'>Fashion</Link>
            <Link to='./Spaces_and_Places'>Spaces and Places</Link>
        
        </div>
    )
}
