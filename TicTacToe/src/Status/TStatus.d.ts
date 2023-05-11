import { Input } from "../App";

export interface StatusProps {
	winner: Input | "equality";
	xTurn: boolean;
}
