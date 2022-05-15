import "../assets/styles/navbar.css";
import logo from "../assets/images/owl.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <ul className="Navbar-items">
                <Link to="/" className="Navbar-logo"><img src={logo} alt="logo" width="70px" /></Link>
                <Link to="/login" type="button" className="Navbar-login btn btn-outline-warning">Entrar</Link>
            </ul>
        </nav>
    )
}