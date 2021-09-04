import React, {useState, useEffect} from 'react'

export default function HighlightItem(props) {
    const [imageUrl, setImageUrl] = useState("")
    const [wiki, setWiki] = useState("")
    let newItem=""

    const displayHighlightItem = async (event) => {
        try {
            for (const element of props.displays){  
                const res = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+props.displays[element].key
                );
                const json = await res.json();
                console.log("json",json)
                // setImageUrl(json.primaryImageSmall)
                // setTitle(json.title)
                // setArtistDisplayName(json.artistDisplayName)
                // setObjectDate(json.objectDate)
                // setWiki(`https://en.wikipedia.org/wiki/${json.title}`)
                console.log("props",props.displays[0].key) 
                newItem = (
                    <div className="description-x">
                        <h6>Title: {json.title}</h6>
                        <hr/>
                        <h7>Artist: {json.artistDisplayName}</h7>
                        <br />
                        <h7>Year: {json.objectDate}</h7>
                        <br />
                        <div><a href={wiki}>Find out more...</a></div>
                        <img src={imageUrl} alt="" width="300px" height="300px"/>
                    </div>
                )
                return (newItem)
            }
        } catch (err) {
                console.error(err.message);
                }
    };
    // useEffect (()=>{
    //     displayHighlightItem()
    // },[])

    return (
        // <div>{displayItem}</div>
        <div onClick={displayHighlightItem}>{newItem}</div>
    )
}

//return (props.imageUrl, title,artistDisplayName,objectDate,wiki);