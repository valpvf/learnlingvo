import { useContext, useEffect, useState } from "react";
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
import { ModalForm } from "./ModalForm";
// import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Context } from "../main";

export const Header = () => {
  const { auth } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [nameForm, setNameForm] = useState("");
  const [inOut, setInOut] = useState("Registration");
  console.log("auth", auth.currentUser);

  useEffect(() => {
    auth.currentUser ? setInOut("Log out") : setInOut("Registration");
  }, [auth.currentUser]);

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
          <NavItem to={"/teachers"}>Teachers</NavItem>
        </Nav>
        <Auth>
          {auth.currentUser ? (
            <Register onClick={onOut}>{inOut}</Register>
          ) : (
            <>
              <Login onClick={onClick}>Log in</Login>
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
