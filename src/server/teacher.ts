import { rootUrl } from "./index";
import axios from 'axios';

export const getTeachers = (school_code: number = 1) => {
    axios.get(`${rootUrl}/admin/${school_code}/teacher/all`).then((response) => {
        console.log("response", response);
    }).catch((error) => {
        console.log("error", error);
    })
}