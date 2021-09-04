import React, {useState, useEffect} from 'react'

export default function Classification() {
    const [resourceType, setResourceType] = useState("American%20Decorative%20Arts")
    const [title, setTitle] = useState("")
    const [artistDisplayName, setArtistDisplayName] = useState("")
    const [objectDate, setObjectDate] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [wiki, setWiki] = useState("")
    useEffect(()=>{
        handleClassification()
    },[resourceType])
    let map_diplayName2departmentId = {}
    // console.log("items",items) 
    useEffect(async ()=>{
        let bla = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
        let deps = (await bla.json())['departments']
        for(let item of deps){
            map_diplayName2departmentId[item.displayName] = item.departmentId
        }
    },[])
    console.log('map_diplayName2departmentId',map_diplayName2departmentId)
    let classification ="";
    const handleClassification = async (event) => {
        let department_name = 'Islamic Art'
        let depid = map_diplayName2departmentId[department_name]
        console.log('depid',depid)
        try{
            const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=""&hasImages=true&departmentId=${depid}`);
            // https://collectionapi.metmuseum.org/public/collection/v1/departments
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
            classification = (    
                <div>       
                    <img className="image-x" src={imageUrl} alt="" width="300px" height="300px"/>        
                    <h6>Title: {title}</h6>
                    <hr/>
                    <h7>Artist: {artistDisplayName}</h7>
                    <br />
                    <h7>Year: {objectDate}</h7>
                    <br />
                    <div><a href={wiki}>Find out more...</a></div>
                </div>
                )
            return classification;

        } catch (err) {
            console.error(err.message);
        }


};  
    return (
        <div className="container-fluid">
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType("American%20Decorative%20Artss")}>American Decorative Arts</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Ancient%20Near%20Eastern%20Art')}>Ancient Near Eastern Art</span>
                <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('Arms%20and%20Armor')}>Arms and Armor</span>
                <span className="btn btn-danger" style={{cursor:'pointer'}} onClick={()=> setResourceType('Arts%20of%20Africa,%20Oceania,%20and%20the%20Americas')}>Arts of Africa, Oceania, and the Americas</span>
                <span className="btn btn-secondary" style={{cursor:'pointer'}} onClick={()=> setResourceType('Asian%Art')}>Asian Art</span>
                <span className="btn btn-dark" stype={{cursor:'pointer'}} onClick={()=> setResourceType('The%20Cloisters')}>The Cloisters</span>
                <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('The%20Costume%20Institute')}>The Costume Institute</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Drawings%20and%20Prints')}>Drawings and Prints</span>
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('Egyptian%20Art')}>Egyptian Art</span>
                <span className="btn btn-dark" stype={{cursor:'pointer'}} onClick={()=> setResourceType('European%20Paintings')}>European Paintings</span>
                <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('European%20Sculpture%20and%20Decorative%20Arts')}>European Sculpture and Decorative Arts</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Greek%20and%20Roman%20Art')}>Greek and Roman Art</span>
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('Islamic%20Art')}>Islamic Art</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('The%20Robert%20Lehman%20Collection')}>The Robert Lehman Collection</span>
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('The%20Libraries')}>The Libraries</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Medieval%20Art')}>Medieval Art</span>
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('Musical%20Instruments')}>Musical Instruments</span>
                <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('Photographs')}>Photographs</span>
                <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('Modern%20Art')}>Modern Art</span>
                <div className="description-x"> 
                {classification}
                </div>
        </div>
    )
} 