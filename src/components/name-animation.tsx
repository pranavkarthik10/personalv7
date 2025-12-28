"use client";

import { useState } from "react";

const FINAL_TEXT = "Pranav Karthik";
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function getRandomChar() {
	return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

export default function NameAnimation() {
	const [displayText, setDisplayText] = useState("Pranav");
	const [charStyles, setCharStyles] = useState<string[]>([]);
	const [isHovering, setIsHovering] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const shuffleText = () => {
		let iterations = 0;
		const maxIterations = FINAL_TEXT.length * 3 + 15;

		const interval = setInterval(() => {
			let newText = "";
			const newStyles: string[] = [];

			for (let i = 0; i < FINAL_TEXT.length; i++) {
				const isSettled = i < (iterations - 5) / 3;
				const isRed = Math.random() < 0.15;

				if (isSettled) {
					newText += FINAL_TEXT[i];
					newStyles.push("");
				} else {
					newText += getRandomChar();
					newStyles.push(isRed ? "text-red-500" : "");
				}
			}

			setDisplayText(newText);
			setCharStyles(newStyles);
			iterations++;

			if (iterations > maxIterations) {
				clearInterval(interval);
				setDisplayText(FINAL_TEXT);
				setCharStyles([]);
				setIsAnimating(false);
			}
		}, 40);
	};

	const handleMouseEnter = () => {
		setIsHovering(true);
		if (!isAnimating) {
			setIsAnimating(true);
			shuffleText();
		}
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	return (
		<span className="inline-block">
			<span className="opacity-50">hey I&apos;m</span>{" "}
			<span
				className="cursor-pointer"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{displayText.split("").map((char, i) => (
					<span key={i} className={charStyles[i]}>
						{char}
					</span>
				))}
			</span>
		</span>
	);
}


