import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
    const { children } = props;
    const isLoggedIn = localStorage.getItem("logged_user") !== null;

    return isLoggedIn ? (
        <>{children}</>
    ) : (
        <Navigate replace={true} to="/entrar" />
    );
}
