import { useContext, useEffect, useState } from "react";
import { Card } from "../componens/Card";
import { dataDB } from "../firebase";
import { onValue } from "firebase/database";
import { TeacherWrap } from "./TeachersPages.styled";
import { useRender } from "../assets/hooks/renderHook";
import { Context } from "../App";
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
  const { auth } = useContext(Context);
  console.log("authTeach", auth);
  const lang = "";
  // const level = "C1 Advanced";
  const level = "";
  const price = "";

  const renderData = useRender(lang, level, price);

  return (
    <TeacherWrap>
      {renderData &&
        renderData.map((el) => (
          <Card key={`${el.name} ${el.surname}`} el={el} />
        ))}
    </TeacherWrap>
  );
};
