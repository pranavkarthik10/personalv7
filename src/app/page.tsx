import RESUME from "@/data/resume";
import NameAnimation from "@/components/name-animation";

export default function Home() {
	return (
		<div className="px-6 py-16">
			<section className="mb-16">
				<h1 className="text-4xl font-medium tracking-tight">
					<NameAnimation />
				</h1>
				<p className="mt-4 text-lg opacity-80 leading-relaxed">
					{RESUME.bio.intro}
				</p>
			</section>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<section className="mb-16">
						<h2 className="text-sm font-medium uppercase tracking-wider opacity-50 mb-6">
							Experience
						</h2>
						<div className="space-y-8">
							{RESUME.experience.map((experience) => (
								<div key={`${experience.company}-${experience.start_date}`}>
									<h3 className="text-lg">{experience.company}</h3>
									<p className="mt-1 opacity-70">{experience.role}</p>
									<p className="mt-2 text-sm opacity-50">
										{new Date(
											experience.start_date + "T00:00:00",
										).toLocaleDateString("en-US", {
											month: "short",
											year: "numeric",
										})}{" "}
										—{" "}
										{new Date(
											experience.end_date + "T00:00:00",
										).toLocaleDateString("en-US", {
											month: "short",
											year: "numeric",
										})}
									</p>
									<p className="mt-1 text-sm opacity-50">
										{experience.location}
									</p>
								</div>
							))}
						</div>
					</section>

					<section>
						<h2 className="text-sm font-medium uppercase tracking-wider opacity-50 mb-6">
							Education
						</h2>
						<div>
							<h3 className="text-lg">{RESUME.education.institution}</h3>
							<p className="mt-1 opacity-70">
								{RESUME.education.degree}, {RESUME.education.major}
							</p>
							<p className="mt-2 text-sm opacity-50">
								{RESUME.education.start_year} —{" "}
								{RESUME.education.end_year}
							</p>
							<p className="mt-1 text-sm opacity-50">
								{RESUME.education.location}
							</p>
						</div>
					</section>
				</div>

				<div>
					<section>
						<h2 className="text-sm font-medium uppercase tracking-wider opacity-50 mb-6">
							Projects
						</h2>
						<div className="space-y-6">
							{RESUME.projects.filter(p => p.slug !== "personal-website").map((project) => (
								<div key={project.name}>
									<h3 className="text-lg">{project.name}</h3>
									<p className="mt-2 text-sm opacity-70 leading-relaxed">
										{project.description}
									</p>
									{project.awards && project.awards.length > 0 && (
										project.featuredLink ? (
											<p className="mt-1 text-xs text-yellow-500/80">
												🏆 <a href={project.featuredLink.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">{project.awards.join(", ")}</a>
											</p>
										) : (
											<p className="mt-1 text-xs text-yellow-500/80">
												🏆 {project.awards.join(", ")}
											</p>
										)
									)}
									<p className="mt-3 text-xs opacity-50 uppercase tracking-wide">
										{project.stack.join(" · ")}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
