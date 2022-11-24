
export function SendEmail(email) {
    return fetch(process.env.BACKEND_LINK + "/subscribe?email=" + email)
        .then(res => res.json())
        .then(result => { return result.status })
        .catch((error) => { return -2 });
}