import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: space-between;
  width: 100%;
  padding: 40px 122px;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 16px;
`;

export const FooterQuantity = styled.h2`
  font-size: calc(28rem / 16);
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const FooterOverview = styled.p`
  max-width: 74px;
  color: rgba(18, 20, 23, 0.7);
  font-size: calc(14rem / 16);
  line-height: 1.29;
  letter-spacing: -0.28px;
`;
