import logo from "./logo.svg";
import "./App.css";
import WordInput from "./components/WordInput.jsx";
import WordDisplay from "./components/WordDisplay.jsx";

function App() {
	return (
		<div
			className="flex flex-col items-center pt-16
		">
			<span className="text-neutral-800 text-5xl font-medium">
				Wordle Clonle
			</span>
			<div className="flex flex-col items-center pt-6">
				<WordInput />
			</div>
		</div>
	);
}

export default App;
