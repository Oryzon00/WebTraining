import { useState } from "react";

import Board from "../Board/Board";
import ResetButton from "../ResetButton/ResetButton";
import Status from "../Status/Status";
import History from "../History/History";
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

function App() {
	const [xTurn, setXTurn] = useState(true);
	const [history, setHistory] = useState([Array<Input>(9).fill("")]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];

	function handleReset(): void {
		setXTurn(true);
		jumpToMove(0);
		const nextHistory = [Array<Input>(9).fill("")];
		setHistory(nextHistory);
	}

	function handleSquareClick(index: number): void {
		if (currentSquares[index] !== "" || checkWinner(currentSquares) !== "")
			return;

		const nextSquares = currentSquares.slice();
		if (xTurn === true) nextSquares[index] = "X";
		else nextSquares[index] = "O";

		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

		setXTurn(!xTurn);
		setHistory(nextHistory);
		setCurrentMove(currentMove + 1);
	}

	function jumpToMove(move: number): void {
		setCurrentMove(move);
		setXTurn(move % 2 === 0);
	}

	return (
		<div className="game">
			<div className="board">
				<Board
					onSquareClick={handleSquareClick}
					squares={currentSquares}
				/>
			</div>
			<div className="status">
				<Status winner={checkWinner(currentSquares)} xTurn={xTurn} />
			</div>
			<div className="button">
				<ResetButton onButtonClick={() => handleReset()} />
			</div>
			<div className="game-info">
				<History history={history} jumpTo={jumpToMove} />
			</div>
		</div>
	);
}

export default App;
