const Character = () => {
    const ergo = 0;
    return (  
        <div className="character">
            <div className="interaction-box">
                <h2 style={{
                    color:"white"
                }}>Character</h2>
                <p style={{
                    color:"white"
                }}>Use this mode to calculate the resources needed to upgrade from level A to level B</p>
                <button>Calculate</button> 
                <div className="selection">
                    <h3>Selection</h3>
                    <div className="selection-initial">
                        <p>Inicial</p>
                        <ul>
                            <li>
                                <label>Nivel: </label>
                                <input type="number" min={9} defaultValue={9}></input>
                                </li>
                            <li>
                                <label>Vitalidad:</label> 
                                <input type="number"></input>
                            </li>
                            <li>
                                <label>Vigor:</label> 
                                <input type="number"></input>
                            </li>
                            <li>
                                <label>Capacidad:</label> 
                                <input type="number"></input>
                            </li>
                            <li>
                                <label>Técnica:</label> 
                                <input type="number"></input>
                            </li>
                            <li>
                                <label>Motricidad:</label> 
                                <input type="number"></input>
                            </li>
                            <li>
                                <label>Avance: </label>
                                <input type="number"></input>
                            </li>
                        </ul>
                    </div>
                    <div className="selection-final">
                        <p>Final</p>
                        <ul>
                        <li>
                            <label>Nivel: </label>
                            <input type="number" min={9} defaultValue={9}></input>
                            </li>
                        <li>
                            <label>Vitalidad:</label> 
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Vigor:</label> 
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Capacidad:</label> 
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Técnica:</label> 
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Motricidad:</label> 
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>Avance: </label>
                            <input type="number"></input>
                        </li>
                    </ul>
                    </div>
                    <div className="amulet-selection">
                        <p>Amulets selected:</p>
                        <ul>
                            <li>Amuleto de Fuerza</li>
                            <li>Amuleto de Venganza</li>
                            <li>Amuleto de Tortura</li>
                            <li>Amuleto de Dormir</li>
                            <li>Amuleto de Sobra</li>
                        </ul>
                    </div>
                </div>
                <div className="result">
                    <h3>Result</h3>
                    <div className="result-attributes">
                        <p>Attributes</p>
                        <ul>
                            <li>Nivel: </li>
                            <li>Vitalidad: </li>
                            <li>Vigor: </li>
                            <li>Capacidad: </li>
                            <li>Técnica: </li>
                            <li>Motricidad: </li>
                            <li>Avance: </li>
                        </ul>
                    </div>
                    <div className="result-stats">
                        <p>Stats</p>
                        <ul>
                            <li>Health: </li>
                            <li>Stamina: </li>
                            <li>Legion: </li>
                            <li>Guard regain: </li>
                            <li>Physical Def: </li>
                            <li>Physical Red: </li>
                            <li>Physical Res: </li>
                            <li>Fire Def: </li>
                            <li>Fire Red: </li>
                            <li>Fire Res: </li>
                            <li>Electric Def: </li>
                            <li>Electric Red: </li>
                            <li>Electric Res: </li>
                            <li>Acid Def: </li>
                            <li>Acid Red: </li>
                            <li>Acid Res: </li>
                            <li>Disruption: </li>
                            <li>Shock: </li>
                            <li>Break: </li>
                            <li>Slash Red: </li>
                            <li>Strike Red: </li>
                            <li>Pierce Red: </li>
                            <li>Weight: </li>
                        </ul>
                    </div>
                    
                    <p style={{float:"left", clear:"left", color:"rgb(0, 195, 255)"}}>Ergo: {ergo}</p>
                </div>
            </div>
        </div>        
    );
}
 
export default Character;