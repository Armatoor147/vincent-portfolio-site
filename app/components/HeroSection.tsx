'use client';
import { webPageText, Language } from "./texts";
import Image from 'next/image';
import { useState } from "react";
import { FcGlobe } from "react-icons/fc";

interface HeroSectionProps {
	language: string
	setLanguage: (lang: string) => void
}

export default function HeroSection({ language, setLanguage }: HeroSectionProps) {
	const [isOpen, setIsOpen] = useState(false)
	const handleLanguageChange = (lang: string) => {
		setLanguage(lang)
		setIsOpen(false)
	}
	return (
		<section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${COLOUR_1}`}>
			<div className='py-6'>
				<button onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="flex items-center text-3xl">
					<FcGlobe />
					<span className='text-2xl text-green-900'>{language}</span>
				</button>
			</div>
			{isOpen && (
				<div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="absolute -mt-5 border rounded-md bg-gray-400">
					<ul>
						<li onClick={() => handleLanguageChange("FR")} className="hover:bg-gray-200 cursor-pointer"><span className="text-5xl">🇫🇷</span></li>
						<li onClick={() => handleLanguageChange("EN")} className="hover:bg-gray-200 cursor-pointer"><span className="text-5xl">🇬🇧</span></li>
						<li onClick={() => handleLanguageChange("ES")} className="hover:bg-gray-200 cursor-pointer"><span className="text-5xl">🇪🇸</span></li>
						<li onClick={() => handleLanguageChange("DE")} className="hover:bg-gray-200 cursor-pointer"><span className="text-5xl">🇩🇪</span></li>
					</ul>
				</div>
			)}
			<div className="text-center pb-12 sm:pb-12">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">{webPageText[language as Language].HeroSection.name}</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">{webPageText[language as Language].HeroSection.profession}</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					{webPageText[language as Language].HeroSection.biography_p1}
					<br></br><br></br>
					{webPageText[language as Language].HeroSection.biography_p2}
				</p>
			</div>
		</section>
	);
}

const COLOUR_1 = "bg-[#081e33]"