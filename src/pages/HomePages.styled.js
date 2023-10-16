import styled from "@emotion/styled";
// import sprite from "/src/assets/img/sprite.svg";
import boy from "/src/assets/img/boy.png";

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 99vh;
  min-width: 290px;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding-top: 1.25rem;
  padding-bottom: 1.56rem;
`;

export const Main = styled.main`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  gap: 1.7%;
`;

export const Hero = styled.section`
  width: 54.9%;
  flex-basis: 720px;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 6.125rem 4rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  & em {
    background-color: #fbe9ba;
  }
`;

export const HeroButton = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.56;
  padding: 1rem 5.5rem;
  border-radius: 12px;
  background-color: #f4c550;
`;

export const Text = styled.p`
  width: 29.4rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  line-height: 1.375;
  letter-spacing: -0.32px;
`;

export const Visual = styled.section`
  position: relative;
  width: 43.4%;
  flex-basis: 568px;
  aspect-ratio: calc(570 / 500);
  /* height: 100%; */
  border-radius: 30px;
  background: url(${boy}),
    linear-gradient(
      to right,
      rgba(251, 233, 186, 1),
      rgba(251, 233, 186, 1)
    );
  background-position: 50% 50%, center;
  background-repeat: no-repeat;
  background-size: min(50%, 285px) auto, 100% auto;
  /* object-fit: cover; */
  overflow: hidden;
`;

export const Apple = styled.svg`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 56px;
  /* background-image: url("#icon-apple"); */
  /* mask-image: url(src/assets/img/sprite.svg#icon-apple);
  mask-position: 0 0;
  mask-repeat: no-repeat;
  mask-size: contain; */
  fill: #fbe9ba;
  /* linear-gradient(180deg, #fbe9ba 0%, #e7c885 100%); */
`;

export const Desktop = styled.div`
  position: absolute;
  width: 360px;
  aspect-ratio: 1;
  background-color: #f4c550;
  border-radius: 3%;
  top: 71%;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
`;
