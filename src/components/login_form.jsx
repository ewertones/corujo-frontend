import "../assets/styles/forms.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <form className="Login-form">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                <Link to="/recover" type="button" className="Navbar-login">Esqueceu?</Link>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Lembrar-me</label>
            </div>
            <button type="submit" className="dark-submit btn btn-primary btn-lg d-grid mx-auto col-4 mt-4">Entrar</button>
        </form>
    )
}