export function SendEmail(email){
    return fetch("https://dienos-juokas-backend.onrender.com/subscribe?email=" + email)
    .then(res => res.json())
    .then(result => {return result.status})
    .catch((error) => {return -2});
}