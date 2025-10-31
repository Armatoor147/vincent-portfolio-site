'use client'
import { webPageText, Language } from "./texts";

interface SkillsSectionProps {
	language: string
}

export default function SkillsSection({ language }: SkillsSectionProps) {
	return (
		<div>
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[0]} skills={skills.programming_languages[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[1]} skills={skills.database_management[language as Language]} />
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[2]} skills={skills.cloud_services[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[3]} skills={skills.infrastructure_as_code[language as Language]} />
      <SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[4]} skills={skills.containerisation_and_orchestration[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[5]} skills={skills.data_pipelines[language as Language]} />
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[6]} skills={skills.APIs_and_web_servers[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[7]} skills={skills.version_control[language as Language]} />
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[8]} skills={skills.testing[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[9]} skills={skills.data_analysis[language as Language]} />
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[10]} skills={skills.AI_frameworks[language as Language]} />
			<SkillsComponent mode="light" text={webPageText[language as Language].SkillsSection.skill_categories[11]} skills={skills.website_development[language as Language]} />
			<SkillsComponent mode="dark" text={webPageText[language as Language].SkillsSection.skill_categories[12]} skills={skills.methodology[language as Language]} />
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

const skills = {
  programming_languages: {
    EN: ['Python', 'HTML/CSS', 'JavaScript/TypeScript', 'MATLAB', 'Java', 'C'],
    FR: ['Python', 'HTML/CSS', 'JavaScript/TypeScript', 'MATLAB', 'Java', 'C'],
    ES: ['Python', 'HTML/CSS', 'JavaScript/TypeScript', 'MATLAB', 'Java', 'C'],
    DE: ['Python', 'HTML/CSS', 'JavaScript/TypeScript', 'MATLAB', 'Java', 'C']
  },
  database_management: {
    EN: ['Excel', 'SQL', 'PostgreSQL', 'MongoDB', 'Database Modeling', 'Normalisation', 'Star Schema', 'Warehouse Design'],
    FR: ['Excel', 'SQL', 'PostgreSQL', 'MongoDB', 'Modélisation de base de données', 'Normalisation', 'Schéma en étoile', 'Conception d\'entrepôt de données'],
    ES: ['Excel', 'SQL', 'PostgreSQL', 'MongoDB', 'Modelado de bases de datos', 'Normalización', 'Esquema de estrella', 'Diseño de almacén de datos'],
    DE: ['Excel', 'SQL', 'PostgreSQL', 'MongoDB', 'Datenbankmodellierung', 'Normalisierung', 'Sternschema', 'Data-Warehouse-Design']
  },
  cloud_services: {
    EN: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    FR: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    ES: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    DE: ['AWS', 'Microsoft Azure', 'Google Cloud']
  },
  infrastructure_as_code: {
    EN: ['Terraform', 'DevOps', 'CI/CD (YAML, GitHub Actions)'],
    FR: ['Terraform', 'DevOps', 'CI/CD (YAML, GitHub Actions)'],
    ES: ['Terraform', 'DevOps', 'CI/CD (YAML, GitHub Actions)'],
    DE: ['Terraform', 'DevOps', 'CI/CD (YAML, GitHub Actions)']
  },
  containerisation_and_orchestration: {
	EN: ['Docker', 'Kubernetes'],
	FR: ['Docker', 'Kubernetes'],
	ES: ['Docker', 'Kubernetes'],
	DE: ['Docker', 'Kubernetes']
  },
  data_pipelines: {
    EN: ['ETL pipelines'],
    FR: ['Pipelines ETL'],
    ES: ['Pipelines ETL'],
    DE: ['ETL-Pipelines']
  },
  APIs_and_web_servers: {
    EN: ['FastAPI', 'Django', 'Flask', 'http.server', 'Python requests', 'Express.js', 'CORS', 'Axios', 'Client-Server Architecture'],
    FR: ['FastAPI', 'Django', 'Flask', 'http.server', 'Requêtes Python', 'Express.js', 'CORS', 'Axios', 'Architecture Client-Serveur'],
    ES: ['FastAPI', 'Django', 'Flask', 'http.server', 'Peticiones Python', 'Express.js', 'CORS', 'Axios', 'Arquitectura Cliente-Servidor'],
    DE: ['FastAPI', 'Django', 'Flask', 'http.server', 'Python Requests', 'Express.js', 'CORS', 'Axios', 'Client-Server-Architektur']
  },
  version_control: {
    EN: ['Git', 'GitHub'],
    FR: ['Git', 'GitHub'],
    ES: ['Git', 'GitHub'],
    DE: ['Git', 'GitHub']
  },
  testing: {
    EN: ['Test-Driven Development', 'Pytest'],
    FR: ['Développement piloté par les tests', 'Pytest'],
    ES: ['Desarrollo guiado por pruebas', 'Pytest'],
    DE: ['Testgetriebene Entwicklung', 'Pytest']
  },
  data_analysis: {
    EN: ['Numpy', 'Pandas', 'Matplotlib', 'SciPy'],
    FR: ['Numpy', 'Pandas', 'Matplotlib', 'SciPy'],
    ES: ['Numpy', 'Pandas', 'Matplotlib', 'SciPy'],
    DE: ['Numpy', 'Pandas', 'Matplotlib', 'SciPy']
  },
  AI_frameworks: {
    EN: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'LlamaIndex', 'Scikit-Learn'],
    FR: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'LlamaIndex', 'Scikit-Learn'],
    ES: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'LlamaIndex', 'Scikit-Learn'],
    DE: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'LlamaIndex', 'Scikit-Learn']
  },
  website_development: {
    EN: ['Node.js', 'Next.js', 'React.js', 'TailwindCSS'],
    FR: ['Node.js', 'Next.js', 'React.js', 'TailwindCSS'],
    ES: ['Node.js', 'Next.js', 'React.js', 'TailwindCSS'],
    DE: ['Node.js', 'Next.js', 'React.js', 'TailwindCSS']
  },
  methodology: {
    EN: ['Agile', 'Trello'],
    FR: ['Agile', 'Trello'],
    ES: ['Ágil', 'Trello'],
    DE: ['Agile', 'Trello']
  }
}
