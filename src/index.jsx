import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Login from "./routes/login"
import Recover from './routes/recover';
import Signup from './routes/signup';
import Dashboard from './routes/dashboard';
import Contact from './routes/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/recuperar_senha" element={<Recover />} />
            <Route path="/cadastrar" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);