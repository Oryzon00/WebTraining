import { Input } from "../App";

interface BoardProps {
	onSquareClick: (index: number) => void;
	squares: Array<Input>;
};
