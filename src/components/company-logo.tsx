"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface CompanyLogoProps {
	icon: ReactNode;
	company: string;
	companyWebsite: string;
}

export default function CompanyLogo({ icon, company, companyWebsite }: CompanyLogoProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			{/* Overlay - behind the logo */}
			<div
				className={`fixed inset-0 bg-black/80 z-40 pointer-events-none transition-opacity duration-300 ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			/>

			{/* Inline logo with company name */}
			<Link
				href={companyWebsite}
				target="_blank"
				className="inline-flex items-center gap-2 transition-opacity relative"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div 
					className={`flex items-center justify-center flex-shrink-0 [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full [&>svg]:object-contain [&>img]:object-contain transition-all duration-300 ease-out ${
						isHovered 
							? "size-16 z-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" 
							: "size-5"
					}`}
				>
					{icon}
				</div>
				<h3 className={`text-lg transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
					{company}
				</h3>
			</Link>
		</>
	);
}
