import React, { Fragment } from 'react';
import Button from '../button';
import style from './style.module.css';
import { FormContext } from '../../context/formContext';

const Form = () => {
  
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const {message, error, loading, sendEmail} = React.useContext(FormContext);
    const credentials = {
        name: name,
        email: email,
    };
    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
   async function handleClick(e) {
        e.preventDefault();
        await sendEmail(credentials);   
    }

    return (
        <>
            <form className = {style.formStyle}>
                <input className={style.inputStyle} type="name"  placeholder='Your Name' onChange={handleName} />
                <input className={style.inputStyle} type="email"  placeholder='Your Email' onChange={handleEmail} />
                <Button typeButton="SEND" label='Send' onClick={handleClick} isLoading={loading}/>
                            
            </form>
            {message && <span className={style.requestMessage}>{message}</span>}
            {error && <span className={style.requestError}>{error}</span>}
        </>
    )
}

export default Form;

// email: ["Enter a valid email address."]
// name: ["This field may not be blank."]