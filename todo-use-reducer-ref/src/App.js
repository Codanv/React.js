import React, { useReducer, useRef, useEffect } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { name: action.name }];
    case "remove":
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Task" ref={inputRef} />
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
