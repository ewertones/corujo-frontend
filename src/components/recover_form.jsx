import "../assets/styles/forms.css";

export default function RecoverForm() {
    return (
        <form className="Login-form">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="dark-submit btn btn-primary btn-lg d-grid mx-auto col-4 mt-5">Enviar</button>
        </form>
    )
}