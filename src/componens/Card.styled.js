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
  border: 3px solid var(--background);
  background: #fff;
  object-fit: cover;
`;

export const ImgCard = styled.img`
  width: 84.25%;
  height: 84.25%;
  border-radius: 50%;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.25cqi, 32px);
  font-size: clamp(10px, 1.11cqi, 16px);
  width: 100%;
`;

export const HeadCard = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
  justify-content: space-between;
  gap: clamp(16px, 2.25cqi, 32px);
  font-size: clamp(10px, 1.11cqi, 16px);
`;

export const InfoHead = styled.li`
  span {
    color: #38cd3e;
  }
`;

export const Heart = styled.svg`
  width: clamp(12px, 1.85cqi, 26px);
  height: clamp(12px, 1.85cqi, 26px);
  fill: ${(props) => (props.mark ? "#F4C550" : "transparent")};
  stroke: ${(props) => (props.mark ? "transparent" : "#121417")};
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

export const InfoMore = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 0;
  color: #121417;
  font-weight: 500;
  text-decoration-line: underline;
`;

export const ListLevel = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(4px, 0.55cqi, 8px);
`;
export const Level = styled.li`
  padding: clamp(4px, 0.55cqi, 8px) clamp(6px, 0.95cqi, 12px);
  font-size: clamp(9px, 0.97cqi, 14px);
  line-height: 1.15;
  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  &:first-of-type {
    background: var(--color);
    border: transparent;
  }
`;
