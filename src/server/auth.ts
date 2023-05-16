import { rootUrl } from "./index";
import axios from "axios";

export const POST_signup = (
  id: string,
  password: string,
  school_id: number
) => {
  console.log("signup id password school_id", id, password, school_id);
  const promise = axios.post(`${rootUrl}/api/users/private/admin`, {
    email: id,
    password,
    school_id,
  });

  const response = promise.then((response) => response);
  return response;
};

export const login = (id: string, password: string) => {
  const promise = axios.post(
    `${rootUrl}/api/auth/login`,
    {
      email: id,
      password: password,
    },
    {
      withCredentials: true,
    }
  );

  const response = promise.then((response) => response);
  return response;
};

export const logout = (token: string) => {
  const promise = axios.post(
    `${rootUrl}/api/auth/logout`,
    {},
    {
      headers: {
        access: localStorage.getItem("accessToken"),
        refresh: localStorage.getItem("refreshToken"),
      },
    }
  );

  const response = promise.then((response) => response);
  return response;
};
