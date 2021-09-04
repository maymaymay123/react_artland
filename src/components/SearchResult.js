import React, {useState, useEffect} from 'react'

export default function SearchResult() {
    const [inputText, setInputText] = useState("")
    const [displays, setDisplays] = useState([])
    
    function handleChange (event) {
        //console.log("event", event.target.value)
        setInputText(event.target.value)

    }
    useEffect(()=>{
        handleSubmit()
    },[])


    const handleSubmit = async (event) => {
        try{
            const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${inputText}`);
            const json = await res.json();
            console.log("hijson", json);
            const newArr = json.objectIDs.slice(0,3);
            console.log("sunflowers", newArr)
            let newdisplays = []
            for (const id of newArr){
                // const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
                // console.log("id",id)
                const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
                console.log("url",url)
                const res2 = await fetch(url);
                const json2 = await res2.json();
                console.log("json2",json2)
                // console.log("hiimg", imageUrl);
                // console.log("hititle",title)
                // setTitle(json2.title)
                // setArtistDisplayName(json2.artistDisplayName)
                // setObjectDate(json2.objectDate)
                // setImageUrl(json2.primaryImageSmall)
                // setWiki(`https://en.wikipedia.org/wiki/${json2.title}`)
                setInputText("")
                const display = (
                    <span className="container">
                        <br />
                        <img className="image-x" src={json2.primaryImageSmall} alt="" width="150px" height="150px"/>
                        <br />
                        <div className="description-x">
                            <h7>{json2.title}</h7>
                            <p>{json2.artistDisplayName}, {json2.objectDate} </p>
                        </div>
                    </span>
                )
                newdisplays.push(display)
                console.log("displays",displays)
            }
            setDisplays(newdisplays)
        } catch (err) {
            console.error(err.message)
        }
    
    };  
    return (
        <div className="input">
            <h1> Search Result: </h1>
            <input
              size= "50"
              type="text" 
              placeholder="search title, name, year, etc" 
              onChange={handleChange} 
              value={inputText}
            >
            </input>
            <button onClick={handleSubmit}>Search</button>
            <div>{displays}</div>
        </div>
    )
}
