import '../styles/navigation.css'
import { Link } from 'react-router-dom';
import cubeImage from '../assets/blender_cube.png'
import avatar from '../assets/unknown_user_avatar.png'

function Navbar(){
    return(
        <div className = "nav-main-container">
            <Link to ="/" className="nav-logo-container">
                <img src={cubeImage} className="logo-image"></img>
                <h2 className= "logo-text" >BaseCube</h2>
            </Link>
            <div className = "nav-elements">
            <ul className= "nav-list">
                <li className= "nav-button">
                    <Link to ="/" >
                        <span>Главная</span>
                    </Link>
                </li>
                <li className= "nav-button">
                    <Link to ="/settings" >
                        <span>Настройки</span>
                    </Link>
                </li>
                <li className= "nav-button">
                    <Link to ="/subscription" >
                        <span>О подписке</span>
                    </Link>
                </li>
                <li className= "nav-button">
                    <Link to ="/account" >
                        <img src={avatar} className="user-avatar"></img>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        )
    }

export default Navbar