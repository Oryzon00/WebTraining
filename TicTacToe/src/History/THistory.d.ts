import { Input } from "../App/TApp";

interface HistoryProps {
	history: Array<Array<Input>>
	jumpTo: (move: number) => void;
};
