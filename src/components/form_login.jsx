import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="login_email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="login_email" />
            </div>
            <div className="mb-3">
                <label htmlFor="login_password" className="form-label">Senha:</label>
                <input type="password" className="form-control" id="login_password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="login_remember" />
                <label className="form-check-label" htmlFor="login_remember">Lembrar-me</label>
            </div>
            <div>
                <small><br />Esqueceu a senha? <Link to="/recuperar_senha" type="button" className="Navbar-login">Recuperar.</Link></small>
                <small><br />Ainda não tem uma conta? <Link to="/cadastrar" type="button" className="Navbar-signup">Cadastre-se.</Link></small>
            </div>
            <button type="submit" className="dark-submit btn btn-dark btn-lg d-grid mx-auto col-4 mt-4">Entrar</button>
        </form >
    )
}