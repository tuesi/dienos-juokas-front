import './Joke.css';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';

function Joke() {

    useEffect(() => {
        fetch("https://gyvunuerotika.herokuapp.com/daily")
        .then(res => res.json())
        .then(result => {
            if(result.joke != null){
            setJoke(result.joke)
            }
        })
        .catch((error) => {});
    },[]);

    const [show, setShow] = useState(false);
    const [joke, setJoke] = useState('Dienos juokas rodomas nuo 13:00. Norint dienos juoką gauti anksčiau prašome prenumeruoti.');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="jokeButton">
                <Button variant="outline-warning" onClick={handleShow}>Dienos Juokas</Button>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Dienos Juokas</Modal.Title>
                </Modal.Header>
                <Modal.Body>{joke}</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Joke;
