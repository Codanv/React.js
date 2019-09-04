import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `The Count # ${count}`;
  });

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>The Count #{count}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default App;
