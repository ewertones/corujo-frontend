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
import { useEffect, useState } from "react";

export default function App() {
    const [credentials, setCredentials] = useState(
        JSON.parse(localStorage.getItem("credentials"))
    );

    const handleLogin = (bearerToken, validUntil) => {
        console.log(credentials);
        console.log(typeof credentials);
        let newCredentials = credentials === null ? {} : credentials;
        newCredentials["bearerToken"] = bearerToken;
        newCredentials["validUntil"] = validUntil;
        setCredentials(newCredentials);
        localStorage.setItem("credentials", JSON.stringify(newCredentials));
    };

    useEffect(() => {
        localStorage.setItem("credentials", JSON.stringify(credentials));
    }, [credentials]);

    const isLoggedIn = () => {
        return (
            credentials !== null &&
            typeof credentials === "object" &&
            "bearerToken" in credentials &&
            "validUntil" in credentials &&
            new Date() < Date.parse(credentials["validUntil"])
        );
    };

    return (
        <BrowserRouter>
            <Navbar
                credentials={credentials}
                setCredentials={setCredentials}
                isLoggedIn={isLoggedIn}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <Home credentials={credentials} />
                        </PrivateRoute>
                    }
                />
                <Route path="/recuperar_senha" element={<Recover />} />
                <Route
                    path="/entrar"
                    element={<Login handleLogin={handleLogin} />}
                />
                <Route path="/cadastrar" element={<Signup />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
