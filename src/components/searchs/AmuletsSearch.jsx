import { useEffect, useState } from "react";
import useFetchGet from "../util/useFetchGet";

const AmuletSearch = () => {
    const [shouldFecth, setShouldFecth] = useState(false);
    const {data, isPending, error} = useFetchGet('https://countsofp.com/player/amulet', shouldFecth)
    
    const showAmuletList = () => { 
        setShouldFecth(true);     
    }
    const addAmulet = (data) =>{
        return(data.amulet.name);
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
                                <li>Stats increased: 
                                    {amulet.statIncreaseAmus.length == 0 && <div style={{color:"black", marginLeft:"20px"}}>None</div>}
                                    {amulet.statIncreaseAmus.map((increase) => {
                                    return (
                                    <div key={increase.id} style={{marginLeft:"20px"}}>Stat: {increase.stat.name}, Flat Increase: {increase.flatIncrease},
                                     Percentual Increase: {Math.floor(increase.percentageIncrease *100)}%</div>
                                )
                                })}</li>
                                <li>Attributes increased: 
                                    {amulet.attributeIncreaseAmus.length == 0 && <div style={{color:"black", marginLeft:"20px"}}>None</div>}
                                    {amulet.attributeIncreaseAmus.map((increase) => {
                                    return (
                                    <div key={increase.id} style={{marginLeft:"20px"}}>Attribute: {increase.attribute.name}, Flat Increase: {increase.flatIncrease}</div>
                                )
                                })}</li>
                            </ul>                       
                            <button onClick={() => addAmulet({amulet})}>Add to build</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AmuletSearch;