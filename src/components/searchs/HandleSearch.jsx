import { useState } from "react";
import useFetchGet from "../util/useFetchGet";

const HandleSearch = ({onAddWeapon}) => {
    const [shouldFecth, setShouldFecth] = useState(false);
    const {data, isPending, error} = useFetchGet('http://localhost:8080/weapon/handle', shouldFecth)
    const [selectedAmulets, setSelectedAmulets] = useState([null]);

    const showHandleList = () => {
        setShouldFecth(true);
    }

    return (  
        <div className="handle-search">
            <h2 style={{color:"white"}}>Handles</h2>
            <p style={{color:"white"}}>Look for the handles to build a normal weapon!
                Combine them with handles to build a weapon!
            </p>
            <button onClick={showHandleList}>Show Handles</button>
            <div className="show-search">
                <h3>Handles list</h3>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {data && data.map((handle) => {
                    return (
                        <div className="element-preview" key={handle.id}>
                            <h3 style={{color:"black"}}>{handle.name}</h3> 
                            <ul>
                                <li>Weight: {handle.weight} kg</li>
                                <li>Technique: {handle.technique}</li>
                                <li>Motivity: {handle.motivity}</li>
                                <li>Advance: {handle.advance}</li>                                
                            </ul>        
                            <button onClick={() => {onAddWeapon({handle})}}>Select Handle</button>
                        </div>                        
                    )
                })}
            </div>
        </div>
    );
}
 
export default HandleSearch;