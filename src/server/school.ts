import { rootUrl } from ".";
import axios from 'axios' ;

export const getSchools = () => {
    const promise = axios.get(`${rootUrl}/api/school/all`);

    const resPromise = promise.then((response) => response); 

    return resPromise;
}