import { request } from "./RequestService";

const loginURL = 'http://localhost:3030/users/login';
const logoutURL = 'http://localhost:3030/users/logout';
const regURL = 'http://localhost:3030/users/register';


export const LoginU = async (data) => {

    const result = await request(loginURL, "POST", {data});

    return result;
}

export const LogOut = (token) => {
    
    request(logoutURL, "GET", {token});

}

export const RegU = async (data) => {

    const result = await request(regURL, "POST", {data});

    return result;
}

