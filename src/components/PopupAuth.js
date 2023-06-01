import React from "react";
import goodAuthImg from "../images/Union.png";
import badAuthImg from "../images/Union (1).png";

export default function PopupAuth({ isOpenedPopup, parent, setIsOpenedPopup }) {
  const handleCloseButtonClick = () => {
    setIsOpenedPopup(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target?.className?.includes("popup")) {
      setIsOpenedPopup(false);
    }
  };
  return (
    <div className={`popup ${isOpenedPopup && "popup_opened"}`} onMouseDown={handleOverlayClick}>
      <div className={`auth__container`}>
        <img
          src={parent === "LogIn" ? badAuthImg : goodAuthImg}
          alt={parent === "LogIn" ? "Bad request" : "Sucsess!"}
          className="auth__popup-img"
        />
        <p className="auth__popup-text">
          {parent === "LogIn"
            ? `Что-то пошло не так!     
          Попробуйте ещё раз.`
            : `Вы успешно зарегистрировались!`}
        </p>
        <button
          type="button"
          className="popup__exit popup__exit-profile"
          aria-label="Закрыть попап"
          onClick={handleCloseButtonClick}></button>
      </div>
    </div>
  );
}
