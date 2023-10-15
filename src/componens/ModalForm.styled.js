import styled from "@emotion/styled";
import { Field } from "formik";

export const ModalTitle = styled.h1`
  margin-bottom: calc(20rem / 16);
  font-size: calc(40rem / 16);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const ModalSubtitle = styled.h2`
  margin-bottom: calc(40rem / 16);
  color: rgba(18, 20, 23, 0.8);
  font-size: 1rem;
  line-height: 1.38;
`;

export const InputStyled = styled(Field)`
  padding: 1rem;
  margin-bottom: calc(18rem / 16);
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  &:last-of-type {
    margin-bottom: calc(40rem / 16);
  }
  &::placeholder {
    color: #121417;
    font-size: 1rem;
    line-height: 1.38;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  background: #f4c550;
  border-color: transparent;
`;
