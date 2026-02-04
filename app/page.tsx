"use client";

import { useState, useEffect } from "react";

export default function Home() {
	const [step, setStep] = useState(0);
	const [hearts, setHearts]: any = useState([]);
	const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

	// Heart animation
	useEffect(() => {
		const interval = setInterval(() => {
			const id = Math.random().toString(36).substr(2, 9);
			setHearts((prev: any) => [
				...prev,
				{
					id,
					left: Math.random() * 90 + "%",
					size: Math.random() * 2 + 1 + "rem",
					duration: Math.random() * 5 + 5 + "s",
				},
			]);
			setTimeout(() => {
				setHearts((prev: any) => prev.filter((h: any) => h.id !== id));
			}, 10000);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	// Move the No button randomly
	const handleNoHover = () => {
		const top = Math.random() * 70 + 15 + "%";
		const left = Math.random() * 70 + 15 + "%";
		setNoPosition({ top, left });
	};

	return (
		<div className="relative min-h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden p-4">
			{/* Hearts */}
			{hearts.map((heart) => (
				<div
					key={heart.id}
					className="absolute text-pink-500 animate-heart"
					style={{
						left: heart.left,
						fontSize: heart.size,
						animationDuration: heart.duration,
					}}
				>
					❤️
				</div>
			))}

			{/* Quest Steps */}
			{step === 0 && (
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-pulse">
						Roses are red, violets are blue...
					</h1>
					<p className="text-xl md:text-2xl text-pink-700 mb-8">
						I made this website just for YOU 💖
					</p>
					<button
						onClick={() => setStep(1)}
						className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
					>
						Start Your Quest
					</button>
				</div>
			)}

			{step === 1 && (
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-6">
						Step 1: Pick your Valentine gift
					</h2>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<button
							onClick={() => setStep(2)}
							className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
						>
							🍫 Chocolate
						</button>
						<button
							onClick={() => setStep(2)}
							className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
						>
							🐻 Teddy Bear
						</button>
					</div>
				</div>
			)}

			{step === 2 && (
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-6">
						Step 2: Choose your adventure
					</h2>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<button
							onClick={() => setStep(3)}
							className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
						>
							🌹 Romantic
						</button>
						<button
							onClick={() => setStep(3)}
							className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
						>
							🥳 Silly & Fun
						</button>
					</div>
				</div>
			)}

			{step === 3 && (
				<div className="text-center relative">
					<h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
						Will you be my Valentine? 💌
					</h2>
					<div className="flex justify-center gap-6 relative">
						<button
							onClick={() => alert("Yay! 💖 Can't wait to celebrate!")}
							className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
						>
							Yes
						</button>

						<button
							onMouseEnter={handleNoHover}
							style={{ position: "absolute", ...noPosition }}
							className="bg-pink-300 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300"
						>
							No
						</button>
					</div>
				</div>
			)}

			<footer className="absolute bottom-4 text-pink-400 text-sm text-center w-full">
				💌 Made with ❤️ and chatGPT by your Hubby/Boy Friend/Best Friend/FuBu
			</footer>

			<style jsx>{`
				@keyframes heartMove {
					0% {
						transform: translateY(0) scale(1);
						opacity: 1;
					}
					50% {
						transform: translateY(-150px) scale(1.2);
						opacity: 0.8;
					}
					100% {
						transform: translateY(-300px) scale(0.8);
						opacity: 0;
					}
				}

				.animate-heart {
					animation-name: heartMove;
					animation-timing-function: ease-in-out;
					animation-iteration-count: 1;
				}
			`}</style>
		</div>
	);
}
