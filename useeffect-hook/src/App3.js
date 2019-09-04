import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  function tick() {
    setTime(new Date().toLocaleTimeString());
  }

  return <p>Time: {time}</p>;
}

export default App;
