import Navbar from "../components/navbar";
import SignupForm from "../components/form_signup";

export default function Signup() {
    return (
        <div>
            <Navbar />
            <header className="container">
                <h2 className="subtitle mt-4 mb-5 text-center">Cadastre-se!</h2>
                <SignupForm />
            </header>
        </div>
    )
}