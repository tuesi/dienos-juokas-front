export function SendEmail(email){
    return fetch("https://gyvunuerotika.herokuapp.com/subscribe?email=" + email)
    .then(res => res.json())
    .then(result => {return result.status})
    .catch((error) => {return -2});
}