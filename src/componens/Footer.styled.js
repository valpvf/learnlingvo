import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(30px, 6.95cqi, 100px);
  justify-content: center;
  width: 100%;
  padding: clamp(15px, 2.8cqi, 40px) 40px;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: clamp(10px, 1.11cqi, 16px);
`;

export const FooterQuantity = styled.h2`
  font-size: clamp(14px, 3cqi, 28px);
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const FooterOverview = styled.p`
  max-width: 74px;
  color: rgba(18, 20, 23, 0.7);
  font-size: clamp(9px, 0.97cqi, 14px);
  line-height: 1.29;
  letter-spacing: -0.28px;
`;
