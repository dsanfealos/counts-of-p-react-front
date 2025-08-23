import { useState } from "react";
import useFetchGet from "../util/useFetchGet";

const WeaponSSearch = ({onAddWeapon}) => {
    const [shouldFecth, setShouldFecth] = useState(false);
    const {data, isPending, error} = useFetchGet('http://localhost:8080/weapon/S', shouldFecth)
    const [selectedAmulets, setSelectedAmulets] = useState([null]);

    const showWeaponSList = () => {
        setShouldFecth(true);
    }

    return (  
        <div className="weapon-s-search">
            <h2 style={{color:"white"}}>Weapons</h2>
            <p style={{color:"white"}}>Look for the best special weapons and their stats and upgrade costs at each level! 
                They are not combinable.</p>
            <button onClick={showWeaponSList}>Show Special Weapons</button>
            <div className="show-search">
                <h3>Special weapons list</h3>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {data && data.map((weaponS) => {
                    return (
                        <div className="element-preview" key={weaponS.id}>
                            <h3 style={{color:"black"}}>{weaponS.name}</h3> 
                            <ul>
                                <li>Level: {weaponS.currentLevel["currentLevel"]}</li>
                                <li>Physical Attack: {weaponS.physicalAttack}</li>
                                <li>Elemental Attack: {weaponS.elementalAttack}</li>
                                <li>Total Attack: {weaponS.totalAttack}</li>
                                <li>Weight: {weaponS.weight} kg</li>
                                <li>Technique: {weaponS.technique}</li>
                                <li>Motivity: {weaponS.motivity}</li>
                                <li>Advance: {weaponS.advance}</li>                                
                            </ul>        
                            <button onClick={() => {onAddWeapon({weaponS})}}>Select Weapon</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default WeaponSSearch;