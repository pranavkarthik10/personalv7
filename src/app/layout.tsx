import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import RESUME from "@/data/resume";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${RESUME.name}`,
	description: `${RESUME.bio.intro}`,
};

	export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}
			>
				<Script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="49a2368b-f573-4184-9dbe-26af0c1b2fdd"
				/>
				<div className="min-h-screen relative">
					<div className="absolute inset-0 bg-cover bg-fixed bg-center z-0">
						<img
							src="/dithertest.png"
							alt=""
							className="w-full h-full object-cover opacity-10"
						/>
					</div>
					<div className="relative z-10 flex flex-col-reverse md:flex-row">
						<div className="w-full md:w-48 flex-shrink-0 border-t md:border-t-0 md:border-r border-dashed p-6">
							<nav className="space-y-4">
								<Link href="/" className="block text-sm opacity-70 hover:opacity-100">
									home
								</Link>
								<Link href="/blog" className="block text-sm opacity-70 hover:opacity-100">
									writings
								</Link>
								<Link href="/stack" className="block text-sm opacity-70 hover:opacity-100">
									stack
								</Link>
								<Link href="/press" className="block text-sm opacity-70 hover:opacity-100">
									press
								</Link>
								<Link href="/projects" className="block text-sm opacity-70 hover:opacity-100">
									projects
								</Link>
							</nav>

							<div className="mt-8 space-y-4">
								<a
									href="https://x.com/pranavkarthik__"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-sm opacity-40 hover:opacity-70 transition-opacity"
								>
									x
								</a>
								<a
									href="https://linkedin.com/in/pranav-karthik"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-sm opacity-40 hover:opacity-70 transition-opacity"
								>
									linkedin
								</a>
								<a
									href="https://github.com/pranavkarthik10"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-sm opacity-40 hover:opacity-70 transition-opacity"
								>
									github
								</a>
							</div>
						</div>
						<div className="flex-1">{children}</div>
					</div>
				</div>
				<Analytics />
			</body>
		</html>
	);
}
