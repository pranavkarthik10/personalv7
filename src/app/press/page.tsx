"use client";

import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const logoData = [
	{ name: "OMNI", url: "https://www.omnitv.ca/ab/en/videos/pranav-karthik-coding-prodigy/", logo: "omni-tv.png" },
	{ name: "CTV", url: "https://bc.ctvnews.ca/vancouver-teen-coding-phenom-using-skills-for-good-1.4995106", logo: "ctv.svg" },
	{ name: "Journal de Montreal", url: "https://www.journaldemontreal.com/a-13-ans-ce-developpeur-canadien-attire-lattention-dapple", logo: "journal-de-montreal.svg" },
	{ name: "ViewTheVibe", url: "https://viewthevibe.com/canadian-representation-game-strong-wwdc20s-swift-student-challenge-winners/", logo: "view-the-vibe.png" },
	{ name: "MobileSyrup", url: "https://mobilesyrup.com/2020/06/15/canadian-ios-app-developers-covid-19-pandemic-ipnos-ko_op-manavata-maple/", logo: "mobile-syrup.svg" },
	{ name: "News1130", url: "https://www.citynews1130.com/2020/06/13/vancouver-teen-app/", logo: "citynews.png" },
	{ name: "OwlConnected", url: "http://owlconnected.com/archives/interview-canadian-coding-wunderkid-pranav/", logo: "owl-connected.png" },
	{ name: "GeekWire", url: "https://www.geekwire.com/2019/pranav-karthik/", logo: "geekwire.png" },
	{ name: "DailyHive", url: "https://dailyhive.com/vancouver/apple-ceo-tim-cook-shout-out-vancouver-teen", logo: "daily-hive.svg" },
];

const tweets = [
	"1135700109931343872",
	"1275225681794748416",
	"1282204149082230784",
	"1997875261669621787"
];

export default function PressPage() {
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
					<Newspaper className="w-8 h-8" />
					Press/Media
				</h1>
				<p className="text-muted-foreground mt-2 text-lg">
					Where I&apos;ve been featured on so far.
				</p>
			</div>

			{/* Press Logos */}
			<div className="mt-12 p-8 rounded-lg border border-border bg-muted/30">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
					{logoData.map((item) => (
						<a
							key={item.name}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center hover:scale-105 transition-transform"
						>
							<img
								src={`/press-logos/${item.logo}`}
								alt={item.name}
								className="max-w-full h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
							/>
						</a>
					))}
				</div>
			</div>

			{/* 2021 */}
			<div className="mt-12">
				<h2 className="text-2xl font-medium tracking-tight mb-4">2021</h2>
				<ul className="space-y-2">
					<li>
						<a
							href="http://owlconnected.com/archives/interview-canadian-coding-wunderkid-pranav/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							OWL CONNECTED
						</a>
					</li>
				</ul>
			</div>

			{/* 2020 */}
			<div className="mt-8">
				<h2 className="text-2xl font-medium tracking-tight mb-4">2020</h2>
				<ul className="space-y-2">
					<li>
						<a
							href="https://www.omnitv.ca/ab/en/videos/pranav-karthik-coding-prodigy/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							OMNI TV
						</a>
					</li>
					<li>
						<a
							href="https://bc.ctvnews.ca/vancouver-teen-coding-phenom-using-skills-for-good-1.4995106"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							CTV Vancouver: Vancouver teen coding phenom using skills for good
						</a>
					</li>
					<li>
						<a
							href="https://dailyhive.com/vancouver/apple-wwdc20-conference-winners"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							DailyHive: Canadian Students
						</a>
					</li>
					<li>
						<a
							href="https://viewthevibe.com/canadian-representation-game-strong-wwdc20s-swift-student-challenge-winners/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Canadian Representation Game Strong: WWDC20&apos;s Swift Student Challenge Winners
						</a>
					</li>
					<li>
						<a
							href="https://dailyhive.com/vancouver/canadian-winners-apple-wwdc20-swift-student-challenge"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							DailyHive: Meet the 11 Canadian students who won Apple&apos;s Swift Challenge
						</a>
					</li>
					<li>
						<a
							href="https://mobilesyrup.com/2020/06/15/canadian-ios-app-developers-covid-19-pandemic-ipnos-ko_op-manavata-maple/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							MobileSyrup
						</a>
					</li>
					<li>
						<a
							href="https://www.citynews1130.com/2020/06/13/vancouver-teen-app/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							News1130
						</a>
					</li>
					<li>
						<a
							href="https://getconnectedmedia.com/app-show-video-podcast-tech-hoarders-unite/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							GetConnected Podcast
						</a>
					</li>
					<li>
						<a
							href="https://dailyhive.com/vancouver/apple-wwdc20-student-scholarship"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							DailyHive: WWDC - Where they are now?
						</a>
					</li>
					<li>
						<a
							href="https://www.vsb.bc.ca/News/_layouts/15/ci/post.aspx?oaid=2066f1d2-75af-4174-b4f8-8b5c35aac1f3&oact=20001"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Vancouver School Board: Google Code-In
						</a>
					</li>
					<li>
						<a
							href="https://medium.com/turkishkit/ba%C5%9Far%C4%B1-hikayesi-pranav-karthik-57539fe7be43"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							TurkishKit Blog
						</a>
					</li>
				</ul>
			</div>

			{/* 2019 */}
			<div className="mt-8">
				<h2 className="text-2xl font-medium tracking-tight mb-4">2019</h2>
				<ul className="space-y-2">
					<li>
						<a
							href="https://www.geekwire.com/2019/best-ways-manage-everyday-work-life-tips-tricks-2019-geeks-week/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							GeekWire Time Management
						</a>
					</li>
					<li>
						<a
							href="https://www.vsb.bc.ca/News/_layouts/15/ci/post.aspx?oaid=61e8579f-ba7a-4571-98b3-eefdc8b50e34&oact=20001"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Vancouver School Board: WWDC
						</a>
					</li>
					<li>
						<a
							href="https://dailyhive.com/vancouver/apple-ceo-tim-cook-shout-out-vancouver-teen"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							DailyHive
						</a>
					</li>
					<li>
						<a
							href="https://www.journaldemontreal.com/a-13-ans-ce-developpeur-canadien-attire-lattention-dapple"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Journal de Montreal
						</a>
					</li>
					<li>
						<a
							href="https://www.btvancouver.ca/videos/apples-worldwide-developer-conference/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Live TV on Breakfast Television Vancouver
						</a>
					</li>
					<li>
						<a
							href="https://www.omnitv.ca/bc/pa/videos/pranav-karthik-profile/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							Live TV on Omni Punjabi
						</a>
					</li>
					<li>
						<a
							href="https://www.btvancouver.ca/videos/13-year-old-coder-gets-apple-ceos-attention/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							CityNews
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/tim_cook/status/1135700109931343872"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							By Tim Cook on Twitter
						</a>
					</li>
					<li>
						<a
							href="https://www.geekwire.com/2019/pranav-karthik/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline text-foreground hover:text-foreground/80 transition-colors"
						>
							GeekWire&apos;s Geek of the Week
						</a>
					</li>
				</ul>
			</div>

			{/* Mentions Section */}
			<div className="mt-16">
				<h2 className="text-2xl font-medium tracking-tight mb-8">Notable Mentions</h2>
				<div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
			</div>
		</main>
	);
}
