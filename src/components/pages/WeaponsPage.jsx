import { useState } from "react";
import WeaponSSearch from "../searchs/WeaponSSearch"
import BladeSearch from "../searchs/BladeSearch";
import HandleSearch from "../searchs/HandleSearch";
import Weapon from "../Weapon";

const WeaponsPage = () => {
    const [selectedWeaponS, setSelectedWeaponS] = useState(null);
    const [selectedBlade, setSelectedBlade] = useState(null);
    const [selectedHandle, setSelectedHandle] = useState(null);

    const handleWeaponSelection = (data) =>{
        if(data.weaponS){
            setSelectedBlade(null);
            setSelectedHandle(null);
            setSelectedWeaponS(data.weaponS);
        }else if(data.blade){
            setSelectedWeaponS(null);
            setSelectedBlade(data.blade);
        }else{
            setSelectedWeaponS(null);
            setSelectedHandle(data.handle);
        }
       console.log(data);
    }

    return (  
        <div className="weapons-page">
            <Weapon selectedWeapons={[selectedWeaponS, selectedBlade, selectedHandle]}/>
            <div className="weapon-search">
                <WeaponSSearch onAddWeapon={handleWeaponSelection}/>
                <HandleSearch onAddWeapon={handleWeaponSelection}/>
                <BladeSearch onAddWeapon={handleWeaponSelection}/>
            </div>   
        </div>
    );
}
 
export default WeaponsPage;