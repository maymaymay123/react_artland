import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {Redirect, Route} from "react-router-dom";
import SearchResult from './SearchResult';

export default function Form() {

    const [inputText, setInputText] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    function handleChange (event) {
        //console.log("event", event.target.value)
        setInputText(event.target.value)

    }

    const handleSubmit = async () => {
        try {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${inputText}&hasImages=true`
        
          );
          const json = await res.json();
          //console.log("hijson", json);
          const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
          //console.log("hiid", id)
          const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
          const res2 = await fetch(url
            );
            const json2 = await res2.json();
             console.log("hiimg", imageUrl);
           setImageUrl(json2.primaryImageSmall)
          setInputText("");
          return imageUrl;
        } catch (err) {
          console.error(err.message);
        }
        
      };

    return (
        
        <div className="input">
            <input 
              size= "50"
              type="text" 
              placeholder="search title, name, year, etc" 
              onChange={handleChange} 

              >
            </input>
            <Link to="/searchResult/"><button>Search</button></Link>
        </div>
    )
}
