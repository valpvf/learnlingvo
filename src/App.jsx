// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePages";
import { Teachers } from "./pages/TeachersPages";
import { auth } from "./firebase.js";
import { createContext, useState } from "react";

export const Context = createContext(null);

function App() {
  const [isAuth, setIsAuth] = useState(auth.currentUser);
  return (
    <Context.Provider value={{ isAuth }}>
      <Routes>
        <Route exact path="/" element={<Home />} />;
        <Route exact path="/teachers" element={<Teachers />} />;
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
{
  /* <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
}
