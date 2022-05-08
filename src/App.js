import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just a unedited React template.
        </p>
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
