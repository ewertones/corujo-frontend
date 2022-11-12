export default async function get_assets_from_db(token) {
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJld2VydG9uZXNvdXphQGdtYWlsLmNvbSIsImV4cCI6MTY2ODIyMzc0MH0.AFKYvVlTFut3la1sJRwQcBpbNHtRDScxVXpAOQoZHHo"
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    let assets;
    let error;

    await fetch("https://api.corujo.com.br/assets", requestOptions)
        .then((res) => {
            return res
                .json()
                .then((data) => ({ status: res.status, message: data }));
        }).then(obj) => {
            if (obj.status === 401) {
                error = obj.message.detail;
            } else if (obj.status === 200) {
                assets = obj.message;
            }
        };


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
                if (typeof credentials == "string") {
                    credentials = JSON.parse(credentials);
                }
                credentials["bearerToken"] = obj.message.access_token;
                setCredentials(credentials);
            }
        });

    return error;
}
