'use client'
import Image from 'next/image';
import { webPageText, Language } from "./texts";

interface ProjectsSectionProps {
	language: string
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
	return (
		<section className={`py-12 sm:py-20 ${COLOUR_1}`}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">{webPageText[language as Language].ProjectSection.title}</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.title[language as Language]} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image_file} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title[language as Language]}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4"></p>
								<div className="flex flex-col gap-2">
									{project.website_link && (
										<a href={project.website_link} className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
											{webPageText[language as Language].ProjectSection.website_link_button} →
										</a>
									)}
									<a href={project.github_link} className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										{webPageText[language as Language].ProjectSection.github_link_button} →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const COLOUR_1 = "bg-[#000000]"

const projects = [
	{
		title: {
			EN: webPageText.EN.ProjectSection.project_titles[0],
			FR: webPageText.FR.ProjectSection.project_titles[0],
			ES: webPageText.ES.ProjectSection.project_titles[0],
			DE: webPageText.DE.ProjectSection.project_titles[0]
		},
		image_file: "/project1.jpg",
		website_link: "https://newyorktimesgames.streamlit.app/letter_boxed_streamlit",
		github_link: "https://github.com/Armatoor147/New_York_Times_Games"
	},
	{
		title: {
			EN: webPageText.EN.ProjectSection.project_titles[1],
			FR: webPageText.FR.ProjectSection.project_titles[1],
			ES: webPageText.ES.ProjectSection.project_titles[1],
			DE: webPageText.DE.ProjectSection.project_titles[1]
		},
		image_file: "/project2.jpg",
		github_link: "https://github.com/Armatoor147/team-fenor-de-project"
	},
	{
		title: {
			EN: webPageText.EN.ProjectSection.project_titles[2],
			FR: webPageText.FR.ProjectSection.project_titles[2],
			ES: webPageText.ES.ProjectSection.project_titles[2],
			DE: webPageText.DE.ProjectSection.project_titles[2]
		},
		image_file: "/project3.jpg",
		github_link: "https://github.com/Armatoor147/aws-gdpr-guard"
	}
]