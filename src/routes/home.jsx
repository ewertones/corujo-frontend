import '../assets/styles/home.css';
import logo from '../assets/images/owl.png';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <header className="corpus">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Just a unedited React template.</p>
        <a
          className="Home-link"
          href="https://api.corujo.com.br/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open API docs
        </a>
      </header>
    </div>
  );
}