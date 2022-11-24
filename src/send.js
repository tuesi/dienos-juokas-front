export function SendEmail(email) {
    console.log(process.env.REACT_APP_BACKEND_LINK);
    return fetch(process.env.REACT_APP_BACKEND_LINK + "/subscribe?email=" + email)
        .then(res => res.json())
        .then(result => { return result.status })
        .catch((error) => { return -2 });
}