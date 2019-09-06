import { useState } from "react";

function useCounter(initialValue, step) {
  const [count, setCount] = useState(initialValue);

  function increase() {
    setCount(count + step);
  }

  function decrease() {
    setCount(count - step);
  }

  return [count, increase, decrease];
}

export default useCounter;
