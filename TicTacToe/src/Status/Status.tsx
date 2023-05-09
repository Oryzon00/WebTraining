import { StatusProps } from "./TStatus";

function Status({ winner }: StatusProps) {
	if (winner === "") return <h2> No winner... yet?</h2>;
	else if (winner === "equality") return <h2> Equality! </h2>;
	else return <h2> {winner} won ! Congratz! </h2>;
}

export default Status;
