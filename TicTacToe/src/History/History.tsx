import { Input } from "../App/TApp";

interface HistoryProps {
	history: Array<Array<Input>>
};



function History({history}: HistoryProps) {

	const lines = history.map(
		
	)
	
	return (
		<ol>
			<HistoryLine />
		</ol>
	)
}

export History;
