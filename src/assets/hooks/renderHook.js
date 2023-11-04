import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { dataDB } from "../../firebase";
import { DataState } from "../../DataContext";

export const useRender = (lang, level, price, favourite) => {
  const { user } = DataState();
  let uid = null;
  if (user) uid = user.uid;
  const [prices, setPrices] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    const data = [];
    onValue(dataDB, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        childData.id = childKey;
        data.push(childData);
      });
      setRenderData(data);
      setPrices(
        [...new Set(data.map((item) => item.price_per_hour))].sort(
          (a, b) => a - b
        )
      );
      setLanguages(
        [...new Set(data.flatMap((item) => item.languages))].sort()
      );
      // setRenderData(data);
      // lang === "" &&
      //   level === "" &&
      //   price === "" &&
      //   setRenderData(data);
      // lang !== "" &&
      //   setRenderData((prev) =>
      //     renderData.filter((el) => el.languages.includes(lang))
      //   );
      // // level !== "" &&
      // setRenderData((prev) =>
      //   renderData.filter((el) => el.levels.includes(level))
      // );
      // //
      if (lang === "" && level === "" && price === "") {
        setRenderData(data);
      } else {
        // let result = renderData
        setRenderData(
          renderData.filter((el) => el.languages.includes(lang))
        );
        level !== "" &&
          setRenderData(
            renderData.filter((el) => el.levels.includes(level))
          );
        price !== "" &&
          setRenderData(
            renderData.filter((el) => el.price_per_hour == price)
          );
        // setRenderData((prev) => result);
        //   // data.filter((el) => el.languages.includes(lang))
        // );

        // console.log(
        //   "renderDataLang",
        //   renderData,
        //   // "res",
        //   // result,
        //   "data",
        //   data
        // );
      }
      // setRenderData(
      //   renderData.filter((el) => el.levels.includes(level))
      // );
      // console.log("renderDataLevel", renderData);
      // setRenderData(
      //   renderData.filter((el) => el.price_per_hour == price)
      // );
      // console.log("renderDataPrice", renderData);
      // }
      //   user && favourite
      //     ? setRenderData(data.filter((el) => el.like[uid] === true))
      //     : setRenderData(data);
    });
  }, [dataDB, favourite, price, lang, level]);
  // const newPostRef = push(dataDB);
  // set(newPostRef, {
  //   ...dataDB.key,
  // });

  console.log("++++renderData", renderData, prices);
  return { renderData, prices, languages };
};
