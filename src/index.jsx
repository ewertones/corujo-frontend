import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";

if (localStorage.getItem("credentials") === null) {
    localStorage.setItem("credentials", "{}");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
