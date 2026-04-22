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
  title: "Graduate Research Assistant | Full Stack Developer | AI in Software Engineering",
  tagline:
    "I build reliable software systems and AI-driven research workflows, with a focus on full stack engineering, machine learning, and empirical software engineering.",
  location: "Hamden, Connecticut, USA",
  email: "Thenmozhi.Sekar@quinnipiac.edu",
  personalEmail: "then99mozhisekar@gmail.com",
  phone: "475-317-4537",
  availability: "Open to software engineering, research, and AI-focused opportunities",
  snapshot:
    "Computer science graduate student at Quinnipiac University with a 4.0 GPA, blending academic research in AI for software engineering with full stack industry experience across automation, analytics, and system optimization.",
  image: "/thenmozhi-hero.jpeg",
  heroStats: [
    { value: "4.0", label: "Master's GPA" },
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
    "I am a computer science graduate student and software engineer with experience across full stack development, AI-assisted research, and data-driven system improvement. My work brings together rigorous experimentation, practical engineering, and a strong interest in AI for software engineering, machine learning pipelines, and dependable systems that create measurable impact.",
  highlights: [
    "Conduct graduate research at Quinnipiac University focused on AI and software engineering.",
    "Bring full stack industry experience across product reliability, workflow automation, and performance optimization.",
    "Enjoy turning research questions into publishable work, production-ready pipelines, and clear technical outcomes.",
  ],
};

export const education = [
  {
    institution: "Quinnipiac University, Hamden, CT, USA",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 - May 2026",
    details:
      "GPA: 4.0. Graduate studies focused on advanced computer science, AI, and software engineering research.",
  },
  {
    institution: "Madras University, Kanchipuram, TN, India",
    degree: "Bachelor of Computer Applications",
    period: "Aug 2018 - May 2021",
    details:
      "GPA: 3.7. Built strong foundations in programming, software development, and computational problem solving.",
  },
];

export const experiences = [
  {
    company: "Quinnipiac University, Hamden, CT, USA",
    role: "Graduate Research Assistant (AI/Software Engineering)",
    period: "Aug 2024 - Present",
    summary:
      "Support AI and software engineering research through literature review, proposal development, experimental design, and implementation of data engineering and machine learning workflows.",
    achievements: [
      "Conduct weekly literature reviews in AI and software engineering to identify research gaps and emerging methodologies.",
      "Collaborate with two faculty advisors to refine ideas, draft proposals, and shape research concepts into publishable topics.",
      "Design and implement data engineering and machine learning pipelines in Python and Java, including LLM-based experimentation and analysis.",
    ],
  },
  {
    company: "Goaira Technologies Pvt Limited, Chennai, India",
    role: "Full Stack Developer",
    period: "Jun 2022 - Apr 2024",
    summary:
      "Worked on reliability, automation, and operational efficiency initiatives by analyzing production issues and collaborating with cross-functional teams on scalable solutions.",
    achievements: [
      "Analyzed system performance and user issue data to improve reliability across 200+ devices.",
      "Automated monitoring and maintenance workflows, reducing manual effort by 30% and improving team efficiency.",
      "Collected and documented technical issue data to support data-driven decisions and predictive maintenance initiatives.",
    ],
  },
  {
    company: "Ijona Technologies Pvt. Ltd, Bangalore, India",
    role: "Full Stack Java Developer",
    period: "Nov 2021 - May 2022",
    summary:
      "Contributed to system performance improvement through algorithmic development, user behavior analysis, and continuous optimization.",
    achievements: [
      "Developed and tested algorithmic models using experimental analysis to improve performance and outcomes.",
      "Analyzed user behavior data to optimize system design and enhance overall performance.",
      "Improved system reliability and efficiency through testing, performance analysis, and iterative refinement.",
    ],
  },
];

export const projects = [
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
    items: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS", "R"],
  },
  {
    category: "AI / SE / ML",
    items: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "PyTorch", "NLP"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "Jira", "Visual Studio", "Docker", "MLflow", "OpenCV", "AWS", "Kubernetes", "Airflow"],
  },
  {
    category: "Methodologies",
    items: ["Agile", "SDLC", "CI/CD", "TDD"],
  },
  {
    category: "Concepts",
    items: ["Data Structures & Algorithms", "OOP", "APIs", "System Design"],
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
    "Graduate student in computer science with a 4.0 GPA, research experience in AI for software engineering, and industry experience across full stack development, automation, and performance optimization.",
  ctaLabel: "Download Resume",
  ctaHref: "/Thenmozhi_Resume_2026.pdf",
};

export const contact = {
  message:
    "I am open to conversations about software engineering roles, AI and software engineering research, collaborations, and technical opportunities.",
  professionalEmail: "Thenmozhi.Sekar@quinnipiac.edu",
  personalEmail: "then99mozhisekar@gmail.com",
  phone: "475-317-4537",
  location: "Hamden, Connecticut, USA",
};
