import Navbar from "../components/navbar";
import ContactForm from "../components/form_contact.jsx";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <header className="container">
                <h2 className="subtitle mt-4 mb-3 text-center">Contate-nos!</h2>
                <ContactForm />
            </header>
        </div>
    )
}