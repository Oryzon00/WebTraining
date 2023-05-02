import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
//   let count: number = 0;

  // const handleButton = () => {

  // }

  function handleButton() : void {
	setCount(count + 1);
	console.log(count);
  }

  function resetButton() : void {
	setCount(count - 100); // why count = 0 ne marche pas
  }

  function nameButton(count: number) : string {
	if (count >= 10)
		return ("Oh wow you are too rough senpaii Owo");
	else
		return ("Click me Senpaii~~ uwu");
  }

  return (
    <div>
      <button onClick={handleButton}> {nameButton(count)} </button>
	  <p>You have clicked: {count} times ! Uwuuuu~</p>
	  <button onClick={resetButton}> DON'T CLICK HERE !!! </button>
    </div>
  );
}

export default App;
