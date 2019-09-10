import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
