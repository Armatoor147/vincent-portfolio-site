'use client';
import { useState } from "react";
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	const [language, setLanguage] = useState("FR");
	return (
		<main className="min-h-screen bg-gray-900">
			<HeroSection language={language} setLanguage={setLanguage}/>
			<SkillsSection language={language}/>
			<ProjectsSection language={language}/>
			<ContactSection language={language}/>
		</main>
	);
}
