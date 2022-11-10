import { useState } from "react";

export default function RecoverForm() {
    const [submittedMessage, setSubmittedMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedMessage(
            <div className="alert alert-warning mt-3" role="alert">
                Caso haja alguma conta associada ao email informado, será
                enviado um link para a redefinição da senha! <br />
            </div>
        );
        e.target.reset();
    };

    return (
        <div className="forms">
            {submittedMessage}
            <form className="w-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="recover_email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="recover_email"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-dark btn-lg d-grid mx-auto col-4 mt-5"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
