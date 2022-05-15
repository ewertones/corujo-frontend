import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./routes/login"
import Home from './routes/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);