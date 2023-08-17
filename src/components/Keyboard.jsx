import React, { useEffect, useState } from "react";
import "./Keyboard.css";
function Keyboard({
	handleKeyboardEvent,
	correctLetters,
	presentLetters,
	absentLetters,
}) {
	const tailwindClassNormalKey =
		"flex items-center justify-center bg-slate-300 text-slate-800 text-md md:text-xl w-6 md:w-12 py-2 md:mx-1 uppercase rounded-lg font-medium";
	const tailwindClassWideKey =
		"flex items-center justify-center bg-slate-300 text-slate-800 text-md text-md md:text-xl w-6 md:w-12 md:mx-1 py-2 w-[1.7rem] uppercase rounded-lg font-medium";
	const tailwindClassExtraWideKey =
		"flex items-center justify-center bg-slate-300 text-slate-800 text-md py-2 px-1 uppercase rounded-lg md:mx-1 font-medium";

	let keyboardTopRow = [
		{ sign: "q", class: tailwindClassNormalKey, keyFromKeyboard: "q" },
		{ sign: "w", class: tailwindClassNormalKey, keyFromKeyboard: "w" },
		{ sign: "e", class: tailwindClassNormalKey, keyFromKeyboard: "e" },
		{ sign: "r", class: tailwindClassNormalKey, keyFromKeyboard: "r" },
		{ sign: "t", class: tailwindClassNormalKey, keyFromKeyboard: "t" },
		{ sign: "y", class: tailwindClassNormalKey, keyFromKeyboard: "y" },
		{ sign: "u", class: tailwindClassNormalKey, keyFromKeyboard: "u" },
		{ sign: "i", class: tailwindClassNormalKey, keyFromKeyboard: "i" },
		{ sign: "o", class: tailwindClassNormalKey, keyFromKeyboard: "o" },
		{ sign: "p", class: tailwindClassNormalKey, keyFromKeyboard: "p" },
	];

	let keyboardMiddleRow = [
		{ sign: "a", class: tailwindClassWideKey, keyFromKeyboard: "a" },
		{ sign: "s", class: tailwindClassWideKey, keyFromKeyboard: "s" },
		{ sign: "d", class: tailwindClassWideKey, keyFromKeyboard: "d" },
		{ sign: "f", class: tailwindClassWideKey, keyFromKeyboard: "f" },
		{ sign: "g", class: tailwindClassWideKey, keyFromKeyboard: "g" },
		{ sign: "h", class: tailwindClassWideKey, keyFromKeyboard: "h" },
		{ sign: "j", class: tailwindClassWideKey, keyFromKeyboard: "j" },
		{ sign: "k", class: tailwindClassWideKey, keyFromKeyboard: "k" },
		{ sign: "l", class: tailwindClassWideKey, keyFromKeyboard: "l" },
	];

	let keyboardBottomRow = [
		{
			sign: "DEL",
			class: tailwindClassExtraWideKey,
			keyFromKeyboard: "backspace",
		},
		{ sign: "z", class: tailwindClassNormalKey, keyFromKeyboard: "z" },
		{ sign: "x", class: tailwindClassNormalKey, keyFromKeyboard: "x" },
		{ sign: "c", class: tailwindClassNormalKey, keyFromKeyboard: "c" },
		{ sign: "v", class: tailwindClassNormalKey, keyFromKeyboard: "v" },
		{ sign: "b", class: tailwindClassNormalKey, keyFromKeyboard: "b" },
		{ sign: "n", class: tailwindClassNormalKey, keyFromKeyboard: "n" },
		{ sign: "m", class: tailwindClassNormalKey, keyFromKeyboard: "m" },
		{
			sign: "Enter",
			class: tailwindClassExtraWideKey,
			keyFromKeyboard: "Enter",
		},
	];

	return (
		<>
			<div className="w-full flex flex-col space-y-2">
				<div className="w-full flex justify-between">
					{keyboardTopRow.map((key, index) => (
						<button
							className={key.class}
							key={index}
							style={
								correctLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#65a30d", color: "white" }
									: presentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#fbbf24", color: "white" }
									: absentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#94a3b8", color: "white" }
									: {}
							}
							onClick={(event) => handleKeyboardEvent(key.keyFromKeyboard)}>
							{key.sign}
						</button>
					))}
				</div>
				<div className="w-full flex justify-between">
					{keyboardMiddleRow.map((key, index) => (
						<button
							className={key.class}
							key={index}
							style={
								correctLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#65a30d", color: "white" }
									: presentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#fbbf24", color: "white" }
									: absentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#94a3b8", color: "white" }
									: {}
							}
							onClick={(event) => handleKeyboardEvent(key.keyFromKeyboard)}>
							{key.sign}
						</button>
					))}
				</div>
				<div className="w-full flex justify-between">
					{keyboardBottomRow.map((key, index) => (
						<button
							className={key.class}
							key={index}
							style={
								correctLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#65a30d", color: "white" }
									: presentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#fbbf24", color: "white" }
									: absentLetters.includes(key.keyFromKeyboard)
									? { backgroundColor: "#94a3b8", color: "white" }
									: {}
							}
							onClick={(event) => handleKeyboardEvent(key.keyFromKeyboard)}>
							{key.sign}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default Keyboard;
