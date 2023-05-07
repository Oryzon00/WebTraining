import { useState } from "react";

interface SquareProps {
	value: "X" | "O" | "";
	onSquareClick: () => void;
}

interface ResetButtonProps {
	onButtonClick: () => void;
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

function Board() {
	const [xTurn, setXTurn] = useState(true);
	const [squares, setSquares] = useState(Array<"X" | "O" | "">(9).fill(""));

	function handleReset(): void {
		const nextSquares = squares.slice();
		nextSquares.fill("");
		setSquares(nextSquares);
	}

	function handleClick(index: number): void {
		if (squares[index] !== "") return;
		const nextSquares = squares.slice();
		if (xTurn === true) nextSquares[index] = "X";
		else nextSquares[index] = "O";
		setXTurn(!xTurn);
		setSquares(nextSquares);
	}

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
