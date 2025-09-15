'use client'
import { webPageText, Language } from "./texts";

interface SkillsSectionProps {
	language: string
}

export default function SkillsSection({ language }: SkillsSectionProps) {
	return (
		<div>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[0]} skills={programming_languages}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[1]} skills={database_management}/>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[2]} skills={cloud_services}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[3]} skills={infrastructure_as_code}/>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[4]} skills={data_pipelines}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[5]} skills={APIs_and_web_servers}/>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[6]} skills={version_control}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[7]} skills={testing}/>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[8]} skills={data_analysis}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[9]} skills={AI_frameworks}/>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[10]} skills={website_development}/>
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[11]} skills={methodology}/>
		</div>
	);
}

const COLOUR_1 = "bg-[#183b5c]" //"bg-gray-800"
const COLOUR_2 = "bg-[#002555]" //"bg-gray-700"

interface SkillsComponentProps {
	mode: string,
	text: string,
	skills: string[]
}

function SkillsComponent({ mode, text, skills }: SkillsComponentProps) {
	let bg_colour = COLOUR_1;
	let card_colour = COLOUR_2;
	if (mode === "light") {
		bg_colour = COLOUR_2;
		card_colour = COLOUR_1;
	}
	return (
		<section className={`${bg_colour} py-12 sm:py-12`}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center hover:underline">{text}</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<div
							key={skill}
							className={`${card_colour} p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200 border border-gray-900`}
						>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const programming_languages = ['Python', 'SQL', 'HTML/CSS', 'JavaScript/TypeScript']
const database_management = ['Excel', 'SQL', 'PostgreSQL', 'MongoDB', 'Database Modeling', 'Normalisation', 'Star Schema', 'Warehouse Design']
const cloud_services = ['AWS', 'Microsoft Azure', 'Google Cloud']
const infrastructure_as_code = ['Terraform', 'YAML']
const data_pipelines = ['ETL pipelines']
const APIs_and_web_servers = ['FastAPI', 'Django', 'Flask', 'http.server', 'Python requests', 'Express.js', 'CORS', 'Axios', 'Client-Server architecture']
const version_control = ['Git', 'GitHub']
const testing = ['Test-Driven Development', 'Pytest']
const data_analysis = ['Numpy', 'Pandas', 'Matplotlib', 'SciPy']
const AI_frameworks = ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'LlamaIndex', 'Scikit-Learn']
const website_development = ['Node.js', 'Next.js', 'React.js', 'TailwindCSS']
const methodology = ['Agile/Scrum', 'Trello']