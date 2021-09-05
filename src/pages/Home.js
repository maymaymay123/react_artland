import React from 'react'
import DisplayHighlight from '../components/DisplayHighlight'
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <div>
            <h1 style={{fontFamily:"fantasy",fontSize: "35px"}}>Hello, Welcome to Little Art Land! <Link to="/searchResult/"><img className="glass" src="magnifying_glass.png" alt="" width="40px" height="40px" /></Link></h1>

            <DisplayHighlight />
    
        </div>
    )
}
