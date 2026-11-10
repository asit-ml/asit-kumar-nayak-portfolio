export const profile = {
  name: "Asit Kumar Nayak",
  shortName: "Asit",
  title: "Data Science & Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "asitkumarnayak.work@gmail.com",
  phone: "+91-7978253449",
  phoneHref: "tel:+917978253449",
  linkedin: "https://www.linkedin.com/in/asitn/",
  github: "https://github.com/asit-ml",
  resume: "/resume.pdf",
  resumeName: "Asit_Kumar_Nayak_Resume.pdf",
};

export const navLinks = [
  { name: "About", path: "/about", testId: "nav-about-link" },
  { name: "Experience", path: "/experience", testId: "nav-experience-link" },
  { name: "Projects", path: "/projects", testId: "nav-projects-link" },
  { name: "Skills", path: "/skills", testId: "nav-skills-link" },
  { name: "Education", path: "/education", testId: "nav-education-link" },
  { name: "Hackathons", path: "/hackathons", testId: "nav-hackathons-link" },
];

export const hero = {
  eyebrow: "IIT Madras · Data Science · Chennai",
  lines: ["Engineering", "Intelligent Systems", "& Modern Web."],
  bio: "I'm Asit, a Data Science & Applications student at IIT Madras. I recently finished a Junior Developer internship at NPTEL and work as a Teaching Assistant. I enjoy turning data, models and ideas into useful software.",
  stats: [
    { value: "10", label: "Projects built" },
    { value: "4", label: "Experience roles" },
    { value: "3", label: "TA courses" },
    { value: "Top 20", label: "AISEHack 2.0" },
  ],
};

export const marqueeItems = [
  "Machine Learning",
  "Deep Learning",
  "Python",
  "PyTorch",
  "LightGBM",
  "React",
  "FastAPI",
  "Flask",
  "SQL",
  "IIT Madras",
  "NPTEL",
  "Teaching Assistant",
  "Data Pipelines",
  "Looker Studio",
  "RDKit",
  "Generative AI",
];

export const experience = [
  {
    id: "nptel-intern",
    role: "Junior Developer Intern",
    organization: "NPTEL — National Programme on Technology Enhanced Learning",
    period: "Jan 2026 – Nov 2026",
    type: "Internship",
    current: false,
    bullets: [
      "Engineered automated pipelines to migrate and synchronize educational data across SWAYAM, TCS result systems, and the new NPTEL platform.",
      "Collaborated with operations teams on Looker Studio dashboards and researched secure embedding methods for faculty and industry stakeholders.",
      "Gathered requirements for administrative editing actions and documented routine website operations to identify process-automation opportunities.",
      "Supported day-to-day NPTEL program operations, educational data management, and analysis of NPTEL datasets.",
    ],
    tags: ["Data Pipelines", "Looker Studio", "Automation", "Educational Data"],
  },
  {
    id: "ta-business-analytics",
    role: "Teaching Assistant — Business Analytics",
    organization: "IIT Madras",
    period: "May 2025 – Present",
    type: "Academic Role",
    bullets: [
      "Assisted Prof. Malolan Sundararaman and Dr. Swaminathan with course delivery on data dashboarding, regression diagnostics, and logistic regression.",
      "Evaluated post-quiz and end-term assessments for a large learner cohort, supporting consistent grading and academic integrity.",
      "Demonstrated applied statistical methods through examples such as ANOVA for marketing impact analysis and regression for financial forecasting.",
    ],
    tags: ["Business Analytics", "Regression", "ANOVA", "Dashboarding"],
  },
  {
    id: "ta-embedded-c",
    role: "Teaching Assistant — Embedded C Lab",
    organization: "IIT Madras",
    period: "May 2025 – Aug 2025",
    type: "Academic Role",
    bullets: [
      "Guided students through embedded programming exercises in STM32CubeIDE (STM32 HAL) and Arduino IDE v2 (STM32duino core).",
      "Supported practical exercises in basic I/O, serial communication, external and timer interrupts, and sensor interfacing.",
    ],
    tags: ["Embedded C", "STM32", "Arduino", "Sensor Interfacing"],
  },
  {
    id: "ta-mentor",
    role: "Teaching Assistant — Mentor & Content Developer",
    organization: "IIT Madras",
    period: "Oct 2023 – Sep 2024",
    type: "Academic Role",
    bullets: [
      "Supported university-level learners through course assistance and peer mentoring; delivered School Connect sessions for school students.",
      "Taught limits, continuity, derivatives, L'Hôpital's Rule, extrema, and function optimization; explained polynomial, quadratic, exponential, and logarithmic functions in mathematical modelling.",
      "Covered coordinate geometry, straight-line fitting, matrix representations, linear systems, and sequences and convergence.",
      "Guided students through BFS/DFS, topological sorting, and shortest-path algorithms (Dijkstra's, Bellman-Ford, and Floyd-Warshall).",
      "Created course materials and randomized practice questions for Mathematics for Data Science I.",
    ],
    tags: ["Mathematics", "Graph Algorithms", "Mentoring", "Content Development"],
  },
];

export const projects = [
  {
    id: "threat-forecaster",
    title: "System Threat Forecaster",
    category: "ml",
    description:
      "A LightGBM-based binary classifier that estimates malware infection risk on Windows machines, trained on antivirus telemetry and system-configuration data.",
    tech: ["LightGBM", "Python", "Antivirus Telemetry", "System Config Data"],
    github: "https://github.com/asit-ml/System_Threat_Forecaster-Machine-learning-Project",
    demo: "https://systemthreatforecaster-machine-learning-project-iitm.streamlit.app/",
    featured: true,
  },
  {
    id: "music-genre",
    title: "Music Genre Classifier",
    category: "ml",
    description:
      "A 10-class music genre classifier built for noisy mashups, using log-mel spectrograms and an ensemble of Audio Spectrogram Transformer (AST) and ResNet18 models.",
    tech: ["Audio Spectrogram Transformer", "ResNet18", "Log-mel Spectrograms", "Python"],
    github: "https://github.com/asit-ml/Music-Genre-Classifier-Deep-Learning-Generative-AI-Project",
    demo: "https://huggingface.co/spaces/Asitkumarnayak/music_genre_classification",
    featured: true,
  },
  {
    id: "societysync",
    title: "SocietySync",
    category: "web",
    description:
      "A FastAPI + React platform for housing-society operations — finance, resident helpdesk, amenity bookings, community updates, staff operations and visitor management.",
    tech: ["FastAPI", "React", "Python", "JavaScript"],
    github: "https://github.com/asit-ml/SocietySync-Application",
    demo: "",
    featured: true,
  },
  {
    id: "hospital-management",
    title: "Hospital Management Application",
    category: "web",
    description:
      "A role-based hospital management system for administrators, doctors and patients, with appointment and treatment workflows built on a Flask REST API, Vue frontend and Celery/Redis background tasks.",
    tech: ["Flask REST API", "Vue.js", "Celery", "Redis", "Python"],
    github: "https://github.com/asit-ml/Hospital_Management_Application",
    demo: "",
    featured: false,
  },
  {
    id: "placement-portal",
    title: "Placement Portal Application",
    category: "web",
    description:
      "A Flask-based campus placement portal covering student and company profiles, placement drives, applications, shortlisting and status tracking.",
    tech: ["Flask", "Python"],
    github: "https://github.com/asit-ml/Placement_Portal_Application",
    demo: "",
    featured: false,
  },
  {
    id: "presentation-ai",
    title: "PresentationAI",
    category: "ai",
    description:
      "A multi-LLM presentation generator that converts text into PowerPoint slides and applies styles extracted from uploaded templates.",
    tech: ["React", "TypeScript", "Vite", "PptxGenJS", "PowerPoint Generation"],
    github: "https://github.com/asit-ml/PPT_Generator",
    demo: "https://bonus-1-ten.vercel.app/",
    featured: false,
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    category: "ai",
    description:
      "A browser-based AI assistant with web search, sandboxed JavaScript execution, Markdown rendering and support for multiple LLM providers.",
    tech: ["JavaScript", "LLM APIs", "Web Search", "Markdown"],
    github: "https://github.com/asit-ml/AI_Chatbot",
    demo: "https://asit-ml.github.io/AI_Chatbot/",
    featured: false,
  },
  {
    id: "data-analyst-agent",
    title: "Data Analyst Agent",
    category: "ai",
    description:
      "An AI-powered FastAPI service that analyses uploaded files with Gemini and runs generated analysis code in an isolated Docker environment.",
    tech: ["FastAPI", "Python", "Gemini", "Docker"],
    github: "https://github.com/asit-ml/Data_Analyst_Agent",
    demo: "",
    featured: false,
  },
  {
    id: "discourse-teaching-assistant",
    title: "Discourse Teaching Assistant",
    category: "ai",
    description:
      "A FastAPI teaching assistant that retrieves relevant course material and uses it to answer learner questions with grounded responses.",
    tech: ["FastAPI", "Python", "Semantic Retrieval", "LLMs"],
    github: "https://github.com/asit-ml/Discourse_Teaching_Assistant",
    demo: "https://discourse-teaching-assistant.vercel.app/",
    featured: false,
  },
  {
    id: "aisehack",
    title: "ANRF AISEHack 2.0",
    category: "ml",
    description:
      "A polymer-property prediction project using RDKit molecular features, multitask learning, scaffold-aware validation and ensemble models.",
    tech: ["Python", "RDKit", "Multitask Learning", "Ensembles"],
    github: "https://github.com/asit-ml/ANRF-AISEHack2.0",
    demo: "",
    featured: false,
  },
];

export const projectCategories = {
  all: "All",
  ml: "ML & Deep Learning",
  web: "Full-Stack",
  ai: "AI Tools",
};

export const skills = [
  {
    id: "languages",
    name: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    items: ["scikit-learn", "LightGBM", "PyTorch", "RDKit", "NumPy", "Pandas", "Flask", "FastAPI", "React", "Vue.js", "SQLAlchemy", "Jinja2"],
  },
  {
    id: "tools",
    name: "Databases, Platforms & Tools",
    items: ["PostgreSQL", "SQLite", "Redis", "Celery", "Linux", "Git", "VS Code", "Jupyter", "Google Colab", "Looker Studio"],
  },
];

export const teachingTopics = [
  "Limits & Continuity",
  "L'Hôpital's Rule",
  "Function Optimization",
  "ANOVA",
  "Regression Diagnostics",
  "Logistic Regression",
  "Matrix Representations",
  "Linear Systems",
  "BFS & DFS",
  "Topological Sorting",
  "Dijkstra's Algorithm",
  "Bellman-Ford",
  "Floyd-Warshall",
  "STM32 Interrupts",
  "Sensor Interfacing",
  "Serial Communication",
];

export const education = {
  degree: "BS in Data Science & Applications",
  institution: "Indian Institute of Technology Madras",
  period: "Jan 2023 – Present",
  location: "Chennai, Tamil Nadu, India",
  coursework: [
    "Machine Learning",
    "Deep Learning & Generative AI",
    "Business Analytics & Data Management",
    "Statistics for Data Science",
    "Mathematics for Data Science",
    "Data Structures & Algorithms using Python",
    "Database Management Systems",
    "Software Engineering & Testing",
    "Application Development",
    "Tools in Data Science",
  ],
};

export const hackathons = [
  {
    id: "aisehack",
    event: "ANRF AISEHack 2.0",
    track: "Polymer Property Prediction",
    result: "Top 20",
    resultDetail: "Round 2 Private Leaderboard",
    team: true,
    description:
      "Collaborated with teammates to develop models predicting seven polymer properties from SMILES strings using RDKit molecular features, multitask learning, scaffold-based validation, and ensemble methods.",
    tags: ["RDKit", "Multitask Learning", "Scaffold-based Validation", "Ensemble Methods", "SMILES"],
    github: "https://github.com/asit-ml/ANRF-AISEHack2.0",
  },
];

export const about = {
  story: [
    "I'm studying for a BS in Data Science & Applications at IIT Madras. The course has taken me from statistics, mathematics and optimization to machine learning, software engineering and application development.",
    "I recently completed a Junior Developer Internship at NPTEL, working on data pipelines and dashboards for educational operations. I also support learners as a Teaching Assistant in Mathematics for Data Science, Embedded C and Business Analytics.",
    "Most of my projects start with a practical question: can a model or idea be turned into something people can actually use? That has led me to build tools for malware-risk prediction, music classification, society management and presentation generation.",
  ],
  highlights: [
    {
      title: "NPTEL Junior Developer Internship",
      desc: "Worked on data pipelines, dashboards and day-to-day data operations.",
    },
    {
      title: "3× Teaching Assistant @ IIT Madras",
      desc: "From L'Hôpital's Rule to logistic regression to STM32 interrupts.",
    },
    {
      title: "Top 20 @ AISEHack 2.0",
      desc: "Polymer property prediction with RDKit, multitask learning and ensembles.",
    },
  ],
};

export const images = {
  hero: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&q=85",
  about: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&q=85",
  education: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?crop=entropy&cs=srgb&fm=jpg&q=85",
};
