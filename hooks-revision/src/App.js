import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer
} from "react";

const ReferenceContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count1, setCount1] = useState(10);
  const [count2, dispatch] = useReducer(reducer, 0);

  const inputRef = useRef(null);

  useEffect(
    function() {
      inputRef.current.focus();
      console.log("called... from useEffect");
    },
    [count2]
  );

  function decreaseCount1() {
    setCount1(count1 - 1);
  }

  return (
    <ReferenceContext.Provider value={inputRef}>
      <p>
        count1: {count1}
        <button onClick={decreaseCount1}>Decrease</button>
      </p>
      <p>
        count2: {count2}
        <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
        <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      </p>
      <Random />
      <Message />
    </ReferenceContext.Provider>
  );
}

function Random() {
  return <p>{Math.random()}</p>;
}

function Message() {
  const inputRef = useContext(ReferenceContext);
  return <input type="text" ref={inputRef} />;
}

export default App;
