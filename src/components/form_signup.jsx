import { useState } from "react";
import signup from "./signup.jsx";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginForm() {
    const [submittedMessage, setSubmittedMessage] = useState("");
    const [didRecaptcha, setDidRecaptcha] = useState(false);

    const handleRecaptcha = (value) => setDidRecaptcha(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (didRecaptcha) {
            const error = await signup(e);
            if (typeof error !== "undefined") {
                setSubmittedMessage(
                    <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>
                );
            } else {
                setSubmittedMessage(
                    <div className="alert alert-warning mt-3" role="alert">
                        Cadastro efetuado com sucesso!
                        <br />
                        Um email foi enviado para que possa ativar a conta.
                        <br />
                    </div>
                );
                e.target.reset();
            }
        }
    };

    return (
        <div className="forms">
            {submittedMessage}
            <form onSubmit={handleSubmit}>
                <div className="row mt-1 mb-3 align-items-center">
                    <div className="col-sm">
                        <label
                            htmlFor="signup_fname"
                            className="col-form-label"
                        >
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="signup_fname"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col">
                        <label
                            htmlFor="signup_lname"
                            className="col-form-label"
                        >
                            Sobrenome:
                        </label>
                        <input
                            type="text"
                            id="signup_lname"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label
                            htmlFor="signup_birthday"
                            className="col-form-label"
                        >
                            Data de Nascimento:
                        </label>
                        <input
                            type="date"
                            id="signup_birthday"
                            min="1900-01-01"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="signup_email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="signup_email"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="signup_password" className="form-label">
                            Senha:
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="signup_password"
                            required
                        />
                    </div>
                </div>
                <div className="row form-check mt-4 mb-3">
                    <div className="col">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="signup_accept"
                            required
                        />
                        <label
                            className="form-check-label"
                            htmlFor="signup_accept"
                        >
                            Aceito os Termos de Uso e a Política de Privacidade
                        </label>
                    </div>
                </div>
                <ReCAPTCHA
                    sitekey="6LdDlAEjAAAAAIzgfEdXhg73FxI9hzKbmLGjLqcg"
                    onChange={handleRecaptcha}
                />
                <button
                    type="submit"
                    className="dark-submit btn btn-dark btn-lg d-grid mx-auto col-4 mt-4"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
