import "./Navbar.css";
import logo from "../Assets/Images/owl.png";

export default Navbar;

function Navbar() {
    return (
        <nav className='Navbar'>
            <ul className="Navbar-items">
                <a href="/" className="Navbar-logo"><img src={logo} alt="logo" width="70px" /></a>
                <button type="button" className="Navbar-login btn btn-outline-warning" href="/entrar">Entrar</button>
            </ul>
        </nav>
    )
}