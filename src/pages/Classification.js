import React, {useState, useEffect} from 'react'
import ClassificationResult from './ClassificationResult'

export default function Classification() {
    const [resourceType, setResourceType] = useState("1")
    const [resourceButton, setResourceButton] = useState("")
    const [displays, setDisplays] = useState("Loading...")


    useEffect(()=>{
        handleClassification()
    },[resourceType])
    const handleClassification = async (event) => {
        // const depId = map_diplayName2departmentId["displayName"]
        // let department_name = 'Islamic Art';
        // let depid = map_diplayName2departmentId[department_name]
        // console.log('depId',depId)
        try{
            const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&departmentId=${resourceType}&q=%22%22`);
            // https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&departmentId=6&q=%22%22
            const json = await res.json();
            console.log("hijson", json)
            // let randomindex = Math.floor(Math.random()*(json.objectIDs.length-7))
            // console.log("randomindex", randomindex)
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
              }
            let newArr = json.objectIDs
            shuffle(newArr)
            newArr = newArr.slice(0,7);
            // const id = (json.objectIDs[Math.floor(Math.random()*json.objectIDs.length)]);
            // console.log("id",id)
            let newdisplays = []
            for (const id of newArr){
                const url= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id)
                console.log("url",url)
                const res2 = await fetch(url);
                const json2 = await res2.json();
                console.log("json2",json2)
            setResourceButton(
                <div className="container-fluid">
                    <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('1')}>American Decorative Arts</span>
                    <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('3')}>Ancient Near Eastern Art</span>
                    <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('4')}>Arms and Armor</span>
                    <span className="btn btn-danger" style={{cursor:'pointer'}} onClick={()=> setResourceType('5')}>Arts of Africa, Oceania, and the Americas</span>
                    <span className="btn btn-secondary" style={{cursor:'pointer'}} onClick={()=> setResourceType('6')}>Asian Art</span>
                    <span className="btn btn-dark" stype={{cursor:'pointer'}} onClick={()=> setResourceType('7')}>The Cloisters</span>
                    <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('8')}>The Costume Institute</span>
                    <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('9')}>Drawings and Prints</span>
                    <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('10')}>Egyptian Art</span>
                    <span className="btn btn-dark" stype={{cursor:'pointer'}} onClick={()=> setResourceType('11')}>European Paintings</span>
                    <span className="btn btn-warning" style={{cursor:'pointer'}} onClick={()=> setResourceType('12')}>European Sculpture and Decorative Arts</span>
                    <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('13')}>Greek and Roman Art</span>
                    <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('14')}>Islamic Art</span>
                    <span className="btn btn-danger" style={{cursor:'pointer'}} onClick={()=> setResourceType('15')}>The Robert Lehman Collection</span>
                    <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('16')}>The Libraries</span>
                    <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('17')}>Medieval Art</span>
                    <span className="btn btn-secondary" style={{cursor:'pointer'}} onClick={()=> setResourceType('18')}>Musical Instruments</span>
                    <span className="btn btn-success" style={{cursor:'pointer'}} onClick={()=> setResourceType('19')}>Photographs</span>
                    <span className="btn btn-info" style={{cursor:'pointer'}} onClick={()=> setResourceType('21')}>Modern Art</span>
            </div>
            )
            const display = (
                <span className="container">
                    <br />
                    <img className="image-x" src={json2.primaryImageSmall} alt="" width="150px" height="150px"/>
                    <br />
                    <div className="description-x">
                        <h7>Title: {json2.title}</h7>
                        <p>Artist: {json2.artistDisplayName}</p>
                        <p>Year: {json2.objectDate} </p>
                        <div><a href={`https://www.google.com/search?q=${json2.title}%20${json2.artistDisplayName}`} target="_blank">Find out more...</a></div>
                    </div>
                </span>
            )
            newdisplays.push(display)
            console.log("displays",displays)
        }
            setDisplays(newdisplays)

        } catch (err) {
            console.error(err.message);
        }


    };  
    return (
        <div>
                <ClassificationResult resourceButton={resourceButton} displays={displays}/>
        </div>
    )
} 