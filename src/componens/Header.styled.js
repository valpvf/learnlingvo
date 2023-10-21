import styled from "@emotion/styled";
import login from "../assets/img/boy.png";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1184 / 1440 * 100%, 1184px);
  margin: 0 auto;
  font-size: clamp(10px, 1.11cqi, 16px);
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: clamp(5px, 0.55cqi, 8px);
  align-items: center;
`;

export const LogoImg = styled.div`
  width: clamp(16px, 3cqi, 28px);
  height: clamp(16px, 3cqi, 28px);
  border-radius: 50%;
  background: linear-gradient(to top, #ffda44 50%, #338af3 50%);
`;

export const LogoTxt = styled.div`
  font-size: clamp(14px, 2cqi, 20px);
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: clamp(14px, 3cqi, 28px);
`;

export const NavItem = styled(Link)`
  line-height: 1.25;
`;

export const Auth = styled.div`
  display: flex;
  gap: clamp(10px, 1.11cqi, 16px);
`;

export const Login = styled.button`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: 700;
  line-height: 1.25;
  background: transparent;
  border: none;
`;

export const LoginImg = styled.svg`
  stroke: var(--color);
  fill: transparent;
  padding-right: clamp(5px, 0.55cqi, 8px);
  width: clamp(14px, 2cqi, 20px);
  height: clamp(14px, 2cqi, 20px);
`;

export const Register = styled.button`
  padding: clamp(9px, 0.97cqi, 14px) clamp(18px, 3cqi, 39px);
  border-radius: 12px;
  background: var(--text);
  color: #ffffff;
  font-weight: 700;
  line-height: 1.25;
`;
