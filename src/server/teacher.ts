import { rootUrl } from "./index";
import axios from 'axios';

export const getTeachers = (school_code: number = 1) => {
    axios.get(`${rootUrl}/admin/${school_code}/teacher/all`).then((response) => {
        console.log("response", response);
    }).catch((error) => {
        console.log("error", error);
    })
}

export const POST_addTeacher = (teacherObj: any) => {
    console.log("POST_addTeacher", teacherObj);
    console.log("accessToken", localStorage.getItem("accessToken"));
    console.log("refreshToken", localStorage.getItem("refreshToken"));
    
    const promise = axios.post(`${rootUrl}/api/users/teacher`, {      
            email: teacherObj.email,
            password: teacherObj.password,
            grade: teacherObj.grade,
            subject: teacherObj.subject,
            gender: teacherObj.gender,
            phone_number: teacherObj.phone_number,
            school_id: 1,
            profile_image_url: teacherObj.profile_image_url,
            user_about: teacherObj.user_about,
    }, {
        headers: {
            access: localStorage.getItem("accessToken"),
            refresh: localStorage.getItem("refreshToken"),
        }
    })

    const resPromise = promise.then((response) => response);

    return resPromise
}