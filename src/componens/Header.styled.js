import styled from "@emotion/styled";
import login from "../assets/img/boy.png";
import { Link } from "react-router-dom";
// sprite.svg#icon - login";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const LogoImg = styled.div`
  width: calc(28rem / 16);
  height: calc(28rem / 16);
  border-radius: 50%;
  background: linear-gradient(to top, #ffda44 50%, #338af3 50%);
`;

export const LogoTxt = styled.div`
  font-size: calc(20rem / 16);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: calc(28rem / 16);
`;

export const NavItem = styled(Link)`
  font-size: 1rem;
  line-height: 1.25;
`;

export const Auth = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Login = styled.button`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  background: transparent;
  border: none;
  &::before {
    position: relative;
    width: 80%;
    /* height: 80px; */
    content: " ";
    /* top: 20px; */
    /* left: 20px; */
    /* fill: red; */
    background-image: url(${login});
    background-position: 0 0;
  }
`;
export const Register = styled.button`
  padding: 0.875rem 2.44rem;
  border-radius: 12px;
  background: #121417;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;
