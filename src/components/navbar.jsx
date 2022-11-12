import logo from "../assets/images/owl.png";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

export default function Navbar({ credentials, setCredentials, isLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        delete credentials["bearerToken"];
        setCredentials(JSON.stringify(credentials));
        navigate("/entrar");
    };

    function loginButton() {
        return (
            <li className="nav-item ms-2 me-2 text-center">
                <Link
                    to="/entrar"
                    type="button"
                    className="nav-link btn btn-outline-warning"
                >
                    Entrar
                </Link>
            </li>
        );
    }

    function logoutButton() {
        return (
            <li className="nav-item ms-2 me-2 text-center">
                <Link
                    to="/login"
                    type="button"
                    className="nav-link btn btn-outline-warning"
                    onClick={handleLogout}
                >
                    Sair
                </Link>
            </li>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" width="70px" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-2 me-2 text-center">
                            <a
                                className="nav-link"
                                href="https://api.corujo.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                API
                            </a>
                        </li>
                        <li className="nav-item ms-2 me-2 text-center">
                            <Link to="/contato" className="nav-link">
                                Contato
                            </Link>
                        </li>
                        {isLoggedIn() ? logoutButton() : loginButton()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
