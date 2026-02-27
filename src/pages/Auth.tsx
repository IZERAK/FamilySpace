import "../style/auth.css";
import Header from "../UI/Header";
import InputComponent from "../UI/Input";
import Label from "../UI/Label";
import MainButton from "../UI/MainButton";
import SecondaryButon from "../UI/SecondaryButon";
export default function Auth() {
  return (
    <div className="auth">
      <div className="form">
        <Header variant="auth-header" dataTestId="header-auth" text="Авторизация"></Header>
        <div className="group-field">
          <Label dataTestId="login-label-auth" text="Логин"></Label>
          <InputComponent dataTestId="input-login" type="text"></InputComponent>
          <Label dataTestId="login-label-password" text="Пароль"></Label>
          <InputComponent
            dataTestId="input-passwrod"
            type="password"
          ></InputComponent>
        </div>
        <div className="group-btn">
          <MainButton
            dataTestId="auth-button"
            text="Войти"
            fn={() => {
              console.log("Вошёл");
            }}
          ></MainButton>
          <SecondaryButon
            dataTestId="reg-button"
            text="Регистрация"
            fn={() => {
              console.log("Новый аккаунт");
            }}
          ></SecondaryButon>
        </div>
      </div>
    </div>
  );
}
