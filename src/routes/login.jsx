import Navbar from "../components/navbar";
import LoginForm from "../components/form_login";

export default function Login() {
    return (
        <div>
            <Navbar />
            <header className="container">
                <h2 className="subtitle mt-5 mb-5 text-center">Bem-vindo!</h2>
                <LoginForm />
            </header>
        </div>
    )
}