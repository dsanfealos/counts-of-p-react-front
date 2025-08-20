import { useState } from "react";
import Character from "../Character";
import AmuletSearch from "../searchs/AmuletsSearch";

const CharacterPage = () => {
    const [selectedList, setSelectedList] = useState([]);

    const handleAddAmulet = (data) => {
        if(!selectedList.includes(data.amulet) && selectedList.length < 5){
            setSelectedList(prev => [...prev, data.amulet]);
        }        
    }

    return (  
        <div className="character-page">
            <Character selectedAmulets={selectedList}></Character>
            <AmuletSearch onAddAmulet= {handleAddAmulet}></AmuletSearch>
        </div>
    );
}
 
export default CharacterPage;