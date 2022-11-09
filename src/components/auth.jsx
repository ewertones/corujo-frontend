export default function auth(event) {
    const email = event.target[0].value;
    const password = event.target[1].value;
    const rememberMe = event.target[2].checked;

    if (rememberMe) {
        localStorage.setItem("remember_me", true);
    }

    localStorage.setItem("logged_user", "isso_e_um_jwt_token");
}
