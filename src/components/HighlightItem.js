import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


export default function HighlightItem() {

    const params = useParams();
    const [display,setDisplay] = useState("")

    const displayHighlightItem = async (event) => {
        try {
        
            const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.item}`
            );
            const json = await res.json();
            
            let newItem = (
                <div className="description-x">
                    <h6>Title: {json.title}</h6>
                    <hr/>
                    <h7>Artist: {json.artistDisplayName}</h7>
                    <br />
                    <h7>Year: {json.objectDate}</h7>
                    <br />
                    <div><a href={`https://www.google.com/search?q=${json.title}%20${json.artistDisplayName}`} target="_blank">Find out more...</a></div>
                    <img src={json.primaryImageSmall} alt="" width="300px" height="300px"/>
                </div>
            )
            // <div><a href={wiki}>Find out more...</a></div>
            setDisplay(newItem)
            
            console.log('displayhighlight:',display)
        
        } catch (err) {
                console.error('highlight error: ',err.message);
                }
    };
     useEffect (()=>{
         displayHighlightItem()
     },[])
    return (
        // <div>{displayItem}</div>
        <div>
            {display}
        </div>
    )
}
