import React, {useState, useEffect} from 'react'


export default function Display() {
    const [imageUrl, setImageUrl] = useState("")
    const handleCallApiAgain = async (event) => {
        try {
            const res = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Van%20Gogh"
        );
            const json = await res.json();
              console.log("hijson", json)
              const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
              console.log("id",id)
              const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
              console.log("url",url)
             const res2 = await fetch(url
             );
             const json2 = await res2.json();
              console.log("hiimg", imageUrl);
            setImageUrl(json2.primaryImageSmall)
            return imageUrl;
            } catch (err) {
            console.error(err.message);
            }
      };

      useEffect (()=>{
          handleCallApiAgain()
      },[])

    return (
        <span>
            <h3>Highlight of the Day</h3>
            <span className="imageContainer">
            <a href="highlight">
                <img src={imageUrl} alt="" width="300px" height="300px"/>
            </a>
            </span>
        </span>
    )
}
