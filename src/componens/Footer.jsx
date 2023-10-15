// import { FooterInfo } from "./FooterInfo";
import { info } from "../assets/data";
import {
  FooterInfo,
  FooterOverview,
  FooterQuantity,
  FooterWrap,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrap>
      {info.map((el) => (
        <FooterInfo key={el.overview}>
          <FooterQuantity>
            {el.quantity >= 1000
              ? el.quantity.toLocaleString("en-GB")
              : el.quantity}
            {" +"}
          </FooterQuantity>
          <FooterOverview>{el.overview}</FooterOverview>
        </FooterInfo>
      ))}
    </FooterWrap>
  );
};
