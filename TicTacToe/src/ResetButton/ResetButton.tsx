import { ResetButtonProps } from "./TResetButton";

function ResetButton({ onButtonClick }: ResetButtonProps) {
	return <button onClick={onButtonClick}> RESET </button>;
}

export default ResetButton;
