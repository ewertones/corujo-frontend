import logo from "../assets/images/owl.png";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container container-fluid">
                <Link to="/" className="navbar-brand"><img src={logo} alt="logo" width="70px" /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-3 me-3 text-center"><Link to="/contato" className="nav-link">Contato</Link></li>
                        <li className="nav-item"><Link to="/entrar" type="button" className="nav-link btn btn-outline-warning">Entrar</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}