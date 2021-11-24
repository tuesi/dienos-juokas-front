export function SendEmail(email){
    //return fetch("http://localhost:80/subscribe?email=" + email)
    return fetch("https://gyvunuerotika.herokuapp.com/subscribe?email=" + email)
    .then(res => res.json())
    .then(result => {return result.status});
}