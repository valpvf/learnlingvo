import styled from "@emotion/styled";

export const ReviewCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ReviewName = styled.p`
  color: #8a8a89;
  font-size: clamp(10px, 1.11cqi, 16px);
`;

export const ReviewRaiting = styled.p`
  display: inline-block;
  margin-left: clamp(5px, 0.55cqi, 8px);
  font-size: clamp(9px, 0.97cqi, 14px);
  line-height: 1.286;
`;

export const ReviewText = styled.p`
  margin-top: clamp(10px, 1.11cqi, 16px);
  font-size: clamp(10px, 1.11cqi, 16px);
`;
