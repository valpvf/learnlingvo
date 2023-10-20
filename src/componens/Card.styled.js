import styled from "@emotion/styled";

export const WrapCard = styled.article`
  display: flex;
  gap: clamp(16px, 3.35cqi, 48px);
  width: min(100%, 1184px);
  margin: 0 auto clamp(16px, 2.25cqi, 32px);
  padding: clamp(12px, 1.65cqi, 24px);
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
  width: clamp(20px, 10cqw, 120px);
  height: clamp(20px, 10cqw, 120px);
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
  object-fit: cover;
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.25cqi, 32px);
  font-size: clamp(10px, 1.11cqi, 16px);
`;

export const ImgCard = styled.img`
  width: 84.25%;
  height: 84.25%;
  border-radius: 50%;
`;

export const HeadCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeadLanguage = styled.p`
  padding-bottom: clamp(5px, 0.55cqi, 8px);
  color: #8a8a89;
`;

export const HeadName = styled.h2`
  font-size: clamp(12px, 2cqi, 24px);
  line-height: 1;
`;

export const InfoCard = styled.ul`
  display: flex;
  gap: clamp(16px, 2.25cqi, 32px);
  font-size: clamp(10px, 1.11cqi, 16px);
`;

export const InfoHead = styled.li`
  span {
    color: #38cd3e;
  }
`;

export const InfoItem = styled.li`
  margin-bottom: clamp(5px, 0.55cqi, 8px);
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
