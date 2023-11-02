import { useContext, useEffect, useState } from "react";
import { Card } from "../componens/Card";
import { dataDB } from "../firebase";
import { onValue } from "firebase/database";
import { TeacherWrap } from "./TeachersPages.styled";
import { useRender } from "../assets/hooks/renderHook";
import { Context } from "../App";
import { DataState } from "../DataContext";
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
  const { user } = DataState();
  const lang = "";
  // const level = "C1 Advanced";
  const level = "";
  const price = "";
  const favourite = false;

  const renderData = useRender(lang, level, price, favourite);
  const prices = [
    ...new Set(renderData.flatMap((item) => item.price_per_hour)),
  ].sort((a, b) => a - b);
  console.log("renderData", renderData, prices);

  return (
    <TeacherWrap>
      {renderData &&
        renderData.map((el) => <Card key={`${el.id}`} el={el} />)}
    </TeacherWrap>
  );
};
