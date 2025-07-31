const Home = () => {
    return (  
        <div className="home">  
            <div className="interaction-box">
                <div className="presentation-options">
                    <h2>Options</h2>
                    <br/>
                    <p><a href="/character.html">Character:</a> This option lets you to check the build choices that affect only your character stats, like amulets or attributes.</p>
                    <br/>
                    <p><a href="/#">Weapons:</a> This option lets you to check the build options that affect only to the weapon stats, like upgrading it, changing handles or modifying handles.</p>
                    <br/>
                    <p><a href="/#">Full Build:</a> This option lets you to check the build options that affect the whole character, with weapon, armor parts and amulets equipped, and attributes upgraded.</p>
                    <br/>                
                </div>
            </div>
        </div>
    );
}
 
export default Home;