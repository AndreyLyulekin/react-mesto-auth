import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Вход</h1>
      <form>
        <input placeholder="E-mail" className="popup__input popup__input_type_name" />
        <input placeholder="Пароль" className="popup__input popup__input_type_name" />
        <button type="submit" className="popup__btn" />
      </form>
    </div>
  );
}
