import "./WordDisplay.css";
import React, { useEffect, useState } from "react";

function WordDisplay({ guess, guessNumber, guessesArray, word }) {
	return (
		<div className="flex flex-col">
			{[...Array(6)].map((_, rowIndex) => (
				<div key={rowIndex} className="flex flex-row items-center mb-2">
					{rowIndex === guessNumber
						? [...Array(5)].map((_, index) => (
								<div
									className={
										guess[index]?.length > 0
											? "letter-box-active"
											: "letter-box"
									}
									key={index}>
									{guess[index]}
								</div>
						  ))
						: rowIndex < guessNumber
						? [...Array(5)].map((_, index) => (
								<div
									key={index}
									className={
										guessesArray[rowIndex]?.split("")[index] === word[index]
											? "letter-correct"
											: !word.includes(guessesArray[rowIndex]?.split("")[index])
											? "letter-absent"
											: guessesArray[rowIndex]?.split("")[index] !==
													word[index] &&
											  word.includes(guessesArray[rowIndex]?.split("")[index])
											? "letter-present"
											: ""
									}>
									{guessesArray[rowIndex]?.split("")[index]}
								</div>
						  ))
						: [...Array(5)].map((_, index) => (
								<div className="letter-box" key={index}></div>
						  ))}
				</div>
			))}
		</div>
	);
}
export default WordDisplay;
