import {
  HeadCard,
  HeadLanguage,
  HeadName,
  ImgCard,
  InfoCard,
  InfoItem,
  WrapAvatar,
  WrapCard,
} from "./Card.styled";

export const Card = ({ el }) => {
  return (
    <WrapCard>
      <WrapAvatar>
        <ImgCard
          src={el.avatar_url}
          alt={`${el.name} ${el.surname}`}
        />
      </WrapAvatar>
      <div>
        <HeadCard>
          <div>
            <HeadLanguage>Languages</HeadLanguage>
            <HeadName>{`${el.name} ${el.surname}`}</HeadName>
          </div>
          <InfoCard>
            <InfoItem>Lessons online</InfoItem>
            <InfoItem>Lessons done: {el.lessons_done}</InfoItem>
            <InfoItem>Rating: {el.rating}</InfoItem>
            <InfoItem>
              Price / 1 hour:
              <span> {el.price_per_hour}$</span>
            </InfoItem>
          </InfoCard>
        </HeadCard>
        <ul>
          <li>
            Speaks: <span>{el.languages.join(", ")}</span>
          </li>
          <li>
            Lesson Info: <span>{el.lesson_info}</span>
          </li>
          <li>
            Conditions: <span>{el.conditions.join(" ")}</span>
          </li>
        </ul>
        <p>{el.experience}</p>
      </div>
    </WrapCard>
  );
};
