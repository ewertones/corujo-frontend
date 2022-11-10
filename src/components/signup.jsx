export default async function signup(event) {
    const fname = event.target[0].value;
    const lname = event.target[1].value;
    const birthday = event.target[2].value;
    const email = event.target[3].value;
    const password = event.target[4].value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email: email,
        first_name: fname,
        last_name: lname,
        birthday: birthday,
        password: password,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    let error;

    await fetch("https://api.corujo.com.br/user", requestOptions)
        .then((res) => {
            return res
                .json()
                .then((data) => ({ status: res.status, message: data }));
        })
        .then((obj) => {
            if (obj.status === 409) {
                error = obj.message.detail;
            }
        });

    return error;
}
