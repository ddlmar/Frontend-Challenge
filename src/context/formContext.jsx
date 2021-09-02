import React from "react";
import { postNewsLetter } from "../components/form/api";

export const FormContext = React.createContext();
export const Storage = ({children}) => {

    const [loading, setLoading] = React.useState(null); 
    const [message, setMessage] = React.useState(null);
    const [error, setError] = React.useState(null);

    async function sendEmail(credentials) {
        setLoading(true);     
        try {
           const data = await postNewsLetter(credentials);
           console.log('loading');
                if (data.detail) {
                    setMessage('Success');
                    setError(null);
                }else if (data.email && data.name){
                    setError("These fields may not be blank.");
                    setMessage(null);
                }else if (data.email){
                    setError('Enter a valid email address.');
                    setMessage(null);
                }else if (data.name) {
                    setError(data.name[0]);
                    setMessage(null);
                }
            console.log('reply');
        }catch(err){
            console.log(err);
            return 'something is wrong';
        }finally{
            setLoading(false);
            console.log('loading finished');
        } 

    }
    return (<FormContext.Provider value={{message, error, loading, sendEmail}}>
        {children}
    </FormContext.Provider>)
}