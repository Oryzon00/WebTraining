import { Input } from "../App/TApp";
import { HistoryProps } from "./THistory";

function History({ history, jumpTo }: HistoryProps) {
	function createHistoryLines(_value: Array<Input>, move: number) {
		let description: string;
		if (move > 0) {
			description = `Go to move ${move}`;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	}

	const moves = history.map(createHistoryLines);

	return <ol>{moves}</ol>;
}

export default History;
