import React from "react";

function TodoList({ items, removeItem }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.key}>
          {item.task} <span onClick={() => removeItem(item.key)}>&times;</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
