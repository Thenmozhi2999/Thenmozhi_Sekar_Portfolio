export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Thenmozhi Sekar",
  title: "Applied AI & ML Engineer | Generative AI • LLMs • NLP • AI Agents",
  tagline:
    "I'm an Applied AI & ML Engineer with experience in Generative AI, LLMs, NLP, AI agents, and AI-driven software systems. I build practical AI solutions by combining research, machine learning, backend engineering, and scalable software development.",
  location: "United States of America",
  email: "Thenmozhi.Sekar@quinnipiac.edu",
  personalEmail: "then99mozhisekar@gmail.com",
  phone: "475-317-4537",
  availability: "Open to Applied AI, Machine Learning, and Generative AI opportunities",
  snapshot:
    "Computer Science graduate from Quinnipiac University with a 3.8/4 CGPA, focused on Applied AI, Machine Learning, Generative AI, NLP, and AI-driven software engineering.",
  image: "/thenmozhi-hero.jpeg",
  heroStats: [
    { value: "3.8/4", label: "Master's CGPA" },
    { value: "200+", label: "Code Samples Evaluated" },
    { value: "15,000+", label: "Bug Reports Processed" },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/thenmozhi-sekar" },
    { label: "GitHub", href: "https://github.com/Thenmozhi2999" },
    { label: "Professional Email", href: "mailto:Thenmozhi.Sekar@quinnipiac.edu" },
    { label: "Personal Email", href: "mailto:then99mozhisekar@gmail.com" },
  ],
};

export const about = {
  intro:
    "My journey into AI started with curiosity about how intelligent systems can solve real-world problems. Over time, that curiosity grew into a strong passion for Machine Learning, Generative AI, NLP, and AI-driven software engineering.\n\nThrough research and industry experience, I've worked on machine learning workflows, backend systems, automation, predictive analytics, and AI-assisted software engineering projects. I enjoy building practical AI solutions that combine research, engineering, and real-world impact.\n\nCurrently, I'm focused on Applied AI, LLM systems, AI agents, NLP, and scalable AI engineering while continuing to grow as both an engineer and researcher.",
  highlights: [
    "Research applied AI methods for software engineering, including LLM-based code generation evaluation and NLP-driven bug report enhancement.",
    "Build AI-enabled engineering workflows that connect machine learning, backend systems, automation, and measurable product outcomes.",
    "Translate research questions into structured experiments, reproducible pipelines, and recruiter-ready technical impact.",
  ],
};

export const education = [
  {
    institution: "Quinnipiac University, United States of America",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 - May 2026",
    details:
      "CGPA: 3.8/4. Graduate work focused on Applied AI, machine learning, intelligent systems, NLP, and software engineering research.",
  },
  {
    institution: "Madras University, Kanchipuram, TN, India",
    degree: "Bachelor of Computer Applications",
    period: "Aug 2018 - May 2021",
    details:
      "GPA: 3.7. Built a strong foundation in programming, algorithms, databases, and software engineering that supports current AI/ML system development.",
  },
];

export const experiences = [
  {
    company: "Quinnipiac University, United States of America",
    role: "Graduate Research Assistant – AI/ML & Software Engineering",
    period: "Aug 2024 - Present",
    summary:
      "Conduct applied AI and software engineering research across LLM evaluation, NLP workflows, machine learning experimentation, and AI-assisted developer tooling.",
    achievements: [
      "Review emerging AI/ML, LLM, and software engineering research to identify gaps, evaluation methods, and publishable research directions.",
      "Collaborate with faculty advisors to shape research proposals, experimental design, and empirical studies around AI-driven software engineering.",
      "Build Python and Java pipelines for data processing, NLP analysis, LLM-based experimentation, and machine learning evaluation.",
    ],
  },
  {
    company: "Goaira Technologies Pvt Limited, Chennai, India",
    role: "AI-Driven Full-Stack Software Engineer",
    period: "Jun 2022 - Apr 2024",
    summary:
      "Developed full-stack systems and automation workflows that improved reliability, operational visibility, and data-informed decision making.",
    achievements: [
      "Analyzed production performance, device telemetry, and issue patterns to improve reliability across 200+ connected devices.",
      "Automated monitoring and maintenance workflows, reducing manual effort by 30% while improving response speed and team efficiency.",
      "Structured technical issue data to support predictive maintenance, operational analytics, and AI-ready reporting workflows.",
    ],
  },
  {
    company: "Ijona Technologies Pvt. Ltd, Bangalore, India",
    role: "Full-Stack Java Software Engineer",
    period: "Nov 2021 - May 2022",
    summary:
      "Built and optimized Java-based software systems with a focus on backend reliability, algorithmic thinking, and data-informed product improvement.",
    achievements: [
      "Developed and tested algorithmic components using experimental analysis to improve performance and system outcomes.",
      "Analyzed user behavior and application data to refine system design, usability, and backend performance.",
      "Improved reliability through testing, debugging, performance analysis, and iterative engineering improvements.",
    ],
  },
];

export const projects = [
  {
    title: "FlowPilot: Enterprise AI Workflow Automation Platform",
    description:
      "Built a full-stack MVP for an enterprise AI workflow automation platform with workflow creation and editing, detail pages, database-backed run triggering, approval decisions, governance dashboards, seeded workspace login, and API routes for workflow operations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod", "TanStack Query", "Radix UI", "Neon AI"],
    link: "https://flowpilot-5vmb.vercel.app/login",
    type: "Full Stack MVP",
  },
  {
    title: "Granite Python Build Agent",
    description:
      "Built a reusable Python build environment for CI/CD pipelines using Docker, Poetry, Ruff, Black, and Pytest, creating consistent clean builds with automatic dependency installation, quality checks, tests, and teardown after completion.",
    stack: ["Python", "Docker", "GitHub", "CI/CD", "Poetry", "Pytest", "Ruff", "Automation"],
    link: "https://github.com/Thenmozhi2999/granite-python-agent",
    type: "DevOps Automation",
  },
  {
    title: "Assessing AI-Based Code Generation using Code Comments",
    description:
      "Conducted an empirical evaluation of AI-generated code on 200+ code samples across 1200+ experimental runs using similarity metrics, structural analysis, sequence ratio, and logical correctness comparisons against human-written code.",
    stack: ["Python", "Java", "AI Research", "Experimental Analysis"],
    link: "https://ieeexplore.ieee.org/document/11418477",
    type: "Published Research",
  },
  {
    title: "LLM-Based Bug Report Enhancement Pipeline",
    description:
      "Built an LLM-based NLP pipeline that converts unstructured bug reports into standardized formats, improving report completeness by 72% and extracting structured insights from 15,000+ GitHub API bug reports.",
    stack: ["Python", "NLP", "LLMs", "GitHub API"],
    link: "/Bug_Report_Enhancement.pdf",
    type: "Active Research",
  },
  {
    title: "Perceived Stress Prediction Using Machine Learning with Feature Selection",
    description:
      "Developed a machine learning research project focused on predicting perceived stress using feature selection techniques to improve model effectiveness, interpretability, and data-driven mental health analysis.",
    stack: ["Python", "Machine Learning", "Feature Selection", "Research"],
    link: "/Perceived_Stress_Prediction_ML_Feature_Selection.pdf",
    type: "Research Project",
  },
];

export const research = [
  {
    title: "AI for Software Engineering",
    organization: "Quinnipiac University",
    period: "2024 - Present",
    summary:
      "Researching how large language models and empirical evaluation methods can improve code generation quality, software analysis, and engineering workflows.",
    link: "https://ieeexplore.ieee.org/document/11418477",
    linkLabel: "View Research",
  },
  {
    title: "LLM-Based Bug Report Analysis and Enhancement",
    organization: "Quinnipiac University",
    period: "2026 - Present",
    summary:
      "Exploring NLP and LLM-driven approaches for transforming unstructured bug reports into reproducible, standardized inputs for triaging, prediction, and debugging tasks.",
    link: "/Bug_Report_Enhancement.pdf",
    linkLabel: "Open PDF",
  },
  {
    title: "Perceived Stress Prediction Using Machine Learning with Feature Selection",
    organization: "Machine Learning Research",
    period: "Research Paper",
    summary:
      "Focused on predicting perceived stress using machine learning techniques and feature selection methods to improve predictive performance and model interpretability.",
    link: "/Perceived_Stress_Prediction_ML_Feature_Selection.pdf",
    linkLabel: "Open PDF",
  },
  {
    title: "A Formal Specification of TCAS with UML and OCL using USE",
    organization: "Formal Methods Research",
    period: "Research Paper",
    summary:
      "Developed a formal specification study of the Traffic Collision Avoidance System using UML, OCL, and USE to model system behavior and strengthen correctness through formal analysis.",
    link: "/formal-specification-tcas-uml-ocl-use.pdf",
    linkLabel: "Open PDF",
  },
];

export const publications = [
  {
    title: "Assessing AI-Based Code Generation using Code Comments",
    venue: "IISEC 2026",
    year: "2026",
    link: "https://ieeexplore.ieee.org/document/11418477",
  },
  {
    title: "Perceived Stress Prediction Using Machine Learning with Feature Selection",
    venue: "Research Paper",
    year: "PDF Available",
    link: "/Perceived_Stress_Prediction_ML_Feature_Selection.pdf",
  },
  {
    title: "A Formal Specification of TCAS with UML and OCL using USE",
    venue: "Research Paper",
    year: "PDF Available",
    link: "/formal-specification-tcas-uml-ocl-use.pdf",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "C/C++", "R"],
  },
  {
    category: "AI / Machine Learning",
    items: ["Machine Learning", "NLP", "Scikit-learn", "XGBoost", "PyTorch", "Pandas", "NumPy", "Feature Selection"],
  },
  {
    category: "Generative AI",
    items: ["LLMs", "Transformers", "AI Agents", "RAG", "Hugging Face", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Docker", "Kubernetes", "Airflow", "MLflow", "Git", "GitHub", "Jira"],
  },
  {
    category: "Software Engineering",
    items: ["Backend Engineering", "APIs", "System Design", "Data Structures & Algorithms", "OOP", "CI/CD", "Agile", "SDLC"],
  },
];

export const certifications = [
  {
    title: "Java Full Stack Development Certification Program",
    issuer: "Capgemini | EduBridge Learning Pvt. Ltd.",
    year: "2023",
    image: "/java-full-stack-certificate.jpeg",
    details: "Overall grade: A | Overall score: 76% | Place: Mumbai",
  },
];

export const resume = {
  description:
    "Applied AI and ML engineer with a 3.8/4 CGPA, research experience in LLMs and AI for software engineering, and industry experience across full-stack systems, automation, and scalable engineering workflows.",
  ctaLabel: "Download Resume",
  ctaHref: "/Thenmozhi_Resume_2026.pdf",
};

export const contact = {
  message:
    "I'm currently seeking opportunities in Applied AI, Machine Learning, and Generative AI roles. Feel free to reach out for collaborations, research discussions, or professional opportunities.",
  professionalEmail: "Thenmozhi.Sekar@quinnipiac.edu",
  personalEmail: "then99mozhisekar@gmail.com",
  phone: "475-317-4537",
  location: "United States of America",
};
