import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <form>
            < div className="row mt-1 mb-3 align-items-center">
                < div className="col-sm-1">
                    <label htmlFor="signup_fname" className="col-form-label">Nome:</label>
                </div>
                < div className="col-sm-2">
                    <input type="text" id="signup_fname" className="form-control" />
                </div>
                < div className="col-sm-1">
                    <label htmlFor="signup_lname" className="col-form-label">Sobrenome:</label>
                </div>
                < div className="col-sm-3">
                    <input type="text" id="signup_lname" className="form-control" />
                </div>
                < div className="col-sm-2">
                    <label htmlFor="signup_birthday" className="col-form-label">Data de Nascimento:</label>
                </div>
                < div className="col-sm-3">
                    <input type="date" id="signup_birthday" min="1900-01-01" max="2003-01-01" className="form-control" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="signup_email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="signup_email" />
            </div>
            <div className="mb-3">
                <label htmlFor="signup_password" className="form-label">Senha:</label>
                <input type="password" className="form-control" id="signup_password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="signup_remember" />
                <label className="form-check-label" htmlFor="signup_remember">Aceito os Termos de Uso e a Política de Privacidade</label>
            </div>
            <button type="submit" className="dark-submit btn btn-dark btn-lg d-grid mx-auto col-4 mt-4">Entrar</button>
        </form >
    )
}