import Navbar from "../components/navbar";
import LoginForm from "../components/login_form";

export default function Login() {
    return (
        <div className="Login">
            <Navbar />
            <header className="corpus">
                <h1 className="Login-title title mt-5 mb-5">Bem-vindo!</h1>
                <LoginForm />
            </header>
        </div>
    )
}