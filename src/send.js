export function SendEmail(email){
    // fetch("https://gyvunuerotika.herokuapp.com/subscribe?email=" + email)
    // .then(res => res.json())
    // .then((result) => {console.log(result)});
    return fetch("http://localhost:80/subscribe?email=" + email)
    .then(res => res.json())
    .then(result => {return result.status});
}