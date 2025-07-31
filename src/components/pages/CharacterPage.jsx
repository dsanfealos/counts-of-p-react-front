import Character from "../Character";
import AmuletSearch from "../searchs/AmuletsSearch";

const CharacterPage = () => {
    return (  
        <div className="character-page">
            <Character></Character>
            <AmuletSearch></AmuletSearch>
        </div>
    );
}
 
export default CharacterPage;