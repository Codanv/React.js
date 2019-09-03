import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(parseInt(props.initialValue));
  const [another, setAnother] = useState("something");

  function handleCountClick() {
    setCount(count + 1);
  }

  function handleAnotherClick() {
    setAnother(another + " is better than nothing");
  }

  return (
    <div>
      <h2>Count #{count}</h2>
      <p>-- {another}</p>
      <AnotherComponent initialValue={props.initialValue} />
      <button onClick={handleCountClick}>Increase</button>
      <button onClick={handleAnotherClick}>Add text</button>
    </div>
  );
}

function AnotherComponent(props) {
  return <h1>{props.initialValue}</h1>;
}

export default App;
