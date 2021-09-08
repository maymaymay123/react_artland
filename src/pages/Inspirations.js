import React, {useState, useEffect} from 'react'
import InspirationResult from './InspirationResult'

export default function Inspirations() {
    const [resourceType, setResourceType] = useState("Inventions")
    // const [title, setTitle] = useState("")
    // const [artistDisplayName, setArtistDisplayName] = useState("")
    // const [objectDate, setObjectDate] = useState("");
    // const [imageUrl, setImageUrl] = useState("")
    // const [wiki, setWiki] = useState("")
    const [resourceButton, setResourceButton] = useState("");
    const [displays, setDisplays] = useState("Loading...")


    // useEffect(()=>{
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${resourceType}`)
    //     .then((response) => response.json())
    //     .then((json) => setItems(json));
    // }, [resourceType]);

    useEffect(()=>{
        handleAPiInspiration()
    },[resourceType])

    // console.log("items",items) 
    // let inspiration ="";
    const handleAPiInspiration = async (event) => {

        try{
            const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${resourceType}`);
            const json = await res.json();
            console.log("hijson", json)
            let randomindex = Math.floor(Math.random()*(json.objectIDs.length-7))
            console.log("randomindex", randomindex)
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
              }
            let newArr = shuffle(json.objectIDs)
            newArr = json.objectIDs.slice(randomindex,randomindex+7);
            //const newArr = json.objectIDs.slice(0,3);
            // const id = (json.objectIDs[Math.floor(Math.random()*objectIDs.length)]);
            // console.log("id",id)
            let newdisplays = []
            for (const id of newArr){
                const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
                console.log("url",url)
                const res2 = await fetch(url);
                const json2 = await res2.json();
                // console.log("json2",json2)
                // console.log("hiimg", imageUrl);
                // console.log("hititle",title)
            // setTitle(json2.title)
            // setArtistDisplayName(json2.artistDisplayName)
            // setObjectDate(json2.objectDate)
            // setImageUrl(json2.primaryImageSmall)
            // setWiki(`https://en.wikipedia.org/wiki/${json2.title}`)
            // const newItem={
            //     title,
            //     artistDisplayName,
            //     objectDate,
            //     imageUrl
            // }
            // console.log("newItem", newItem)
            setResourceButton(
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
                </div>
            )
            const display = (   
                    <div>       
                        <img className="image-x" src={json2.primaryImageSmall} alt="" width="150px" height="150px"/>        
                        <h6>Title: {json2.title}</h6>
                        <hr/>
                        <h7>Artist: {json2.artistDisplayName}</h7>
                        <br />
                        <h7>Year: {json2.objectDate}</h7>
                        <br />
                        <div><a href={`https://www.google.com/search?q=${json2.title}%20${json2.artistDisplayName}`} target="_blank">Find out more...</a></div>
                    </div>
                )
                newdisplays.push(display)
                console.log("displays",displays)
            }
                setDisplays(newdisplays)
            // return title,artistDisplayName,objectDate,imageUrl,inspiration;


        } catch (err) {
            console.error(err.message);
        }


    };  


    return (
        <div>
            <InspirationResult resourceButton={resourceButton} displays={displays}/>
        </div>
    )
} 

// return title,artistDisplayName,objectDate,imageUrl;