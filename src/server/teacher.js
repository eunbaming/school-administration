import { rootUrl } from "./index";
import axios from "axios";

export const GET_getTeachers = () => {
  const promise = axios.get(`${rootUrl}/api/users/teacher/all`, {
    headers: {
      access: localStorage.getItem("accessToken"),
      refresh: localStorage.getItem("refreshToken"),
    },
  });

  const resPromise = promise.then((response) => response);

  return resPromise;
};

export const POST_addTeacher = (teacherObj) => {
  console.log("POST_addTeacher", teacherObj);
  console.log("accessToken", localStorage.getItem("accessToken"));
  console.log("refreshToken", localStorage.getItem("refreshToken"));

  let formData = new FormData();

  for (let key in teacherObj) {
    formData.append(key, teacherObj[key]);
  }

  formData.append("school_id", "1");

  for (let key of formData.keys()) {
    console.log(key);
  }

  /* value 확인하기 */
  for (let value of formData.values()) {
    console.log(value);
  }

  const promise = axios.post(`${rootUrl}/api/users/teacher`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      access: localStorage.getItem("accessToken"),
      refresh: localStorage.getItem("refreshToken"),
    },
  });

  const resPromise = promise.then((response) => response);

  return resPromise;
};

export const PUT_editTeacher = (teacherObj) => {
  let formData = new FormData();

  for (let key in teacherObj) {
    formData.append(key, teacherObj[key]);
  }

  const promise = axios.put(`${rootUrl}/api/users/teacher`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const resPromise = promise.then((response) => response);

  return resPromise;
};

export const DELETE_Teacher = (id) => {
  const promise = axios.delete(`${rootUrl}/api/users/teacher?id=${id}`);

  const resPromise = promise.then((response) => response);

  return resPromise;
};
