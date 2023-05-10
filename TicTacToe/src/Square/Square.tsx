import { SquareProps } from "./TSquare";
import "./Square.styles.css";

function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

export default Square;
