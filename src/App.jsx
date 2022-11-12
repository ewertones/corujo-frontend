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

    useEffect(() => {
        localStorage.setItem("credentials", JSON.stringify(credentials));
    }, [credentials]);

    useEffect(() => {
        if (
            typeof credentials == "object" &&
            "expireTime" in credentials &&
            Date.parse(credentials["expireTime"]) < new Date()
        ) {
            delete credentials["bearerToken"];
            setCredentials(credentials);
        }
    }, [credentials]);

    const isLoggedIn = () =>
        typeof credentials == "object" && "bearerToken" in credentials;

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
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="/recuperar_senha" element={<Recover />} />
                <Route
                    path="/entrar"
                    element={
                        <Login
                            isLoggedIn={isLoggedIn}
                            credentials={credentials}
                            setCredentials={setCredentials}
                        />
                    }
                />
                <Route path="/cadastrar" element={<Signup />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
