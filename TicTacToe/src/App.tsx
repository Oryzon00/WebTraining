type Props = {
	value1: string;
	value2: string;
};

function Square({ value1, value2 }: Props) {
	return <button className="square">{value1 + value2}</button>;
}

function Board() {
	return (
		<>
			<div className="board-row">
				<Square value1={"0"} value2={"1"} />
				<Square value="2" />
				<Square value="3" />
			</div>
			<div className="board-row">
				<Square value="4" />
				<Square value="5" />
				<Square value="6" />
			</div>
			<div className="board-row">
				<Square value="7" />
				<Square value="8" />
				<Square value="9" />
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
