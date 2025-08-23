import {Link} from 'react-router-dom';

const Nabvar = () => {
    return (  
        <nav className="nabvar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/character">Character</Link></li>
                <li><Link to="/weapon">Weapons</Link></li>
                <li><Link to="/#">Full Build</Link></li>
            </ul>
        </nav>
    );
}
 
export default Nabvar;