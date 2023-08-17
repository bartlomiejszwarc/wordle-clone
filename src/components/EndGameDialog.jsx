import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";

function EndGameDialog({ open, isCorrect, word }) {
	//const [open, setOpen] = useState(false);
	return (
		<>
			{/* <button onClick={() => setOpen(true)}> Open Dialog</button> */}

			<Dialog open={open}>
				{isCorrect ? (
					<div className="w-auto flex flex-col justify-center items-center space-y-3 py-6">
						<img src="win.svg" className="w-1/2"></img>

						<span className="text-3xl text-center font-medium">
							You won, congratulations!
						</span>
						<span className="text-xl">
							You guessed{" "}
							<span className="font-bold  text-green-600">{word}</span> right.
						</span>
						<button
							className="bg-sky-600 px-3 py-1 rounded-lg text-neutral-50 font-medium"
							onClick={() => window.location.reload(true)}>
							Play again
						</button>
					</div>
				) : (
					<div className="w-auto flex flex-col justify-center items-center space-y-3 py-6">
						<img src="loss.svg" className="w-1/2"></img>

						<span className="text-3xl text-center font-medium">
							You lost, try again!
						</span>
						<span className="text-xl">
							You did not guess{" "}
							<span className="font-bold text-red-600">{word}</span>.
						</span>
						<button
							className="bg-sky-600 px-3 py-1 rounded-lg text-neutral-50 font-medium"
							onClick={() => window.location.reload(true)}>
							Play again
						</button>
					</div>
				)}
			</Dialog>
		</>
	);
}
export default EndGameDialog;
