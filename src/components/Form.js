import React, {useState, useEffect} from 'react'

export default function Form() {

    const [inputText, setInputText] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    function handleChange (event) {
        return (event.target.value)
    }

    const handleSubmit = async () => {
        try {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${inputText}`
        
          );
    
          const json = await res.json();
          console.log("hiimageurl", json);
          setImageUrl(
            json.data[Math.floor(Math.random() * json.data.length)].images.original
              .url
          );
          setInputText("");
          return json;
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        
        <div>
            <input 
              type="text" 
              placeholder="search title, name, year, etc" 
              onChange={handleChange} 
              value={inputText}>
            </input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
