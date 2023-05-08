import { useState } from "react";

interface SquareProps {
	value: Input;
	onSquareClick: () => void;
}

interface ResetButtonProps {
	onButtonClick: () => void;
}

interface StatusProps {
	winner: Input | "equality";
}

type Input = "X" | "O" | "";

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

function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function ResetButton({ onButtonClick }: ResetButtonProps) {
	return <button onClick={onButtonClick}> RESET </button>;
}

function Status({ winner }: StatusProps) {
	if (winner === "") return <h2> No winner... yet?</h2>;
	else if (winner === "equality") return <h2> Equality! </h2>;
	else return <h2> {winner} won ! Congratz! </h2>;
}

function Board() {
	const [xTurn, setXTurn] = useState(true);
	const [squares, setSquares] = useState(Array<Input>(9).fill(""));

	function handleReset(): void {
		const nextSquares = squares.slice();
		nextSquares.fill("");
		setSquares(nextSquares);
	}

	function handleClick(index: number): void {
		if (squares[index] !== "" || checkWinner(squares) !== "") return;

		const nextSquares = squares.slice();
		if (xTurn === true) nextSquares[index] = "X";
		else nextSquares[index] = "O";

		setXTurn(!xTurn);
		setSquares(nextSquares);
	}

		//faire ca en boucle for
	return (
		<>
			<div className="board-row"> 
				<Square
					value={squares[0]}
					onSquareClick={() => handleClick(0)}
				/>
				<Square
					value={squares[1]}
					onSquareClick={() => handleClick(1)}
				/>
				<Square
					value={squares[2]}
					onSquareClick={() => handleClick(2)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[3]}
					onSquareClick={() => handleClick(3)}
				/>
				<Square
					value={squares[4]}
					onSquareClick={() => handleClick(4)}
				/>
				<Square
					value={squares[5]}
					onSquareClick={() => handleClick(5)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[6]}
					onSquareClick={() => handleClick(6)}
				/>
				<Square
					value={squares[7]}
					onSquareClick={() => handleClick(7)}
				/>
				<Square
					value={squares[8]}
					onSquareClick={() => handleClick(8)}
				/>
			</div>
			<div>
				<ResetButton onButtonClick={() => handleReset()} />
			</div>
			<div>
				<Status winner={checkWinner(squares)} />
			</div>
		</>
	);
}

function Game() {
	useState()
	return (
		<>
			<Board />
			<ResetButton />
			<Status />
		</>
	);
}

function App() {
	return (
		<div>
			<Board />
		</div>
	);
}

export default App;
