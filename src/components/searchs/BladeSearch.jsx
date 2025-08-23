import { useState } from "react";
import useFetchGet from "../util/useFetchGet";

const BladeSearch = ({onAddWeapon}) => {
    const [shouldFecth, setShouldFecth] = useState(false);
    const {data, isPending, error} = useFetchGet('http://localhost:8080/weapon/blade', shouldFecth)
    const [selectedAmulets, setSelectedAmulets] = useState([null]);

    const showBladeList = () => {
        setShouldFecth(true);
    }

    return (  
        <div className="blade-search">
            <h2 style={{color:"white"}}>Blades</h2>
            <p style={{color:"white"}}>Look for the blades and their stats and upgrade costs at each level! 
                Combine them with handles to build a weapon!</p>
            <button onClick={showBladeList}>Show Blades</button>
            <div className="show-search">
                <h3>Blades list</h3>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {data && data.map((blade) => {
                    return (
                        <div className="element-preview" key={blade.id}>
                            <h3 style={{color:"black"}}>{blade.name}</h3> 
                            <ul>
                                <li>Level: {blade.currentLevel["currentLevel"]}</li>
                                <li>Physical Attack: {blade.physicalAttack}</li>
                                <li>Elemental Attack: {blade.elementalAttack}</li>
                                <li>Total Attack: {blade.totalAttack}</li>
                                <li>Weight: {blade.weight} kg</li>                              
                            </ul>        
                            <button onClick={() => {onAddWeapon({blade})}}>Select Blade</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default BladeSearch;