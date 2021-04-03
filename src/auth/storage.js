import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';

const key="authToken";
const cookies = new Cookies();

const storeToken = authToken=>{
    
    const expiry = new Date();
    expiry.setDate(Date.now + 16*3600000);

    cookies.set(key, authToken, {
        path: '/',
        expires: expiry, //expires after 16 hrs
        secure: true
    });
    
};

const getToken = ()=>{

    const token = cookies.get(key);
    return token;
    
    
};

const getUser = ()=>{
    const token = getToken();
    if(token) return jwtDecode(token);
    return null;
}

const removeToken = ()=>{

    cookies.remove(key);
}

export default {
    getToken,
    getUser,
    removeToken,
    storeToken
}