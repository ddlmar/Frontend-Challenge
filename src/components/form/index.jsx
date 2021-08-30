import React, { Fragment } from 'react';
import Button from '../button';
import style from './style.module.css';
import { postNewsLetter } from './api';

const Form = () => {
  
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
      
    const credentials = {
        name: name,
        email: email,
    };
    
    const [message, setMessage] = React.useState(null);
    const [error, setError] = React.useState(null);

    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

   async function handleClick() {

        const response = await postNewsLetter(credentials);
        if (response.detail) {
            setMessage('Success');
            setError(null);
        }else if (response.email && response.name){
            setError("These fields may not be blank.");
            setMessage(null);
        }else if (response.email){
            setError('Enter a valid email address.');
            setMessage(null);
        }else if (response.name) {
            setError(response.name[0]);
            setMessage(null);
        }
    }

    return (
        <>
            <form className = {style.formStyle}>
                <input className={style.inputStyle} type="name"  placeholder='Your Name' onChange={handleName} />
                <input className={style.inputStyle} type="email"  placeholder='Your Email' onChange={handleEmail} />
                <Button style={style.formButton} label='Send' onClick={handleClick}/>
                            
            </form>
            {message && <span className={style.requestMessage}>{message}</span>}
            {error && <span className={style.requestError}>{error}</span>}
        </>
    )
}

export default Form;

// email: ["Enter a valid email address."]
// name: ["This field may not be blank."]