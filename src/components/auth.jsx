export default async function auth(event) {
    const email = event.target[0].value;
    const password = event.target[1].value;
    const rememberMe = event.target[2].checked;

    if (rememberMe) {
        localStorage.setItem("remember_me", true);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", email);
    urlencoded.append("password", password);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    let error;

    await fetch("https://api.corujo.com.br/login", requestOptions)
        .then((res) => {
            return res
                .json()
                .then((data) => ({ status: res.status, message: data }));
        })
        .then((obj) => {
            if (obj.status === 401) {
                error = obj.message.detail;
            } else if (obj.status === 200) {
                localStorage.setItem("bearerToken", obj.message.access_token);
            }
        });

    return error;
}
