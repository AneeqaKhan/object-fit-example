import { useState } from "react";
import "./styles.css";

export default function App() {
  const [styleClass, setstyleClass] = useState("none");
  return (
    <div className="App">
      <div className="btns-Container">
        <button onClick={() => setstyleClass("contain")}>Contain</button>
        <button onClick={() => setstyleClass("cover")}>Cover</button>
        <button onClick={() => setstyleClass("fill")}>Fill</button>
        <button onClick={() => setstyleClass("scale-down")}>Scale down</button>
        <button onClick={() => setstyleClass("none")}>None</button>
      </div>
      <div>
        <img
          src={require("./example.jpeg")}
          alt="example-img"
          className={styleClass}
        />
      </div>
    </div>
  );
}
