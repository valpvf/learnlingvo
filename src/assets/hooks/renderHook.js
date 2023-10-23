import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { dataDB } from "../../firebase";

export const useRender = (lang, level, price) => {
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    onValue(dataDB, (snapshot) => {
      const data = snapshot.val();
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
    });
  }, [dataDB]);

  console.log("renderData", renderData);
  return renderData;
};
