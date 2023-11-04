import { useEffect, useState } from "react";
import { Card } from "../componens/Card";
import { TeacherWrap } from "./TeachersPages.styled";
import { useRender } from "../assets/hooks/renderHook";
import { Context } from "../App";
import { DataState } from "../DataContext";
import { Header } from "../componens/Header";
import { SelectEl } from "../componens/SelectEl";
// import { getDatabase, ref, child, get } from "firebase/database";

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
const langList = [
  "French",
  "English",
  "German",
  "Ukrainian",
  "Polish",
];

const levelList = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];

export const Teachers = () => {
  const [favourite, setFavourite] = useState(null);
  const [price, setPrice] = useState("");
  const [lang, setLang] = useState("");
  const [level, setLevel] = useState("");

  const { user } = DataState();
  useEffect(() => {
    const typeSite =
      location.pathname === "/learnlingvo/teachers" ? false : true;
    setFavourite((prev) => typeSite);
  }, [location.pathname]);

  const { renderData, prices, languages } = useRender(
    lang,
    level,
    price,
    favourite
  );

  console.log("renderData", renderData);

  const priceOptions = [{ value: "", label: "All prices" }];
  const langOptions = [{ value: "", label: "All prices" }];
  const levelOptions = [{ value: "", label: "All prices" }];
  prices.map((el) => priceOptions.push({ value: el, label: el }));
  languages.map((el) => langOptions.push({ value: el, label: el }));
  levelList.map((el) => levelOptions.push({ value: el, label: el }));
  // console.log("opt", opt);
  // const handlePrice = (priceData) => {
  //   setPrice(priceData);
  //   console.log("priceData", priceData);
  // };

  return (
    <>
      <Header></Header>
      <TeacherWrap>
        <SelectEl
          opt={langOptions}
          onChange={(list) => setLang(list)}
        />
        <SelectEl
          opt={levelOptions}
          onChange={(list) => setLevel(list)}
        />
        <SelectEl
          opt={priceOptions}
          onChange={(list) => setPrice(list)}
        />
        {renderData &&
          renderData.map((el) => <Card key={`${el.id}`} el={el} />)}
      </TeacherWrap>
    </>
  );
};
