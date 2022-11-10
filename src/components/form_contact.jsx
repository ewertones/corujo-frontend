import { useState } from "react";

export default function ContactForm() {
    const [submittedMessage, setSubmittedMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedMessage(
            <div className="alert alert-success mt-3" role="alert">
                Mensagem Enviada!
            </div>
        );
        e.target.reset();
    }

    return (
        <div className="forms">
            {submittedMessage}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="contact_fname" className="col-form-label">
                        Nome:
                    </label>
                    <input
                        type="text"
                        id="contact_fname"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact_email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="contact_email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact_msg" className="col-form-label">
                        Mensagem:
                    </label>
                    <textarea
                        id="contact_msg"
                        rows="5"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="contact_robot"
                        required
                    />
                    <label className="form-check-label" htmlFor="contact_robot">
                        Não sou um robô.
                    </label>
                </div>
                <button
                    type="submit"
                    className="dark-submit btn btn-dark btn-lg d-grid mx-auto col-4 mt-4"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
