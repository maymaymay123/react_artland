import React, {useState, useEffect} from 'react'

export default function Inspirations() {
    const [resourceType, setResourceType] = useState("Inventions")
    const [title, setTitle] = useState("")
    const [artistDisplayName, setArtistDisplayName] = useState("")
    const [objectDate, setObjectDate] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [wiki, setWiki] = useState("")


    // useEffect(()=>{
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${resourceType}`)
    //     .then((response) => response.json())
    //     .then((json) => setItems(json));
    // }, [resourceType]);

    useEffect(()=>{
        handleAPiInspiration()
    },[resourceType])

    // console.log("items",items) 

    const handleAPiInspiration = async (event) => {
    try{
        const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${resourceType}`);
        const json = await res.json();
        console.log("hijson", json)
        const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
        console.log("id",id)
        const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
        console.log("url",url)
        const res2 = await fetch(url);
        const json2 = await res2.json();
        console.log("json2",json2)
        console.log("hiimg", imageUrl);
        console.log("hititle",title)
        setTitle(json2.title)
        setArtistDisplayName(json2.artistDisplayName)
        setObjectDate(json2.objectDate)
        setImageUrl(json2.primaryImageSmall)
        setWiki(`https://en.wikipedia.org/wiki/${json2.title}`)
        // const newItem={
        //     title,
        //     artistDisplayName,
        //     objectDate,
        //     imageUrl
        // }
        // console.log("newItem", newItem)
 

        return title,artistDisplayName,objectDate,imageUrl;
    } catch (err) {
        console.error(err.message);
    }


};  

    return (
        <div className="container-fluid">
            <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType("Inventions")}>Inventions</span>
            <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Creatures')}>Creatures</span>
            <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('Mythology')}>Mythology</span>
            <span className="btn btn-danger" style={{cursor:'pointer'}} onClick={()=> setResourceType('Battles')}>Battles</span>
            <span className="btn btn-secondary" style={{cursor:'pointer'}} onClick={()=> setResourceType('Sports%20and%20Games')}>Sports and Games</span>
            <br />
            <span className="btn btn-dark" stype={{cursor:'pointer'}} onClick={()=> setResourceType('Secrets')}>Secrets</span>
            <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('City%20and%20Country')}>City and Country</span>
            <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Magic%20and%20Mystery')}>Magic and Mystery</span>
            <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('Fashion')}>Fashion</span>
            <span className="btn btn-danger" style={{cursor:'pointer'}} onClick={()=> setResourceType('Spaces%20and%20Places')}>Spaces and Places</span>
            <img className="image-x" src={imageUrl} alt="" width="300px" height="300px"/>
            <div className="description-x">
                <h6>Title: {title}</h6>
                <hr/>
                <h7>Artist: {artistDisplayName}</h7>
                <br />
                <h7>Year: {objectDate}</h7>
                <br />
                <div><a href={wiki}>Find out more...</a></div>
            </div>
        </div>
    )
} 
 

//