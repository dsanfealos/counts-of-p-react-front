import { useEffect, useState } from "react";

const Weapon = (props) => {
    const [response, setResponse] = useState("");
    const [weaponS, setWeaponS] = useState();
    const [blade, setBlade] = useState();
    const [handle, setHandle] = useState();
    const [weightCombined, setWeightCombined] = useState();
    const stats =[
        { label: "Name", key: "name" },
        { label: "Physical Att.", key: "physicalAttack" },
        { label: "Elemental Att.", key: "elementalAttack" },
        { label: "Total Att.", key: "totalAttack" },
        { label: "Technique", key: "technique" },
        { label: "Motivity", key: "motivity" },
        { label: "Advance", key: "advance" },
        { label: "Weight", key: "weight" }
    ]

    function calculate(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        let body="";
        const isSpecial = (weaponS != null);
        if(isSpecial){
            body=`{
                    \"weaponName\":\"${weaponS.name}\",
                    \"currentLevel\":${formData.get("initialLevel")},
                    \"finalLevel\":${formData.get("finalLevel")}
                }`;
        }else{
            body=`{
                    \"bladeName\":\"${blade.name}\",
                    \"currentLevel\":${formData.get("initialLevel")},
                    \"finalLevel\":${formData.get("finalLevel")},
                    \"handleId\":\"${handle.id}\"
                }`;
        }
        fetchPostUpgrade(isSpecial, body);
    }

    function fetchPostUpgrade(isSpecial, bodyRequest){
        let urlUpgrade;
        if(isSpecial){
            urlUpgrade= "http://localhost:8080/weapon/S/upgrade";
        }else{
            urlUpgrade= "http://localhost:8080/weapon/N/upgrade"
        }
        fetch(urlUpgrade, {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: bodyRequest
        })
        .then(response => response.json())
        .then(data => {
            setResponse(data);
        });
    }

    useEffect(() => {
        setWeaponS(props.selectedWeapons[0]);
        setBlade(props.selectedWeapons[1]);
        setHandle(props.selectedWeapons[2]);
        if(props.selectedWeapons[1] && 
            props.selectedWeapons[2]){
            setWeightCombined(props.selectedWeapons[2].weight + 
                props.selectedWeapons[1].weight)
        }else{
            setWeightCombined(null);
        }
    },[props])

    return (  
        <div className="weapon">
            <div className="interaction-box">
                <h2 style={{
                    color:"white"
                }}>Character</h2>
                <p style={{
                    color:"white"
                }}>Use this mode to calculate the resources needed to upgrade a weapon or change/modify its handle.</p>
                <form onSubmit={calculate}>
                    <button type="submit">Calculate</button> 
                    <div className="selection">
                        <h3>Selection</h3>
                        <div className="selection-initial">
                            {weaponS && 
                            <ul>
                                <li>
                                    <label>Initial Level: </label>
                                    <input type="number" name="initialLevel" min={1} max={5} defaultValue={1}></input>
                                </li>
                                <li>
                                    <label>Final Level: </label>
                                    <input type="number" name="finalLevel" min={2} max={6} defaultValue={6}></input>
                                </li>
                                <li>
                                    <label>Physical Att.:</label> 
                                    <div>{weaponS.physicalAttack}</div>
                                </li>
                                <li>
                                    <label>Elemental Att.:</label> 
                                    <div>{weaponS.elementalAttack}</div>
                                </li>
                                <li>
                                    <label>Total Att.:</label> 
                                    <div>{weaponS.totalAttack}</div>
                                </li>
                                <li>
                                    <label>Technique:</label> 
                                    <div>{weaponS.technique}</div>
                                </li>
                                <li>
                                    <label>Motivity: </label>
                                    <div>{weaponS.motivity}</div>
                                </li>
                                <li>
                                    <label>Advance: </label>
                                    <div>{weaponS.advance}</div>
                                </li>
                                <li>
                                    <label>Weight:</label> 
                                    <div>{weaponS.weight} kg</div>
                                </li>
                            </ul>
                            }
                            {blade && 
                            <ul>
                                <li>
                                    <label>Initial Level: </label>
                                    <input type="number" name="initialLevel" min={1} max={10} defaultValue={1}></input>
                                </li>
                                <li>
                                    <label>Final Level: </label>
                                    <input type="number" name="finalLevel" min={2} max={11} defaultValue={11}></input>
                                </li>
                                <li>
                                    <label>Physical Att.:</label> 
                                    <div>{blade.physicalAttack}</div>
                                </li>
                                <li>
                                    <label>Elemental Att.:</label> 
                                    <div>{blade.elementalAttack}</div>
                                </li>
                                <li>
                                    <label>Total Att.:</label> 
                                    <div>{blade.totalAttack}</div>
                                </li>
                                </ul>
                            }
                            {handle &&
                                <ul>
                                <li>
                                    <label>Technique:</label> 
                                    <div>{handle.technique}</div>
                                </li>
                                <li>
                                    <label>Motivity: </label>
                                    <div>{handle.motivity}</div>
                                </li>
                                <li>
                                    <label>Advance: </label>
                                    <div>{handle.advance}</div>
                                </li>
                            </ul>
                            }
                            {weightCombined &&                             
                                <ul><li>
                                    <label>Weight:</label> 
                                    <div>{weightCombined} kg</div>
                                </li></ul>
                            }                            
                        </div>
                        <div>
                            <p>Selected Weapon</p>
                            {weaponS && <div>{weaponS.name}</div>}
                            {blade && <div>{blade.name}</div>}
                            {handle && <div>{handle.name}</div>}
                        </div>
                    </div>
                </form>
                <div className="result">
                    <h3>Result</h3>
                    {response && <div>
                        <div className="result-stats">
                            <p>Stats</p>
                            {weaponS &&<ul>
                                {stats.map(({label, key}) =>(
                                    <li key={key}>{label}: {" "}<span style={{color:"black"}}>{response.stats[key]}</span></li>
                                ))}
                                <li>Current Level: <span style={{color:"black"}}>{response.stats.currentLevel.currentLevel}</span></li>
                            </ul>}
                            {!weaponS &&<ul>
                                {stats.map(({label, key}) =>(
                                    <li key={key}>{label}: {" "}<span style={{color:"black"}}>{response[key]}</span></li>
                                ))}
                                <li>Current Level: <span style={{color:"black"}}>{response.blade.currentLevel.currentLevel}</span></li>
                            </ul>}
                        </div>
                        <p style={{float:"left", color:"rgb(0, 195, 255)"}}>Ergo: {response.ergoCost}</p>
                        <div style={{clear:"both", textAlign:"left", marginLeft:"30px"}}>
                            Materials: {Object.entries(response.materials).map(([key, value], index) =>(
                                <p key={index}>{key}: {" "}{value}</p>
                        ))}</div>                        
                    </div>}
                </div>
            </div>
        </div>
    );
}
 
export default Weapon;