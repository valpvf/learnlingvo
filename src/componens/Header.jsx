import { useContext, useEffect, useState } from "react";
import {
  Auth,
  HeaderWrap,
  Login,
  LoginImg,
  Logo,
  LogoImg,
  LogoTxt,
  Nav,
  NavItem,
  Register,
} from "./Header.styled";
import { ModalForm } from "./ModalForm";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import sprite from "../assets/img/sprite.svg";
import { DataState } from "../DataContext";

export const Header = () => {
  const { user } = DataState();
  const [showModal, setShowModal] = useState(false);
  const [nameForm, setNameForm] = useState("");
  const [inOut, setInOut] = useState("Registration");
  // console.log("user", user);

  useEffect(() => {
    user ? setInOut("Log out") : setInOut("Registration");
  }, [user]);

  const onClick = (e) => {
    setShowModal(true);
    setNameForm(e.target.innerText);
  };

  const onOut = (e) => {
    signOut(auth)
      .then(() => {
        console.log();
        setInOut("Registration");
      })
      .catch((error) => {
        console.error(error);
      });
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
          <NavItem to={"/teachers"}> Teachers </NavItem>
          {user && <NavItem to={"/favourite"}> Favourite </NavItem>}
        </Nav>
        <Auth>
          {user ? (
            <Register onClick={onOut}>{inOut}</Register>
          ) : (
            <>
              <Login onClick={onClick}>
                {" "}
                <LoginImg>
                  <use href={`${sprite}#icon-login`}></use>
                </LoginImg>{" "}
                Log in
              </Login>
              <Register onClick={onClick}>{inOut}</Register>
            </>
          )}
        </Auth>
      </HeaderWrap>
      {showModal && (
        <ModalForm onClose={onClose} nameForm={nameForm} />
      )}
    </>
  );
};
