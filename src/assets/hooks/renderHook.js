import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { dataDB } from "../../firebase";
import { DataState } from "../../DataContext";

export const useRender = (lang, level, price, favourite) => {
  const { user } = DataState();
  let uid = null;
  if (user) uid = user.uid;
  console.log("userHook", user);
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    onValue(dataDB, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        childData.id = childKey;
        data.push(childData);
      });
      lang
        ? setRenderData(
            data.filter((el) => el.languages.includes(lang))
          )
        : setRenderData(data);
      level
        ? setRenderData(
            data.filter((el) => el.levels.includes(level))
          )
        : setRenderData(data);
      price
        ? setRenderData(
            data.filter((el) => el.price_per_hour == price)
          )
        : setRenderData(data);
      user && favourite
        ? setRenderData(data.filter((el) => el.like[uid] === true))
        : setRenderData(data);
    });
  }, [dataDB]);
  // const newPostRef = push(dataDB);
  // set(newPostRef, {
  //   ...dataDB.key,
  // });

  // console.log("renderData", renderData);
  return renderData;
};
