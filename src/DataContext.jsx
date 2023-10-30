import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "./firebase";

const Data = createContext();

const DataContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <Data.Provider value={{ user, loading }}>
      {children}
    </Data.Provider>
  );
};

export default DataContext;

export const DataState = () => {
  return useContext(Data);
};
