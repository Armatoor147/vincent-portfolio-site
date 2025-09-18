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
            profession: "Maths & Physics Master’s Graduate | Aspiring Data & AI Engineer",
            biography_p1: "I combine an academic background in maths and physics with technical skills in data engineering, data analysis, AI engineering and full-stack development. Recently, I completed a data engineering bootcamp, where I gained experience in data pipelines, cloud computing, database modelling and CI/CD pipelines.",
            biography_p2: "Passionate about coding, I am eager to collaborate with a development team to contribute to innovative projects. My analytical mindset and problem-solving skills drive me to explore how technology can solve real-world challenges."
        },
        SkillsSection: {
            skill_categories: ["Programming Languages", "Database Management", "Cloud Services", "Infrastructure as Code", "Data Pipelines", "APIs and Web Servers", "Version Control", "Testing", "Data Analysis", "AI Frameworks", "Website Development", "Methodology"]
        },
        ProjectSection: {
            title: "Projects",
            website_link_button: "View App",
            github_link_button: "View GitHub",
            project_titles: ["The New York Times Solver", "Data Engineering Bootcamp"]
        },
        ContactSection: {
            title: "Contact Information"
        }
    },
    FR: {
        HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Diplômé d’un Master en Mathématiques & Physique | Futur Ingénieur Data & IA",
            biography_p1: "Je combine une formation académique en mathématiques et physique avec des compétences techniques en ingénierie des données, analyse des données, ingénierie IA et développement full-stack. Récemment, j’ai suivi un bootcamp en ingénierie des données, où j’ai acquis de l’expérience en pipelines de données, cloud computing, modélisation de bases de données et pipelines CI/CD.",
            biography_p2: "Passionné par le code, je souhaite rejoindre une équipe de développement pour contribuer à des projets innovants. Mon esprit analytique et mes compétences en résolution de problèmes me poussent à explorer comment la technologie peut répondre aux défis concrets du monde réel."
        },
        SkillsSection: {
            skill_categories: ["Langages de Programmation", "Gestion de Bases de Données", "Services Cloud", "Infrastructure as Code", "Pipelines de Données", "APIs et Serveurs Web", "Contrôle de Version", "Tests", "Analyse des Données", "Frameworks IA", "Développement Web", "Méthodologie"]
        },
        ProjectSection: {
            title: "Projets",
            website_link_button: "Voir l'Application",
            github_link_button: "Voir GitHub",
            project_titles: ["Le Résolveur du New York Times", "Bootcamp en Ingénierie des Données"]
        },
        ContactSection: {
            title: "Informations de Contact"
        }
    },
    ES: {
    HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Graduado en Máster de Matemáticas y Física | Futuro Ingeniero de Datos e IA",
            biography_p1: "Combino una formación académica en matemáticas y física con habilidades técnicas en ingeniería de datos, análisis de datos, inteligencia artificial y desarrollo full-stack. Recientemente, completé un bootcamp de ingeniería de datos, donde adquirí experiencia en pipelines de datos, computación en la nube, modelado de bases de datos y pipelines de CI/CD.",
            biography_p2: "Apasionado por la programación, estoy deseando colaborar con un equipo de desarrollo para aportar a proyectos innovadores. Mi mentalidad analítica y mis habilidades para resolver problemas me impulsan a explorar cómo la tecnología puede abordar desafíos del mundo real."
        },
        SkillsSection: {
            skill_categories: ["Lenguajes de Programación", "Gestión de Bases de Datos", "Servicios en la Nube", "Infrastructure as Code", "Pipelines de Datos", "APIs y Servidores Web", "Control de Versiones", "Pruebas", "Análisis de Datos", "Frameworks de IA", "Desarrollo Web", "Metodología"]
        },
        ProjectSection: {
            title: "Proyectos",
            website_link_button: "Ver la Aplicación",
            github_link_button: "Ver GitHub",
            project_titles: ["El Solucionador del New York Times", "Bootcamp en Ingeniería de Datos"]
        },
        ContactSection: {
            title: "Información de Contacto"
        }
    },
    DE: {
        HeroSection: {
            name: "Vincent Toor-Azorín",
            profession: "Mathematik- & Physik-Masterabsolvent | Angehender Data Engineer & KI-Ingenieur",
            biography_p1: "Ich verbinde mein akademisches Wissen in Mathematik und Physik mit technischen Fähigkeiten in Data Engineering, Datenanalyse, KI-Entwicklung und Full-Stack Development. Kürzlich habe ich ein Data-Engineering-Bootcamp abgeschlossen, wo ich Erfahrungen in Datenpipelines, Cloud Computing, Datenbankmodellierung und CI/CD-Pipelines sammeln konnte.",
            biography_p2: "Als codebegeisterter Entwickler möchte ich mich in ein Entwicklungsteam einbringen, um an innovativen Projekten mitzuwirken. Mein analytisches Denken und meine Problemlösungsfähigkeiten treiben mich an, zu erforschen, wie Technologie reale Herausforderungen bewältigen kann."
        },
        SkillsSection: {
            skill_categories: ["Programmiersprachen", "Datenbankverwaltung", "Cloud-Dienste", "Infrastructure as Code", "Datenpipelines", "APIs und Webserver", "Versionskontrolle", "Tests", "Datenanalyse", "KI-Frameworks", "Webentwicklung", "Methodik"]
        },
        ProjectSection: {
            title: "Projekte",
            website_link_button: "App Anzeigen",
            github_link_button: "GitHub Anzeigen",
            project_titles: ["Der New York Times Löser", "Data-Engineering-Bootcamp"]
        },
        ContactSection: {
            title: "Kontaktinformationen"
        }
    }
}


