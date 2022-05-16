import Navbar from "../components/navbar";
import RecoverForm from "../components/recover_form";

export default function Recover() {
    return (
        <div className="Recover">
            <Navbar />
            <header className="corpus">
                <h1 className="title mt-5 mb-5">Recuperar Senha</h1>
                <RecoverForm />
            </header>
        </div>
    )
}