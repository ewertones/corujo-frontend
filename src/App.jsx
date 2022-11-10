import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Login from "./routes/login";
import Recover from "./routes/recover";
import Signup from "./routes/signup";
import Contact from "./routes/contact";

import PrivateRoute from "./components/private_route";

export default function App() {
    const rememberMe = localStorage.getItem("remember_me");
    if (rememberMe === null) {
        localStorage.removeItem("bearer_token");
    }
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="/recuperar_senha" element={<Recover />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastrar" element={<Signup />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
