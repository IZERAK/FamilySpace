import "../style/auth.css";
import Title from "../UI/Title";
import InputComponent from "../UI/Input";
import Label from "../UI/Label";
import MainButton from "../UI/MainButton";
import SecondaryButon from "../UI/SecondaryButon";
import { useNavigate } from "react-router";

export default function Reg() {
  const nav = useNavigate();

  return (
    <div className="reg page">
      <div className="reg form">
        <Title dataTestId="reg title" text="Регистрация"></Title>
        <div className="reg group-field">
          <Label dataTestId="reg label-login" text="Логин"></Label>
          <InputComponent
            dataTestId="reg input-login"
            type="text"
          ></InputComponent>
          <Label dataTestId="reg label-password" text="Пароль"></Label>
          <InputComponent
            dataTestId="reg input-password"
            type="password"
          ></InputComponent>
          <Label
            dataTestId="reg label-reset-password"
            text="Повторите Пароль"
          ></Label>
          <InputComponent
            dataTestId="reg input-reset-password"
            type="password"
          ></InputComponent>
        </div>
        <div className="reg group-button">
          <MainButton
            dataTestId="reg button-enter"
            text="Создать аккаунт"
            fn={() => {}}
          ></MainButton>
          <SecondaryButon
            dataTestId="reg button-register"
            text="Авторизация"
            fn={() => {
              nav("/auth");
            }}
          ></SecondaryButon>
        </div>
      </div>
    </div>
  );
}
