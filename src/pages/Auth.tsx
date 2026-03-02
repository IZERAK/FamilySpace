import "../style/auth.css";
import Title from "../UI/Title";
import InputComponent from "../UI/Input";
import Label from "../UI/Label";
import MainButton from "../UI/MainButton";
import SecondaryButon from "../UI/SecondaryButon";
import { useNavigate } from "react-router";

export default function Auth() {
  const nav = useNavigate();

  return (
    <div className="auth page">
      <div className="auth form">
        <Title dataTestId="auth title" text="Авторизация"></Title>
        <div className="auth group-field">
          <Label dataTestId="auth label-login" text="Логин"></Label>
          <InputComponent
            dataTestId="auth input-login"
            type="text"
          ></InputComponent>
          <Label dataTestId="auth label-password" text="Пароль"></Label>
          <InputComponent
            dataTestId="auth input-password"
            type="password"
          ></InputComponent>
        </div>
        <div className="auth group-button">
          <MainButton
            dataTestId="auth button-enter"
            text="Войти"
            fn={() => {nav('/home')}}
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
