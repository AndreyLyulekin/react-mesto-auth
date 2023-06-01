import React from "react";
import AuthForm from "./AuthForm";
import { authorize } from "../Api/Auth";
import PopupAuth from "./PopupAuth";

export default function Login({ setToken, setIsLoggedIn }) {
  const [isOpenedPopup, setIsOpenedPopup] = React.useState(false);

  const handleButtonClick = (password, email) => {
    const handleAuth = async (password, email) => {
      const response = await authorize(password, email);
      if (response.status === 200) {
        setToken(response.data.token);
        setIsLoggedIn(true);
      } else {
        setIsOpenedPopup(true);
      }
    };
    handleAuth(password, email);
  };
  return (
    <>
      <PopupAuth isOpenedPopup={isOpenedPopup} setIsOpenedPopup={setIsOpenedPopup} parent="LogIn" />
      <div className="signUp__container">
        <h1 className="signUp__header">Вход</h1>
        <AuthForm btnText={"Войти"} onSubmit={handleButtonClick}></AuthForm>
      </div>
    </>
  );
}

//vasiliysome@yandex.ru
//somepassword
