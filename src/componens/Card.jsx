import { useState } from "react";
import { DataState } from "../DataContext";
import { Review } from "./Review";
import sprite from "../assets/img/sprite.svg";
import image from "../assets/img/noavatar.svg";
import {
  HeadCard,
  HeadLanguage,
  HeadName,
  Heart,
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
import { ref, remove, update } from "firebase/database";
import { db } from "../firebase";

export const Card = ({ el }) => {
  const { user } = DataState();
  let idUser = user?.uid;
  // console.log("object", el?.like[idUser]);
  // console.log("idUser", idUser);
  const [readMore, setReadMore] = useState(false);
  const [mark, setMark] = useState(el?.like[idUser] || false);
  // const [colr, setColr] = useState(["transparent", "#121417"]);
  // console.log("user.uid", user?.uid);
  const changeMark = () => {
    // mark
    //   ? setColr(["#F4C550", "transparent"])
    //   : setColr(["transparent", "#121417"]);
    const dbRef = ref(db);
    const updates = {};
    updates[`/teacher/${el.id}/like/${user.uid}`] = !mark;
    update(dbRef, updates);
    setMark((prev) => !mark);
  };

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
            <Heart mark={mark} onClick={changeMark}>
              <use href={`${sprite}#icon-heart`}></use>
            </Heart>
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
