import { useEffect, useState } from "react";
import { Card } from "../componens/Card";
import { dataDB } from "../firebase";
import { onValue } from "firebase/database";
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
  const [renderData, setRenderData] = useState(null);
  useEffect(() => {
    onValue(dataDB, (snapshot) => {
      const data = snapshot.val();
      setRenderData(data);
    });
  }, [dataDB]);
  console.log("renderData[1]", renderData);

  return (
    <>
      {renderData &&
        renderData.map((el) => (
          <Card key={`${el.name} ${el.surname}`} el={el} />
        ))}
    </>
  );
};
