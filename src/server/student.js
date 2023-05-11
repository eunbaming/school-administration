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
