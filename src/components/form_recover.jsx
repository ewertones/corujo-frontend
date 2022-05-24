export default function RecoverForm() {
    return (
        <form className="w-auto">
            <div className="mb-3">
                <label htmlFor="recover_email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="recover_email" />
            </div>
            <button type="submit" className="btn btn-dark btn-lg d-grid mx-auto col-4 mt-5">Enviar</button>
        </form>
    )
}