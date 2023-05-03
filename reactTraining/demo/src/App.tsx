import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleButton(): void {
    setCount(count + 1);
    console.log(`count = ${count}`);
  }

  function resetButton(): void {
    setCount(0);
    console.log("reset count");
  }

  function nameButton(count: number): string {
    if (10 <= count && count < 9000)
      return "Oh wow you are too rough senpaii Owo";
    else if (count >= 9000) return "IT'S OVER 9000 !!!";
    else return "Click me Senpaii~~ uwu";
  }

  useEffect(function () {
    console.log("MONTAGE");
    setCount(count + 1);
    return function () {
      console.log("DEMONTAGE");
    };
  }, []);

  return (
    <div>
      <button
        onClick={function () {
          handleButton();
        }}
      >
        {nameButton(count)}
      </button>
      <p>You have clicked {count } times</p>
      <button onClick={() => resetButton()}>reset</button>
    </div>
  );
}

export default App;
