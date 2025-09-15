export type Language = "EN" | "FR" | "ES" | "DE";

type TextContent = {
    HeroSection: {
        name: string
        profession: string
        biography_p1: string
        biography_p2: string
    }
    SkillsSection: {
        skill_categories: string[]
    }
    ProjectSection: {
        title: string
        website_link_button: string
        github_link_button: string
        project_titles: string[]
    }
    ContactSection: {
        title: string
    }
}

export const webPageText: Record<Language, TextContent> = {
    EN: {
        HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Maths & Physics Master’s Graduate | Aspiring Data Engineer & AI Enthusiast",
            biography_p1: "I combine a rigorous academic background in maths and physics with hands-on technical skills in data engineering, data science, and AI. Recently, I completed an intensive Data Engineering bootcamp with NorthCoders, where I built a strong foundation in data pipelines, cloud technologies, and scalable data solutions.",
            biography_p2: "Passionate about turning complex data into actionable insights, I’m eager to contribute to innovative projects in data engineering, AI, or full-stack development. My analytical mindset and problem-solving skills drive me to explore how technology can solve real-world challenges."
        },
        SkillsSection: {
            skill_categories: ["Programming Languages", "Database Management", "Cloud Services", "Infrastructure as Code", "Data Pipelines", "APIs and Web Servers", "Version Control", "Testing", "Data_Analysis", "AI_Frameworks", "Website Development", "Methodology"]
        },
        ProjectSection: {
            title: "Projects",
            website_link_button: "View App",
            github_link_button: "View GitHub",
            project_titles: ["The New York Times Solver"]
        },
        ContactSection: {
            title: "Contact Information"
        }
    },
    FR: {
        HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Diplômé d'un Master en Mathématiques & Physique | Futur Ingénieur Data et Passionné d'IA",
            biography_p1: "Je réunis une formation académique rigoureuse en mathématiques et physique avec des compétences techniques pratiques en ingénierie des données, science des données et intelligence artificielle. Récemmment, j'ai terminé un bootcamp intensif en ingénierie des données avec NorthCoders, où j'ai acquis une solide base en pipelines de données, technologies cloud et solutions data scalables.",
            biography_p2: "Passionné par la transformation de données complexes en informations exploitables, je suis impatient de contribuer à des projets innovants en ingénierie des données, en IA ou en développement full-stack. Mon esprit analytique et mes compétences en résolution de problèmes me poussent à explorer comment la technologie peut résoudre des défis concrets."
        },
        SkillsSection: {
            skill_categories: ["Langages de Programmation", "Gestion de Bases de Données", "Services Cloud", "Infrastructure as Code", "Pipelines de Données", "APIs et Serveurs Web", "Contrôle de Version", "Tests", "Analyse de Données", "Frameworks IA", "Développement Web", "Méthodologie"]
        },
        ProjectSection: {
            title: "Projets",
            website_link_button: "Voir l'Application",
            github_link_button: "Voir GitHub",
            project_titles: ["Le Résolveur du New York Times"]
        },
        ContactSection: {
            title: "Informations de Contact"
        }
    },
    ES: {
    HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Graduado en Máster de Matemáticas y Física | Aspirante a Ingeniero de Datos y Entusiasta de la IA",
            biography_p1: "Combino una sólida formación académica en matemáticas y física con habilidades técnicas prácticas en ingeniería de datos, ciencia de datos e inteligencia artificial. Recientemente, completé un intensivo bootcamp de Ingeniería de Datos con NorthCoders, donde construí una base sólida en pipelines de datos, tecnologías en la nube y soluciones de datos escalables.",
            biography_p2: "Apasionado por convertir datos complejos en información útil, estoy ansioso por contribuir a proyectos innovadores en ingeniería de datos, IA o desarrollo full-stack. Mi mentalidad analítica y mis habilidades para resolver problemas me impulsan a explorar cómo la tecnología puede resolver desafíos del mundo real."
        },
        SkillsSection: {
            skill_categories: ["Lenguajes de Programación", "Gestión de Bases de Datos", "Servicios en la Nube", "Infrastructure as Code", "Pipelines de Datos", "APIs y Servidores Web", "Control de Versiones", "Pruebas", "Análisis de Datos", "Frameworks de IA", "Desarrollo Web", "Metodología"]
        },
        ProjectSection: {
            title: "Proyectos",
            website_link_button: "Ver la Aplicación",
            github_link_button: "Ver GitHub",
            project_titles: ["El Solucionador del New York Times"]
        },
        ContactSection: {
            title: "Información de Contacto"
        }
    },
    DE: {
        HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Absolvent im Masterstudium Mathematik & Physik | Angehender Data Engineer & KI-Enthusiast",
            biography_p1: "Ich verbinde eine fundierte akademische Ausbildung in Mathematik und Physik mit praktischen technischen Fähigkeiten in Data Engineering, Data Science und KI. Kürzlich habe ich ein intensives Data-Engineering-Bootcamp bei NorthCoders abgeschlossen, wo ich ein solides Fundament in Datenpipelines, Cloud-Technologien und skalierbaren Datenlösungen aufgebaut habe.",
            biography_p2: "Mit Leidenschaft für die Umwandlung komplexer Daten in verwertbare Erkenntnisse freue ich mich darauf, zu innovativen Projekten im Bereich Data Engineering, KI oder Full-Stack-Entwicklung beizutragen. Mein analytischer Geist und meine Problemlösungsfähigkeiten treiben mich an, zu erforschen, wie Technologie reale Herausforderungen lösen kann."
        },
        SkillsSection: {
            skill_categories: ["Programmiersprachen", "Datenbankverwaltung", "Cloud-Dienste", "Infrastructure as Code", "Datenpipelines", "APIs und Webserver", "Versionskontrolle", "Tests", "Datenanalyse", "KI-Frameworks", "Webentwicklung", "Methodik"]
        },
        ProjectSection: {
            title: "Projekte",
            website_link_button: "App Anzeigen",
            github_link_button: "GitHub Anzeigen",
            project_titles: ["Der New York Times Löser"]
        },
        ContactSection: {
            title: "Kontaktinformationen"
        }
    }
}


