import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addUser, removeUser } from "./actions";

const App = () => {
  const count = useSelector(state => state.counterReducer);
  const users = useSelector(state => state.userReducer);

  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={userRef} />
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <button onClick={() => dispatch(removeUser(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
