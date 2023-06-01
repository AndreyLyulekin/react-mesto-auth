import React from "react";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";
import { register } from "../Api/Auth";
import PopupAuth from "./PopupAuth";

export default function Register() {
  const [isOpenedPopup, setIsOpenedPopup] = React.useState(false);

  const handleButtonClick = (password, email) => {
    const handleAuth = async (password, email) => {
      const response = await register(password, email);
      if (response.status === 200) {
      } else {
        setIsOpenedPopup(true);
      }
    };
    handleAuth(password, email);
  };

  return (
    <>
      <PopupAuth isOpenedPopup={isOpenedPopup} setIsOpenedPopup={setIsOpenedPopup} parent="Register" />
      <div className="signUp__container">
        <h1 className="signUp__header">Регистрация</h1>
        <AuthForm btnText={"Зарегистрироваться"} onSubmit={handleButtonClick}></AuthForm>
        <p className="auth__prompt">
          Уже зарегистрированы?
          <Link to="/sign-in">
            <button className="auth__prompt_btn">Войти</button>
          </Link>
        </p>
      </div>
    </>
  );
}
