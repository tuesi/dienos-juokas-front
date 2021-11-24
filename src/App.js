import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {SendEmail} from './send.js';
import React, {useState} from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(-1);

  const handleButton = async () => {
    SendEmail(email).then((res)=>setStatus(res));
  }

  return (
    <div className="centered">
      <div className="padding">
        <h1>Dienos juoko prenumerata</h1>
      </div>
      <div className="input">
        {status !== 0 ? <InputGroup className="mb-3">
          <FormControl
            placeholder="Email address"
            aria-label="Email address"
            aria-describedby="basic-addon2"
            onChange = {e => setEmail(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleButton}>
            Prenumeruoti
          </Button>
        </InputGroup> : <h2 className="text">Dienos juokas užprenumeruotas!</h2>}
      </div>
      {status === 1 ? <p className="error" style={{color:"red"}}>šis elektroninis paštas jau gauna dienos juoką</p>: null}
      {status === 2 ? <p className="error" style={{color:"red"}}>netinkamas elektroninis paštas</p>: null}
      {status === -2 ? <p className="error" style={{color:"red"}}>techninė klaida</p>: null}
    </div>
  );
}

export default App;
