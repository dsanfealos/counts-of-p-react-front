import { useEffect, useState } from "react";
import useFetchGet from "../util/useFetchGet";

const AmuletSearch = () => {
    const [shouldFecth, setShouldFecth] = useState(false);
    const {data, isPending, error} = useFetchGet('https://countsofp.com/player/amulet', shouldFecth)
    
    const showAmuletList = () => { 
        setShouldFecth(true);     
    }

    return (  
        <div className="amulet-search">
            <h2 style={{color:"white"}}>Amulets</h2>
            <p style={{color:"white"}}>Look for the best amulets for your build!</p>
            <button onClick={showAmuletList}>Show</button>
            <div className="show-amulets">
                <h3>Amulet list</h3>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {data && data.map((amulet) => {
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
                            <button>Add to build</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AmuletSearch;