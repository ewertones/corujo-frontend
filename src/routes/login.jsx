import LoginForm from "../components/form_login";

export default function Login({ isLoggedIn, credentials, setCredentials }) {
    return (
        <div>
            <header className="container">
                <h2 className="subtitle mt-4 mb-3 text-center">Bem-vindo!</h2>
                <LoginForm
                    credentials={credentials}
                    setCredentials={setCredentials}
                />
            </header>
        </div>
    );
}
