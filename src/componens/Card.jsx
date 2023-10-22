import {
  HeadCard,
  HeadLanguage,
  HeadName,
  ImgCard,
  InfoCard,
  InfoHead,
  InfoItem,
  InfoMore,
  Level,
  ListLevel,
  WrapAvatar,
  WrapCard,
  WrapInfo,
} from "./Card.styled";
import { Review } from "./Review";
import sprite from "../assets/img/sprite.svg";
import image from "../assets/img/noavatar.svg";
import { useState } from "react";

export const Card = ({ el }) => {
  const [readMore, setReadMore] = useState(false);
  const notMore = () => {
    setReadMore(!readMore);
  };
  return (
    <WrapCard>
      <WrapAvatar>
        <ImgCard
          src={el.avatar_url}
          alt={`${el.name} ${el.surname}`}
        />
      </WrapAvatar>
      <WrapInfo>
        <HeadCard>
          <div>
            <HeadLanguage>Languages</HeadLanguage>
            <HeadName>{`${el.name} ${el.surname}`}</HeadName>
          </div>
          <InfoCard>
            <InfoHead>Lessons online</InfoHead>
            <InfoHead>Lessons done: {el.lessons_done}</InfoHead>
            <InfoHead>Rating: {el.rating}</InfoHead>
            <InfoHead>
              Price / 1 hour:
              <span> {el.price_per_hour}$</span>
            </InfoHead>
            <svg
              width={26}
              height={26}
              style={{ fill: "transparent", stroke: "#121417" }}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </InfoCard>
        </HeadCard>
        <ul>
          <InfoItem>
            Speaks: <span>{el.languages.join(", ")}</span>
          </InfoItem>
          <InfoItem>
            Lesson Info: <span>{el.lesson_info}</span>
          </InfoItem>
          <InfoItem>
            Conditions: <span>{el.conditions.join(" ")}</span>
          </InfoItem>
        </ul>
        {!readMore && (
          <InfoMore InfoMore type="button" onClick={notMore}>
            Read more
          </InfoMore>
        )}
        {readMore && (
          <>
            <p>{el.experience}</p>
            {el.reviews.map((item) => (
              <Review key={item.comment} item={item} image={image} />
            ))}
          </>
        )}
        <ListLevel>
          {el.levels.map((item) => (
            <Level key={`${item} ${el.name} ${el.surname}`}>
              #{item}
            </Level>
          ))}
        </ListLevel>
      </WrapInfo>
    </WrapCard>
  );
};
