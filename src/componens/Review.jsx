import {
  ReviewCard,
  ReviewName,
  ReviewRaiting,
  ReviewText,
} from "./Review.styled";
import sprite from "../assets/img/sprite.svg";

export const Review = ({ item, image }) => {
  return (
    <div>
      <ReviewCard>
        <img src={image} alt={item.reviewer_name} width="44" />
        <div>
          <ReviewName>{item.reviewer_name}</ReviewName>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <ReviewRaiting>
            {item.reviewer_rating.toFixed(1)}
          </ReviewRaiting>
        </div>
      </ReviewCard>
      <ReviewText>{item.comment}</ReviewText>
    </div>
  );
};
