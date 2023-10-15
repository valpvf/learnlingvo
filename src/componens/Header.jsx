import { useState } from "react";
import {
  Auth,
  HeaderWrap,
  Login,
  Logo,
  LogoImg,
  LogoTxt,
  Nav,
  NavItem,
  Register,
} from "./Header.styled";
import Modal from "./Modal";
import { ModalForm } from "./ModalForm";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [nameForm, setNameForm] = useState("");

  const onClick = (e) => {
    setShowModal(true);
    setNameForm(e.target.innerText);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <HeaderWrap>
        <Logo>
          <LogoImg />
          <LogoTxt>LearnLingo</LogoTxt>
        </Logo>
        <Nav>
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/teachers"}>Teachers</NavItem>
        </Nav>
        <Auth>
          <Login onClick={onClick}>Log in</Login>
          <Register onClick={onClick}>Registration</Register>
        </Auth>
      </HeaderWrap>
      {showModal && (
        <ModalForm onClose={onClose} nameForm={nameForm} />
      )}
    </>
  );
};
