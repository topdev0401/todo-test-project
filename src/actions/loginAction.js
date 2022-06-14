import {
    API_URL,
    TOKEN
} from '../utils/constants'

import axios from 'axios'

const loginAction = ({email, password}, setBusy, navigate, setError) => {

    let config = {
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
        } 
      }  

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    axios.post(API_URL, params, config )
    .then(response => {
        setBusy(false);
        localStorage.setItem('token', response.data.user_token);
        if(response.data.user_token === TOKEN) // alternative of authentication 
            navigate("todo");
    })
    .catch(error => {
        setBusy(false);
        setError(error.response.data.message);
    })
}

export default loginAction;