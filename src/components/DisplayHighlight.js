import React, {useState, useEffect} from 'react'
import HighlightItem from './HighlightItem';
import {Link} from "react-router-dom";


export default function DisplayHighight() {
    const [displays, setDisplays] = useState([])
    const [imageUrl, setImageUrl] = useState([])

    const displayFunction = async (event) => {
        try {
            const res = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Van%20Gogh"
            );
            const json = await res.json();
            //console.log("hijson", json)
            const newArr = json.objectIDs.slice(0,12);
            //const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
            let newdisplays = []
            for (const id of newArr){
            const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
            //console.log("url",url)
            const res2 = await fetch(url);
            const json2 = await res2.json();
            //console.log("json2", json2)
            const key = json2.objectID;
            // console.log("hiimg", imageUrl);
            setImageUrl(json2.primaryImageSmall)
            newdisplays.push(
                <img className="image-x" key={key} src={json2.primaryImageSmall} alt="" width="150px" height="150px"/>
            )
            //console.log("key",key)
            }
            setDisplays(newdisplays)

        } catch (err) {
            console.error(err.message);
        }
      };

      useEffect (()=>{
          displayFunction()
      },[])

      function clickHighlightImage(){

      }

    return (
        <span>
            <h3>Highlights of the Day</h3>
            <span className="imageContainer">
            <a href="highlight">
                {displays}
            </a>
            </span>
            <HighlightItem style={{visibility:"hidden"}} displays={displays} />
        </span>
    )
}

