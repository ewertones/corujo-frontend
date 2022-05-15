import './App.css';
import logo from './Assets/Images/owl.png';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Just a unedited React template.</p>
        <a
          className="App-link"
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

export default App; 
