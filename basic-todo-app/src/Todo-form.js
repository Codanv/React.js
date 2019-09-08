import React from "react";

function TodoForm({ addItems, addToCurrent, inputRef }) {
  return (
    <form onSubmit={addItems}>
      <p>Add Task</p>
      <input
        type="text"
        placeholder="Your Task"
        onChange={addToCurrent}
        ref={inputRef}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;
