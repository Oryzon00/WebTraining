import { StatusProps } from "./TStatus";

function Status({ winner, xTurn }: StatusProps) {
	let status: string;

	if (winner === "") {
		status = "next turn: " + (xTurn ? "X" : "O");
	} else if (winner === "equality") {
		status = "Equality!";
	} else {
		status = winner + " won ! Congratz";
	}
	return <h2> {status}</h2>;
}

export default Status;
