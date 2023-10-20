import {
  HeadCard,
  HeadLanguage,
  HeadName,
  ImgCard,
  InfoCard,
  InfoHead,
  InfoItem,
  WrapAvatar,
  WrapCard,
  WrapInfo,
} from "./Card.styled";
import { Review } from "./Review";
import noAvatar from "../assets/img/noavatar.svg";

export const Card = ({ el }) => {
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
        <button>Read more</button>
        <p>{el.experience}</p>
        {el.reviews.map((item) => (
          <Review key={item.comment} item={item} image={noAvatar} />
        ))}
      </WrapInfo>
    </WrapCard>
  );
};
