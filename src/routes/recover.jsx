import Navbar from "../components/navbar";
import RecoverForm from "../components/form_recover";

export default function Recover() {
    return (
        <div>
            <Navbar />
            <header className="container">
                <h2 className="subtitle mt-5 mb-5 text-center">Esqueceu a senha?</h2>
                <RecoverForm />
            </header>
        </div>
    )
}