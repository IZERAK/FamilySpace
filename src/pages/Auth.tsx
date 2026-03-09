import "../style/auth.css";
import Title from "../UI/Title";
import InputComponent from "../UI/Input";
import Label from "../UI/Label";
import MainButton from "../UI/MainButton";
import SecondaryButon from "../UI/SecondaryButon";
import { useNavigate } from "react-router";
import { useState } from "react";
import { auth } from "../temp/Users";

export default function Auth() {
  const nav = useNavigate();
  const [login, setLogin] = useState("");
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="auth page">
      <div className="auth form">
        <Title dataTestId="auth title" text="Авторизация"></Title>
        <div className="auth group-field">
          <Label dataTestId="auth label-login" text="Логин"></Label>
          <InputComponent
            dataTestId="auth input-login"
            type="text"
            value={login}
            onChange={loginChange}
          ></InputComponent>
          <Label dataTestId="auth label-password" text="Пароль"></Label>
          <InputComponent
            dataTestId="auth input-password"
            type="password"
            value={password}
            onChange={passwordChange}
          ></InputComponent>
        </div>
        <div className="auth group-button">
          <MainButton
            dataTestId="auth button-enter"
            text="Войти"
            fn={() => {
              if (auth(login, password) == 200) {
                nav("/home");
              } else {
                alert("Пользователь не найден");
              }
            }}
          ></MainButton>
          <SecondaryButon
            dataTestId="auth button-register"
            text="Регистрация"
            fn={() => {
              nav("/reg");
            }}
          ></SecondaryButon>
        </div>
      </div>
    </div>
  );
}
