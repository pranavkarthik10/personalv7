import React from 'react';

const RESUME = {
	name: "Pranav Karthik",
	avatar_path: "/me.jpg",
	bio: {
		intro: "Fourth year CS student at UBC passionate about building experiences for the web, mobile, and spatial interfaces.",
		about: "TODO: move bio here",
	},
	experience: [
		{
			icon: (
				<svg
					aria-label="Vercel logomark"
					height="64"
					role="img"
					viewBox="0 0 74 64"
					style={{ width: "auto", overflow: "visible"}}
				>
					<path
						d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
						fill="hsl(var(--foreground))"
					/>
				</svg>
			),
			company: "Vercel",
			role: "Software Engineering Intern",
			description: "",
			start_date: "2025-09-01",
			end_date: "2025-12-01",
			location: "San Francisco, CA",
			company_website: "https://vercel.com",
		},
		{
			icon: (
				<svg
					aria-label="Google logomark"
					height="64"
					role="img"
					viewBox="0 0 24 24"
					style={{ width: "auto", overflow: "visible" }}
				>
					<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
					<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
					<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
					<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
				</svg>
			),
			company: "Google",
			role: "Software Engineering Intern",
			description: "",
			start_date: "2025-05-01",
			end_date: "2025-08-31",
			location: "Seattle, WA",
			company_website: "https://google.com",
		},
		{
			icon: (
				<svg
					aria-label="Google logomark"
					height="64"
					role="img"
					viewBox="0 0 24 24"
					style={{ width: "auto", overflow: "visible" }}
				>
					<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
					<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
					<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
					<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
				</svg>
			),
			company: "Google",
			role: "STEP Intern",
			description: "",
			start_date: "2024-05-01",
			end_date: "2024-08-31",
			location: "Waterloo, ON",
			company_website: "https://google.com",
		},
		{
			icon: (
				<img
					src="/dyne.png"
					alt="DYNE logo"
					className="w-full h-full object-contain"
				/>
			),
			company: "DYNE",
			role: "App Development Intern",
			description: "",
			start_date: "2023-05-01",
			end_date: "2023-08-31",
			location: "Vancouver, BC",
			company_website: "https://dyneapp.ca",
		},
	],
	education: {
		institution: "University of British Columbia",
		degree: "Bachelor of Science",
		major: "Computer Science",
		start_year: "2022",
		end_year: "2026",
		location: "Vancouver, BC",
		icon: (
			<img
				src="/ubclogo.png"
				alt="UBC logo"
				className="w-full h-full object-contain"
			/>
		),
	},
	projects: [
		{
			slug: "grokhunt",
			name: "GrokHunt",
			description:
				"AI-powered recruiting platform that autonomously searches for talented developers using Grok's reasoning engine.",
			longDescription:
				"GrokHunt is an autonomous recruiting platform built at the xAI Hackathon 2025. It scans Twitter for talented developers, evaluates their work using Grok's reasoning engine, generates candidate scores and narratives, and sends personalized interview invitations. The system uses reinforcement learning to continuously improve its accuracy.",
			imagePath: "/grokhunt.png",
			liveUrl: "https://devpost.com/software/grokhunt",
			stack: ["Next.js", "Python", "FastAPI", "Grok API", "X API"],
			keyFeatures: [
				"Autonomous candidate discovery from Twitter",
				"AI-powered evaluation using Grok's reasoning",
				"Personalized outreach and interview invitations",
				"Reinforcement learning feedback loop",
			],
			challenges: "Built a complete autonomous recruiting pipeline in under 48 hours that searches, scores, messages, and interviews candidates automatically. Demonstrated that reasoning-based evaluation outperforms traditional keyword matching.",
			collaborators: [
				{ name: "Pragalvha Sharma" },
				{ name: "Krishna Arya" },
			],
			awards: ["xAI Hackathon"],
			featuredLink: {
				label: "Featured by xAI",
				url: "https://x.com/xai/status/1997875261669621787",
			},
			inProgress: false,
			year: 2025,
		},
		{
			slug: "interconnected",
			name: "Interconnected",
			description:
				"Interactive Swift application introducing graph theory algorithms with custom physics simulation and drag-and-drop graph playground.",
			longDescription:
				"Interconnected is an interactive Swift application that introduces graph theory algorithms through a custom physics simulation and drag-and-drop graph playground. Built with SwiftUI, CoreGraphics, and Combine, it provides an intuitive way to learn and experiment with graph algorithms through hands-on interaction.",
			imagePath: "/interconnected.png",
			// liveUrl: "https://github.com/pranavkarthik10/interconnected",
			// githubUrl: "https://github.com/pranavkarthik10/interconnected",
			stack: ["SwiftUI", "CoreGraphics", "Combine"],
			keyFeatures: [
				"Custom physics simulation for graph visualization",
				"Drag-and-drop graph playground",
				"Interactive algorithm demonstrations",
				"Real-time graph manipulation",
			],
			challenges: "The main challenge was implementing a custom physics simulation that could handle dynamic graph layouts while maintaining performance. I had to optimize the force-directed layout algorithm and implement efficient collision detection for interactive node manipulation.",
			awards: ["Distinguished Winner - Apple Swift Student Challenge"],
			inProgress: false,
			year: 2024,
		},
		{
			slug: "travoai",
			name: "TravoAI",
			description:
				"Full-stack web application for AI-generated travel plans with streaming responses and modern React UI.",
			longDescription:
				"TravoAI is a comprehensive travel planning platform that leverages AI to generate personalized travel itineraries. The application features streaming responses for real-time content generation, a modern React-based user interface, and intelligent recommendations based on user preferences and budget constraints.",
			imagePath: "/travoai.jpg",
			liveUrl: "https://travoai.com",
			githubUrl: "https://github.com/pranavkarthik10/travoai",
			stack: ["React.js", "Node.js", "OpenAI API", "Express", "MongoDB"],
			keyFeatures: [
				"AI-powered travel plan generation",
				"Streaming response implementation",
				"Modern React UI with responsive design",
				"Budget and preference-based recommendations",
			],
			challenges: "Implementing streaming responses for AI-generated content required careful management of WebSocket connections and state synchronization between frontend and backend. Additionally, optimizing API costs while maintaining response quality was a key technical challenge.",
			collaborators: [
			],
			awards: ["StormHacks"],
			inProgress: false,
			year: 2023,
		},
		{
			slug: "trackr",
			name: "Trackr",
			description:
				"iOS app for assignment management with tens of thousands of App Store downloads and Siri integration.",
			longDescription:
				"Trackr is a comprehensive assignment management iOS application that has achieved tens of thousands of downloads on the App Store. The app features Siri integration for voice commands, CoreData for local storage, and a clean UIKit-based interface that helps students stay organized and on top of their academic responsibilities.",
			imagePath: "/trackr.png",
			liveUrl: "https://apps.apple.com/app/trackr/id1481234567",
			githubUrl: "https://github.com/pranavkarthik10/trackr",
			stack: ["UIKit", "CoreData", "SiriKit", "Swift"],
			keyFeatures: [
				"Siri integration for voice commands",
				"Assignment tracking and reminders",
				"Grade calculation and analytics",
				"Offline-first design with CoreData",
			],
			challenges: "The biggest challenge was implementing reliable Siri integration while maintaining data privacy. I had to carefully design the voice command system to work offline and ensure that sensitive academic data never left the device.",
			inProgress: false,
			year: 2019,
		}
	],
};

export default RESUME;