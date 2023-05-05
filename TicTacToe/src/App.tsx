import { useState } from "react";

interface Sign {
	value: "X" | "O" | "";
}

function Square({ value }: Sign) {
	return <button className="square" >{value}</button>;
}

function Board() {
	const [squares, setSquares] = useState(Array< "X" | "O" | "">(9).fill(""));
	return (
		<>
			<div className="board-row">
				<Square value={squares[0]} />
				<Square value={squares[1]} />
				<Square value={squares[2]} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} />
				<Square value={squares[4]} />
				<Square value={squares[5]} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} />
				<Square value={squares[7]} />
				<Square value={squares[8]} />
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
