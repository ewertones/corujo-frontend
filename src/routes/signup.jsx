import SignupForm from "../components/form_signup";

export default function Signup() {
    return (
        <div>
            <header className="container">
                <h2 className="subtitle mt-4 mb-3 text-center">Cadastre-se!</h2>
                <SignupForm />
            </header>
        </div>
    );
}
