import React, {useState, useEffect} from 'react'
import ClassificationResult from './ClassificationResult'

export default function Classification() {
    const [resourceType, setResourceType] = useState("1")
    // const [title, setTitle] = useState("")
    // const [artistDisplayName, setArtistDisplayName] = useState("")
    // const [objectDate, setObjectDate] = useState("");
    // const [imageUrl, setImageUrl] = useState("")
    // const [wiki, setWiki] = useState("")
    const [resourceButton, setResourceButton] = useState("")
    const [displays, setDisplays] = useState("Loading...")


    useEffect(()=>{
        handleClassification()
    },[resourceType])
    // let map_diplayName2departmentId = {}
    // console.log("items",items) 

    // useEffect(()=>{
    //     getDepartment()
    // },[])

    // const getDepartment = async(event) =>{
    //     let bla = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
    //     let deps = (await bla.json())['departments']
    //     //console.log("deps", deps)
    //     for(let item of deps){
    //         let departmentName = item.displayName
    //         console.log("departmentName", departmentName)
    //     //     console.log("item", item)
    //     // map_diplayName2departmentId[item.displayName] = item.departmentId
    //     }
    //     // console.log('map_diplayName2departmentId',map_diplayName2departmentId)
    // }

    // useEffect(async ()=>{
    //     let bla = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
    //     let deps = (await bla.json())['departments']
    //     for(let item of deps){
    //         map_diplayName2departmentId[item.displayName] = item.departmentId
    //     }
    // },[])
    // console.log('map_diplayName2departmentId',map_diplayName2departmentId)
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
            // let oneItem = (  
            //     <div>       
            //         <img className="image-x" src={imageUrl} alt="" width="300px" height="300px"/>        
            //         <h6>Title: {title}</h6>
            //         <hr/>
            //         <h7>Artist: {artistDisplayName}</h7>
            //         <br />
            //         <h7>Year: {objectDate}</h7>
            //         <br />
            //         <div><a href={wiki}>Find out more...</a></div>
            //     </div>
            // )
            // classification.push(oneItem)
            // console.log("classification",oneItem)
            // return classification;

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