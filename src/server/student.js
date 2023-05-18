import { rootUrl } from "./index";
import axios from "axios";

export const GET_getStudents = () => {
  const promise = axios.get(`${rootUrl}/api/users/student/all`, {
    headers: {
      access: localStorage.getItem("accessToken"),
      refresh: localStorage.getItem("refreshToken"),
    },
  });

  const response = promise.then((response) => response);
  return response;
};

export const POST_addStudent = (studentObj) => {
  console.log("POST_addStudent", studentObj);

  let formData = new FormData();

  for (let key in studentObj) {
    formData.append(key, studentObj[key]);
  }

  for (let key of formData.keys()) {
    console.log(key);
  }

  for (let value of formData.values()) {
    console.log(value);
  }

  const promise = axios.post(`${rootUrl}/api/users/student`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      access: localStorage.getItem("accessToken"),
      refresh: localStorage.getItem("refreshToken"),
    },
  });

  const resPromise = promise.then((response) => response);
  return resPromise;
};

export const DELETE_student = (id) => {
  const promise = axios.delete(`${rootUrl}/api/users/student?id=${id}`);
  const response = promise.then((response) => response);

  return response;
};
