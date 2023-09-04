
import styles from './stylesheets/Navbar.module.css'
import { Link } from 'react-router-dom';
const Navbar = () =>{

    const handleNav = (e) => {
        e.preventDefault();
        window.location.replace("/#projectSection")
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                    <Link onClick={(e) =>{e.preventDefault(); window.location.replace("/#projectSection")}}><li>My Work</li></Link>
                    <Link onClick={(e) =>{e.preventDefault(); window.location.replace("/#contactHeader")}}><li>Contact Me</li></Link>
                    <Link to="https://docs.google.com/document/d/1Ac2wwfNmb3JdmNhYKNB8-YeR32glgXnYRrt0NCKsBqM/edit?usp=sharing"><li>Resume</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
