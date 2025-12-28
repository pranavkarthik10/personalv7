"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const tweets = [
	"1135700109931343872",
	"1275225681794748416",
	"1282204149082230784",
	"1997875261669621787"
];

export default function MentionsPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	useEffect(() => {
		if (!isHovered) {
			const interval = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % tweets.length);
			}, 6000);
			return () => clearInterval(interval);
		}
	}, [isHovered]);

	const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % tweets.length);
	const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + tweets.length) % tweets.length);

	return (
		<main className="px-8 pt-8 border-t border-dashed">
			<div>
				<h1 className="text-4xl font-medium tracking-tight flex items-center gap-3">
					<MessageCircle className="w-8 h-8" />
					Mentions
				</h1>
				<p className="text-muted-foreground mt-2 text-lg">
					Notable shoutouts and mentions from around the web.
				</p>
			</div>

			{/* Tweet Carousel */}
			<div className="mt-12 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<div className="rounded-lg border border-border bg-muted/30 p-8">
					<div className="flex justify-center items-center min-h-[400px]">
						{tweets.map((tweetId, index) => (
							<div
								key={tweetId}
								className={`w-full max-w-xl mx-auto ${index === currentIndex ? 'block' : 'hidden'}`}
							>
								<blockquote
									className="twitter-tweet"
									data-theme="dark"
									data-dnt="true"
									data-conversation="none"
								>
									<a href={`https://twitter.com/x/status/${tweetId}`}></a>
								</blockquote>
							</div>
						))}
					</div>
				</div>

				{/* Navigation arrows */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
					aria-label="Previous tweet"
				>
					<ChevronLeft size={20} />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
					aria-label="Next tweet"
				>
					<ChevronRight size={20} />
				</button>

				{/* Dot indicators */}
				<div className="flex justify-center gap-2 mt-6">
					{tweets.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-all ${
								index === currentIndex ? 'bg-foreground w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
							}`}
							aria-label={`Go to tweet ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
