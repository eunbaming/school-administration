import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../component/LoginForm";
import { login } from "../server/auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfafa;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: "KumbhSans-SemiBold";
`;

const Login = () => {
  const [type, setType] = useState("user");
  const { schools } = useSelector((state: any) => state.school);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentTab", "dashboard");
  }, []);

  const selectType = (selectedType: string) => {
    if (selectedType !== type) {
      setType(selectedType);
    }
  };

  const submitLoginForm = (
    event: any,
    id: string,
    password: string,
    school?: string
  ) => {
    event.preventDefault();
    if (
      type === "user" &&
      id.length > 0 &&
      password.length > 0 &&
      school !== "default"
    ) {
      navigate("dashboard");
    } else if (type === "admin" && id.length > 0 && password.length > 0) {
      console.log("submitLoginForm type admin");

      login(id, password)
        .then((data) => {
          console.log("login succress", data);
          navigate("dashboard");
        })
        .catch((error) => {
          console.log("login failed", error);
        });
    }
  };

  const navigateSignUp = () => {
    navigate("join");
  };

  return (
    <Container>
      <Title>Welcome, Log into you account</Title>
      <LoginForm
        schools={schools}
        type={type}
        selectType={selectType}
        navigateSignUp={navigateSignUp}
        submitLoginForm={submitLoginForm}
      />
    </Container>
  );
};

export default Login;
