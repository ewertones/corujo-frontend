export default async function auth(event, handleLogin) {
    const email = event.target[0].value;
    const password = event.target[1].value;
    const rememberMe = event.target[2].checked;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email: email,
        password: password,
        rememberMe: rememberMe,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
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
                handleLogin(obj.message.access_token, obj.message.valid_until);
            }
        });

    return error;
}
