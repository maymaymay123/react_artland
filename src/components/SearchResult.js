import React, {useState} from 'react'
import Form from './Form'

export default function SearchResult(props) {
    console.log("props",props)
    return (
        <div className="input">
            <h1> Search Result: </h1>
            <input
              size= "50"
              type="text" 
              placeholder="search title, name, year, etc" 
              onChange={props.handleChange} 
              >
            </input>
            <button onClick={props.handleSubmit}>Search</button>
            <img src={props.imageUrl} alt="" width="150px" height="150px"/>
        </div>
    )
}
