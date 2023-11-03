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

export const Teachers = () => {
  const [favourite, setFavourite] = useState(null);
  // const [renderData, setRenderData] = useState(false);
  const { user } = DataState();
  const lang = "";
  // const level = "C1 Advanced";
  const level = "";
  const price = "";
  useEffect(() => {
    const typeSite =
      location.pathname === "/learnlingvo/teachers" ? false : true;
    setFavourite((prev) => typeSite);
  }, [location.pathname]);

  console.log("favourite", favourite);

  const renderData = useRender(lang, level, price, favourite);

  const prices = [
    ...new Set(renderData.map((item) => item.price_per_hour)),
  ].sort((a, b) => a - b);
  console.log("renderData", renderData, prices);

  return (
    <>
      <Header></Header>
      <TeacherWrap>
        <SelectEl></SelectEl>
        {renderData &&
          renderData.map((el) => <Card key={`${el.id}`} el={el} />)}
      </TeacherWrap>
    </>
  );
};
