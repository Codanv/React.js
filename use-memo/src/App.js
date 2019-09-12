import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }

  const memoComponent = useMemo(() => {
    return <AnotherComponent />;
  }, [count]);

  return (
    <>
      {count}
      <button onClick={handleClick}>Increase</button>
      {count2}
      <button onClick={handleClick2}>Increase</button>
      <AnotherComponent />
      {memoComponent}
    </>
  );
}

function AnotherComponent() {
  return <p>{Math.random()}</p>;
}

export default App;
