import { useEffect } from "react";
import sprite from "../assets/img/sprite.svg";
import {
  BackdropStyled,
  ModalWindowStyled,
  CloseBtnStyled,
  IconStyled,
} from "./Modal.styled";

const Modal = ({ children, onClose, custom, nameForm }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const onCloseBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      onClose();
    }
  };

  function onCloseEscape(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onCloseEscape);
    return () => {
      window.removeEventListener("keydown", onCloseEscape);
    };
  });

  return (
    <BackdropStyled onClick={onCloseBackdrop}>
      <ModalWindowStyled custom={custom ? true : false}>
        <CloseBtnStyled onClick={handleClose}>
          <IconStyled width={18} height={18}>
            <use href={`${sprite}#icon-apple`}></use>
          </IconStyled>
        </CloseBtnStyled>
        {children}
      </ModalWindowStyled>
    </BackdropStyled>
  );
};

export default Modal;
