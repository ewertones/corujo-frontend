import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
    const { children } = props;
    const bearerToken = localStorage.getItem("bearerToken");
    const isTokenCorrectLength = bearerToken
        ? bearerToken.length === 148
        : false;

    return isTokenCorrectLength ? (
        <>{children}</>
    ) : (
        <Navigate replace={true} to="/entrar" />
    );
}
