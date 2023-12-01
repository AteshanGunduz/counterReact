import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState(0);

  // const increase = ()=>{
  //  setValue((pre)=>pre+1)
  //  setValue((pre)=>pre+1)
  // }

  const increase = () => {
    setValue(value + 1);
    setValue(value + 1);
  };

  const decrease = () => {
    setValue((pre) => pre - 1);
  };

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
