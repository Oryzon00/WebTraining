import { useState } from "react";

import Board from "../Board/Board";
import ResetButton from "../ResetButton/ResetButton";
import Status from "../Status/Status";
// import Hist
import { Input } from "./TApp";
import "./App.styles.css";

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

// function historyDisplay(history: Array<Array<Input>>) {}

function App() {
	const [xTurn, setXTurn] = useState(true);
	const [squares, setSquares] = useState(Array<Input>(9).fill(""));
	const [history, setHistory] = useState([Array<Input>(9).fill("")]);

	// function handleJumpHistory(): void {}

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
		setHistory(history.concat(nextSquares));
		setSquares(nextSquares);
	}

	return (
		<div className="game">
			<div className="board">
				<Board onSquareClick={handleClick} squares={squares} />
			</div>
			<div className="status">
				<Status winner={checkWinner(squares)} />
			</div>
			{/* <div className="game-info">
				<History
			</div> */}
			<div className="button">
				<ResetButton onButtonClick={() => handleReset()} />
			</div>
		</div>
	);
}

export default App;
