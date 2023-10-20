import styled from "@emotion/styled";

export const WrapCard = styled.article`
  display: flex;
  gap: min(48px, calc(48 / 1440 * 100vw));
  width: 100%;
  margin: 0 auto 32px;
  padding: min(24px, calc(24 / 1440 * 100vw));
  border-radius: 24px;
  background: #fff;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const WrapAvatar = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
  object-fit: cover;
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ImgCard = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const HeadCard = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const HeadLanguage = styled.p`
  padding-bottom: 8px;
  color: #8a8a89;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const HeadName = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const InfoCard = styled.ul`
  display: flex;
  gap: 32px;
  margin-left: 149px;
`;

export const InfoHead = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  span {
    color: #38cd3e;
  }
`;

export const InfoItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
  span {
    color: initial;
  }
  &:first-of-type span {
    text-decoration-line: underline;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
