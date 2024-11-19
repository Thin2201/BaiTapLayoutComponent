import { useState } from "react";
import "./App.css";
import BaiTap from "./BaiTap-React/BaiTap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BaiTap />
    </>
  );
}

export default App;
