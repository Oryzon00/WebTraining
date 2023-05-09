import Board from "./Board/Board";
import Status from "./Status/Status";
import ResetButton from "./ResetButton/ResetButton";

import { useState } from "react";

function checkWinner(squares: Array<Input>): Input | "equality" {
	const lines: Array<Array<number>> = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i: number = 0; i < lines.length; i++) {
		const [a, b, c]: number[] = lines[i];
		if (
			squares[a] != "" &&
			squares[a] === squares[b] &&
			squares[b] == squares[c]
		)
			return squares[a];
	}

	if (!squares.includes("")) return "equality";

	return "";
}

function App() {
	const [xTurn, setXTurn] = useState(true);
	const [squares, setSquares] = useState(Array<Input>(9).fill(""));

	function handleReset(): void {
		const nextSquares = squares.slice();
		nextSquares.fill("");
		setSquares(nextSquares);
		setXTurn(true);
	}

	function handleClick(index: number): void {
		if (squares[index] !== "" || checkWinner(squares) !== "") return;

		const nextSquares = squares.slice();
		if (xTurn === true) nextSquares[index] = "X";
		else nextSquares[index] = "O";

		setXTurn(!xTurn);
		setSquares(nextSquares);
	}

	return (
		<>
			<div>
				<Board />
			</div>

			<div>
				<Status winner={checkWinner(squares)} />
			</div>
			<div>
				<ResetButton onButtonClick={() => handleReset()} />
			</div>
		</>
	);
}

export default App;
