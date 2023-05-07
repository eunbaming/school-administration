import {rootUrl} from './index';
import axios from 'axios';

export const signup = (id: string, password: string) => {
    console.log("signup id password", id, password)
    const promise = axios.post(`${rootUrl}/api/users`, {
        email: id,
        password: password,
      })

      const response = promise.then((response) => response);
      return response;
}

export const login = (id: string, password: string) => {
    const promise = axios.post(`${rootUrl}/api/auth/login`, {
        email: id,
        password: password,
    }, {
        withCredentials: true
    })

    const response = promise.then((response) => response);
    return response;
}

export const logout = (token: string) => {
    const promise = axios.post(`${rootUrl}/api/auth/logout`,{},{
        headers: {
            Authorization: token
        },
    })

    const response = promise.then((response) => response);
    return response;
}


