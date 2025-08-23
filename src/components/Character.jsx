import { useState } from "react";
import getAmulet from "./searchs/AmuletsSearch"

const Character = (props) => {
    const [response, setResponse] = useState("");
    const attributesList = [
        { label: "Level", key: "level" },
        { label: "Vitality", key: "vitality" },
        { label: "Vigor", key: "vigor" },
        { label: "Capactiy", key: "capacity" },
        { label: "Technique", key: "technique" },
        { label: "Motivity", key: "motivity" },
        { label: "Advance", key: "advance" },
    ];
    const statsList = [
        { label: "Health", key: "Health" },
        { label: "Stamina", key: "Stamina" },
        { label: "Legion", key: "Legion" },
        { label: "Guard regain", key: "Guard Regain" },
        { label: "Physical Def", key: "Physical Def" },
        { label: "Physical Red", key: "Physical Red", isPercentage: true },
        { label: "Physical Res", key: "Physical Res" },
        { label: "Fire Def", key: "Fire Def" },
        { label: "Fire Red", key: "Fire Red", isPercentage: true },
        { label: "Fire Res", key: "Fire Res" },
        { label: "Electric Def", key: "Electric Def" },
        { label: "Electric Red", key: "Electric Red", isPercentage: true },
        { label: "Electric Res", key: "Electric Res" },
        { label: "Acid Def", key: "Acid Def" },
        { label: "Acid Red", key: "Acid Red", isPercentage: true },
        { label: "Acid Res", key: "Acid Res" },
        { label: "Disruption", key: "Disruption" },
        { label: "Shock", key: "Shock" },
        { label: "Break", key: "Break" },
        { label: "Slash Red", key: "Slash Red", isPercentage: true },
        { label: "Strike Red", key: "Strike Red", isPercentage: true },
        { label: "Pierce Red", key: "Pierce Red", isPercentage: true },
        { label: "Weight", key: "Weight" },
    ];

    function calculate(event) {
        const formData = new FormData(event.target);
        event.preventDefault();        
        const amuletList = props.selectedAmulets;
        let amuletIds = [];
        console.log(amuletList)
        props.selectedAmulets.forEach(x => amuletIds.push(x.id))
        console.log(amuletIds)
        let body = `{\n
                    \"initial\":{\n
                        \"level\":${formData.get("initialLevel")},\n
                        \"vitality\":${formData.get("initialVitality")},\n
                        \"vigor\":${formData.get("initialVigor")},\n
                        \"capacity\":${formData.get("initialCapacity")},\n
                        \"motivity\":${formData.get("initialTechnique")},\n
                        \"technique\":${formData.get("initialMotivity")},\n
                        \"advance\":${formData.get("initialAdvance")}\n
                    },\n
                    \"final\":{\n
                        \"level\":${formData.get("finalLevel")},\n
                        \"vitality\":${formData.get("finalVitality")},\n
                        \"vigor\":${formData.get("finalVigor")},\n
                        \"capacity\":${formData.get("finalCapacity")},\n
                        \"motivity\":${formData.get("finalTechnique")},\n
                        \"technique\":${formData.get("finalMotivity")},\n
                        \"advance\":${formData.get("finalAdvance")},\n
                        \"amuletIds\":[${amuletIds}]\n
                    }\n
                }`;
        if(checkLevelInput(formData)){
            fetchPostSimulate(body);
            document.getElementById("error-level").style.visibility = "hidden";
        }else{
            document.getElementById("error-level").style.visibility = "visible";
        }

    }

    function checkLevelInput(formData){
        let diffLevel = formData.get("finalLevel") - formData.get("initialLevel");
        let diffVitality = formData.get("finalVitality") - formData.get("initialVitality");
        let diffVigor = formData.get("finalVigor") - formData.get("initialVigor");
        let diffCapacity = formData.get("finalCapacity") - formData.get("initialCapacity");
        let diffTechnique = formData.get("finalTechnique") - formData.get("initialTechnique");
        let diffMotivity = formData.get("finalMotivity") - formData.get("initialMotivity");
        let diffAdvance = formData.get("finalAdvance") - formData.get("initialAdvance");

        const sum = diffVitality + diffVigor + diffCapacity + diffTechnique + diffMotivity + diffAdvance;
        
        return diffLevel === sum;
    }

    function fetchPostSimulate(bodyRequest){
        const urlSimulate = "http://localhost:8080/player/simulate";
        fetch(urlSimulate, {
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
        })
    }

    return (  
        <div className="character">
            <div className="interaction-box">
                <h2 style={{
                    color:"white"
                }}>Character</h2>
                <p style={{
                    color:"white"
                }}>Use this mode to calculate the resources needed to upgrade from level A to level B</p>
                <form onSubmit={calculate}>
                    <button type="submit">Calculate</button> 
                    <div className="selection">
                        <h3>Selection</h3>
                        <p id="error-level" style={{color:"yellow", visibility:"hidden"}}>Wrong number of attributes for that level difference.</p>
                        <div className="selection-initial">
                            <p>Inicial</p>
                            <ul>
                                <li>
                                    <label>Nivel: </label>
                                    <input type="number" name="initialLevel" min={10} defaultValue={10}></input>
                                    </li>
                                <li>
                                    <label>Vitalidad:</label> 
                                    <input type="number" name="initialVitality" min={8} defaultValue={8}></input>
                                </li>
                                <li>
                                    <label>Vigor:</label> 
                                    <input type="number" name="initialVigor" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Capacidad:</label> 
                                    <input type="number" name="initialCapacity" min={7} defaultValue={7}></input>
                                </li>
                                <li>
                                    <label>Técnica:</label> 
                                    <input type="number" name="initialTechnique" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Motricidad:</label> 
                                    <input type="number" name="initialMotivity" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Avance: </label>
                                    <input type="number" name="initialAdvance" min={6} defaultValue={6}></input>
                                </li>
                            </ul>
                        </div>
                        <div className="selection-final">
                            <p>Final</p>
                            <ul>
                                <li>
                                    <label>Nivel: </label>
                                    <input type="number" name="finalLevel" min={10} defaultValue={10}></input>
                                    </li>
                                <li>
                                    <label>Vitalidad:</label> 
                                    <input type="number" name="finalVitality" min={8} defaultValue={8}></input>
                                </li>
                                <li>
                                    <label>Vigor:</label> 
                                    <input type="number" name="finalVigor" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Capacidad:</label> 
                                    <input type="number" name="finalCapacity" min={7} defaultValue={7}></input>
                                </li>
                                <li>
                                    <label>Técnica:</label> 
                                    <input type="number" name="finalTechnique" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Motricidad:</label> 
                                    <input type="number" name="finalMotivity" min={5} defaultValue={5}></input>
                                </li>
                                <li>
                                    <label>Avance: </label>
                                    <input type="number" name="finalAdvance" min={6} defaultValue={6}></input>
                                </li>
                            </ul>
                        </div>
                        <div className="amulet-selection">
                            <p>Amulets selected:</p>
                            <ul>
                                {Array.isArray(props.selectedAmulets) && props.selectedAmulets.map((selected) => {
                                    return (<li key={selected.id}>
                                        {selected.name} <span style={{color:"black"}}>||</span>
                                        </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </form>
                <div className="result">
                    <h3>Result</h3>
                    {response && <div>
                        <div className="result-attributes">
                            <p>Attributes</p>
                            <ul>
                                {attributesList.map(({label, key}) => (
                                    <li key={key}>
                                        {label}:{" "}
                                        <span className="result-number">
                                            {response[key]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="result-stats">
                            <p>Stats</p>
                            <ul>
                                {statsList.map(({ label, key, isPercentage }) => (
                                    <li key={key}>
                                    {label}:{" "}
                                    <span className="result-number">
                                        {response.stats[key]}
                                        {isPercentage ? "%" : ""}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <p style={{float:"left", clear:"left", color:"rgb(0, 195, 255)"}}>Ergo: {response.ergoCost}</p>
                    </div>}
                </div>
            </div>
        </div>        
    );
}
 
export default Character;