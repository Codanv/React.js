import React, { useState, useEffect, useRef } from "react";

import TodoForm from "./Todo-form";
import TodoList from "./Todo-list";

import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [items, setItem] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function removeItem(key) {
    const filteredItems = items.filter(item => item.key !== key);
    setItem(filteredItems);
  }

  function addToCurrent(e) {
    if (e.target.value !== "") {
      setCurrent(e.target.value);
    }
  }

  function addItems(e) {
    e.preventDefault();
    const item = { task: current, key: Date.now() };
    setItem([...items, item]);
    inputRef.current.value = "";
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList removeItem={removeItem} items={items} />
      <TodoForm
        addToCurrent={addToCurrent}
        inputRef={inputRef}
        addItems={addItems}
      />
    </div>
  );
}

export default App;
