import { useState } from "react";

const AmuletSearch = () => {
    const [amulets, setAmulets] = useState([]);
    
    const showAmuletList = () => {
        fetch("https://countsofp.com/player/amulet")
        .then(response => 
            response.json()
        ).then(data => {
            setAmulets(data)
            console.log(data);
        })
    }

    return (  
        <div className="amulet-search">
            <h2 style={{color:"white"}}>Amulets</h2>
            <p style={{color:"white"}}>Look for the best amulets for your build!</p>
            <button onClick={showAmuletList}>Show</button>
            <div className="show-amulets">
                <h3>Result</h3>
                {amulets.map((amulet) => {
                    return (
                        <div className="amulet-preview" key={amulet.id}>
                            <h3 style={{color:"black"}}>{amulet.name}</h3> 
                            <ul>
                                <li>Id: {amulet.id}</li>
                                <li>Description: {amulet.description}</li>
                                <li>Weigth: {amulet.weight} kg</li>
                                <li>Stats increased: </li>
                                <li>Attributes increased: </li>
                            </ul>                       
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AmuletSearch;