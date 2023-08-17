import React, { useEffect, useState, useRef } from "react";
import "./WordInput.css";
import WordDisplay from "./WordDisplay";
import EndGameDialog from "./EndGameDialog";
import Keyboard from "./Keyboard";

function WordInput() {
	const [fiveLetterWord, setFiveLetterWord] = useState("");
	const [guess, setGuess] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [input, setInput] = useState("");
	const [isCorrect, setIsCorrect] = useState(false);
	const [guessNumber, setGuessNumber] = useState(0);
	const [gameEnded, setGameEnded] = useState(false);
	const [open, setOpen] = useState(false);
	const inputRef = useRef(null);
	useEffect(() => {
		checkIfGuessIsCorrect();
		setInput("");
		setGuess("");
	}, [guess]);

	useEffect(() => {
		setGuessNumber(guessNumber);
	}, [guessNumber]);

	useEffect(() => {
		async function fetchFiveLetterWord() {
			try {
				const response = await fetch(
					"https://random-word-api.herokuapp.com/word?number=1&length=5&"
				);
				const data = await response.json();
				if (data[0]) {
					setFiveLetterWord(data[0]);
				} else {
					console.error("No word received from API");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchFiveLetterWord();
	}, []);

	const handleGuessClick = () => {
		if (input.length === 5) {
			setGuesses((current) => [...current, input]);
			setGuess(input);
		}
	};
	useEffect(() => {
		const handleGlobalClick = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				inputRef.current.focus();
			}
		};
		document.addEventListener("click", handleGlobalClick);
		return () => {
			document.removeEventListener("click", handleGlobalClick);
		};
	}, []);

	const checkIfGuessIsCorrect = () => {
		if (guess === fiveLetterWord && fiveLetterWord !== "") {
			setIsCorrect(true);
			setTimeout(() => {
				setGameEnded(true);
				setOpen(true);
			}, 2000);
		} else {
			setGuessNumber(guessNumber + 1);
			if (guessNumber === 6 && !isCorrect) {
				setTimeout(() => {
					setGameEnded(true);
					setOpen(true);
				}, 2000);
			}
		}
	};

	const handleKeyboardEvent = (event) => {
		if (/^[a-zA-Z]+$/.test(event) && event.length === 1) {
			setInput((input) => input.concat(event));
		}
		if (event === "backspace") {
			setInput((input) => input.slice(0, -1));
		}
		if (event === "Enter") {
			handleGuessClick();
		}
	};

	return (
		<div className="flex flex-col w-full items-center">
			<WordDisplay
				guess={input}
				guessNumber={guessNumber}
				guessesArray={guesses}
				word={fiveLetterWord}></WordDisplay>
			<input
				ref={inputRef}
				pattern="[A-Za-z]"
				maxLength={5}
				type="text"
				className="outline-none w-[0px]"
				placeholder=""
				value={input}
				disabled={isCorrect}
				onChange={(e) => setInput(e.target.value.replace(/[^a-z]/gi, ""))}
			/>
			<div className="flex flex-col space-y-6 items-center w-full">
				<button
					onClick={handleGuessClick}
					className="px-3 py-1 bg-sky-700 text-neutral-50 text-2xl rounded-lg w-1/3">
					Guess!
				</button>
				<Keyboard handleKeyboardEvent={handleKeyboardEvent} />
			</div>
			<EndGameDialog open={open} isCorrect={isCorrect} word={fiveLetterWord} />
		</div>
	);
}

export default WordInput;
