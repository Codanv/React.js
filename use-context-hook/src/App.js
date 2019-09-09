import React, { useContext } from "react";

const MoneyContext = React.createContext();

function App() {
  return (
    <MoneyContext.Provider value="560">
      <Parent />
    </MoneyContext.Provider>
  );
}

function Parent() {
  const rate = useContext(MoneyContext);

  return (
    <>
      <p>{rate} from parent</p>
      <Child />
    </>
  );
}

function Child() {
  const money = useContext(MoneyContext);
  return <p>I am a child and have {money} .</p>;
}

export default App;
