const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

export async function postNewsLetter (credentials) {
        
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    
    const response = await fetch(URL, options);
    
    return await response.json();
}

