import { Input } from "../Board/TBoard"

export interface SquareProps {
	value: Input;
	onSquareClick: () => void;
};
