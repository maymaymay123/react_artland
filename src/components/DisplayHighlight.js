import React, {useState, useEffect} from 'react'
import HighlightItem from './HighlightItem';
import {Link} from "react-router-dom";


export default function DisplayHighight() {
    const [displays, setDisplays] = useState('Loading...')
    const [imageUrl, setImageUrl] = useState([])

    const displayFunction = async (event) => {
        try {
            const res = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Van%20Gogh"
            );
            const json = await res.json();
            //console.log("hijson", json)
            const newArr = json.objectIDs.slice(0,14);
            //const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
            //let newdisplays = []
            //for (const id of newArr){
            let newdisplays = await Promise.all(newArr.map(async(id) => {
                const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
                //console.log("url",url)
                const res2 = await fetch(url);
                const json2 = await res2.json();
                //console.log("json2", json2)
                const key = json2.objectID;
                // console.log("hiimg", imageUrl);
                // setImageUrl(json2.primaryImageSmall)
                let newdisplay = (
                    <Link key={key} to={`./highlight/${key}`}><img className="image-xx" src={json2.primaryImageSmall} alt="" width="150px" height="150px"/></Link>
                )
                //console.log("key",key)
                return newdisplay
            }))
            console.log('newdisplays: ',newdisplays)
            setDisplays(newdisplays)
            
        } catch (err) {
            console.error('error: ',err.message);
        }
        
        console.log("displays", displays)
      };
      
    useEffect (()=>{
        displayFunction()
    },[])

    function clickHighlightImage(){

    }

    return (
        <span>
            <h3 style={{color: "red", fontStyle:"italic"}}>Highlights of the Week - Vincent van Gogh</h3>
            <br />
            <span className="imageHighlightContainer">
                {displays}
            </span>
        </span>
    )
    
}
