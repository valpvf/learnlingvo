import {
  Apple,
  Desktop,
  Hero,
  HeroButton,
  HomeWrap,
  Main,
  Text,
  Title,
  Visual,
} from "./HomePages.styled";
import sprite from "../assets/img/sprite.svg";
import { Footer } from "../componens/Footer";
import { Header } from "../componens/Header";
import { auth } from "../firebase";
import { Context } from "../main";
import { useContext } from "react";

export const Home = () => {
  const { auth } = useContext(Context);
  console.log("app", auth);
  return (
    <HomeWrap>
      <Header></Header>
      <Main>
        <Hero>
          <Title>
            Unlock your potential with the best <em>language</em>{" "}
            tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert
            Language Tutors: Elevate your language proficiency to new
            heights by connecting with highly qualified and
            experienced tutors.
          </Text>
          <HeroButton href="#">Get started</HeroButton>
        </Hero>
        <Visual>
          <Desktop />
          <Apple>
            <use href={`${sprite}#icon-apple`}></use>
          </Apple>
        </Visual>
      </Main>
      <Footer />
    </HomeWrap>
  );
};
