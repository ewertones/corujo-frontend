import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, isLoggedIn }) {
    return isLoggedIn() ? children : <Navigate replace={true} to="/entrar" />;
}
