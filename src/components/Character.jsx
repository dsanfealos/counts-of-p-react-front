const Character = () => {
    return (  
        <div className="character">
            <div className="interaction-box">
                <h2 style={{
                    color:"white"
                }}>Character</h2>
                <p style={{
                    color:"white"
                }}>Use this mode to calculate the resources needed to upgrade from level A to level B</p>
                <button id="btn-calculate">Calculate</button> 
                <div className="selection">
                    <h3>Selection</h3>
                    <ul>
                        <li>Patata 1</li>
                        <li>Patata 2</li>
                        <li>Patata 3</li>
                        <li>Patata 4</li>
                        <li>Patata 5</li>
                    </ul>
                </div>
                <div className="result">
                    <h3>Result</h3>
                    <ul>
                        <li>Patata 1</li>
                        <li>Patata 2</li>
                        <li>Patata 3</li>
                        <li>Patata 4</li>
                        <li>Patata 5</li>
                    </ul>
                </div>
            </div>
        </div>        
    );
}
 
export default Character;