import React from "react";

import "./App.css";
import useCounter from "./use-counter";

function App() {
  const [count1, increase1, decrease1] = useCounter(3, 10);
  const [count2, increase2, decrease2] = useCounter(100, 1);
  const [count3, increase3, decrease3] = useCounter(13, 0);
  const [count4, increase4, decrease4] = useCounter(193, 3);

  return (
    <>
      <div className="app1">
        <h1>{count1}</h1>
        <button onClick={increase1}>+</button>
        <button onClick={decrease1}>-</button>
      </div>
      <div className="app2">
        <h1>{count2}</h1>
        <button onClick={increase2}>+</button>
        <button onClick={decrease2}>-</button>
      </div>
      <div className="app3">
        <h1>{count3}</h1>
        <button onClick={increase3}>+</button>
        <button onClick={decrease3}>-</button>
      </div>
      <div className="app4">
        <h1>{count4}</h1>
        <button onClick={increase4}>+</button>
        <button onClick={decrease4}>-</button>
      </div>
    </>
  );
}

export default App;
