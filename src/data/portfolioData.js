// src/data/portfolioData.js
// ================================================================
// ALL IMPORTS VERIFIED TO EXIST IN react-icons v5
// ================================================================

// ── Font Awesome ──────────────────────────────────────────────
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPython,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaReact,
  FaServer,
} from 'react-icons/fa';

// ── Simple Icons ──────────────────────────────────────────────
// ⚠️  ONLY icons verified to exist in react-icons/si are listed here
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiLinux,
  SiGithub,
  SiUnity,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiVercel,
  SiDocker,
  SiNextdotjs,
  SiGraphql,
  SiRedux,
  SiFramer,
  SiFigma,
  SiPrisma,
} from 'react-icons/si';

// ── Tabler Icons ───────────────────────────────────────────────
import {
  TbBrandVscode,
  TbBrain,
  TbApi,
  TbBrandOpenai,
  TbBrandPython,
  TbCloud,
  TbServer,
  TbCode,
  TbRobot,
  TbDatabase,
  TbBrandDocker,
  TbBrandGit,
  TbBrandGithub,
} from 'react-icons/tb';

// ── Heroicons (via react-icons/hi) ────────────────────────────
import {
  HiChip,
  HiDatabase,
  HiCode,
  HiServer,
} from 'react-icons/hi';

// ── Material Design (via react-icons/md) ──────────────────────
import {
  MdSpeed,
  MdStorage,
  MdCloud,
  MdOutlineGamepad,
} from 'react-icons/md';

// ── Bio Icons (via react-icons/bi) ────────────────────────────
import {
  BiLogoPostgresql,
  BiLogoPython,
  BiSolidServer,
  BiCodeAlt,
} from 'react-icons/bi';

// ================================================================
// SECTION 1: PERSONAL INFORMATION
// ================================================================

export const personalInfo = {
  name: "Anchit",
  lastName: "Chedge",
  fullName: "Anchit Chedge",
  title: "BTech IT Student | AI/ML & Backend Developer",
  college: "Vishwakarma Institute of Technology, Pune",
  degree: "BTech in Information Technology",
  graduationYear: "2026",

  // Words that rotate in the typewriter animation on hero
  typewriterWords: [
    'AI/ML Enthusiast',
    'Backend Developer',
    'Problem Solver',
    'Game Developer 🎮',
    'BTech @ VIT Pune',
    'LLM / GenAI Builder',
  ],

  // Bio paragraphs shown in About section
  bio: [
    `A highly motivated BTech student in Information Technology at 
     Vishwakarma Institute of Technology, Pune, with a strong foundation 
     in data structures and algorithmic problem-solving.`,

    `Passionate about building logical systems, I am continuously expanding 
     my expertise, particularly in AI/ML and backend development, to create 
     efficient and scalable solutions. Adaptable and collaborative, I thrive 
     in dynamic environments and excel at integrating seamlessly into diverse teams.`,

    `Beyond academics, I have a deep passion for video games, including 
     benchmarking and game development, combining my technical skills with 
     creative problem-solving.`,
  ],

  email:        "anchitchedge@gmail.com",
  phone:        "+91 9322458196",
  location:     "Pune, Maharashtra, India",
  resumeLink:   "/assets/resume.pdf",

  social: {
    github:    "https://github.com/cokefloat07",
    linkedin:  "https://www.linkedin.com/in/anchit-chedge/",
    twitter:   "https://twitter.com/anchitchedge",
    instagram: "#",            // set to '#' since you have no instagram
  },
};

// ================================================================
// SECTION 2: NAVIGATION LINKS
// ================================================================

export const navLinks = [
  { id: 'home',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
];

// ================================================================
// SECTION 3: SOCIAL LINKS
// ================================================================

export const socialLinks = [
  { icon: FaGithub,     url: personalInfo.social.github,    label: 'GitHub'   },
  { icon: FaLinkedinIn, url: personalInfo.social.linkedin,  label: 'LinkedIn' },
  { icon: FaTwitter,    url: personalInfo.social.twitter,   label: 'Twitter'  },
  // Instagram removed since url is '#' — just delete the line below if unwanted
  // { icon: FaInstagram,  url: personalInfo.social.instagram, label: 'Instagram'},
];

// ================================================================
// SECTION 4: ABOUT PAGE STATS
// ================================================================

export const aboutStats = [
  { number: '3+',   label: 'Years Coding'       },
  { number: '10+',  label: 'Projects Built'      },
  { number: '15+',   label: 'Technologies'        },
  { number: '4+',   label: 'Papers Published'        },
  { number: '1',   label: 'Patent Filed'        },
];

// ================================================================
// SECTION 5: SKILLS
// ================================================================
// Icons used here are ALL verified to exist.
//
// ICON SUBSTITUTION TABLE (what we use instead of missing icons):
// ┌─────────────────────┬──────────────────────────────────────┐
// │ Missing Icon        │ Replacement Used                     │
// ├─────────────────────┼──────────────────────────────────────┤
// │ SiLangchain         │ TbBrain (Tabler)                     │
// │ SiHuggingface       │ TbRobot (Tabler)                     │
// │ SiOpenai            │ TbBrandOpenai (Tabler)               │
// │ SiFastapi           │ TbApi (Tabler)                       │
// │ SiChromadb          │ TbDatabase (Tabler)                  │
// │ SiRender            │ MdCloud (Material)                   │
// │ FaServer            │ TbServer (Tabler)                    │
// │ FaRobot             │ TbRobot (Tabler)                     │
// └─────────────────────┴──────────────────────────────────────┘
// ================================================================

export const skillsData = [

  // ── Tab 1: Programming Languages ─────────────────────────────
  {
    category: 'Languages',
    color: '#6c63ff',
    skills: [
      { name: 'Python',     icon: FaPython,     level: 90, color: '#3776AB' },
      { name: 'C++',        icon: SiCplusplus,  level: 88, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, level: 82, color: '#F7DF1E' },
      { name: 'Java',       icon: FaJava,       level: 70, color: '#ED8B00' },
      { name: 'TypeScript', icon: SiTypescript, level: 65, color: '#3178C6' },
      { name: 'SQL',        icon: FaDatabase,   level: 78, color: '#336791' },
    ],
  },

  // ── Tab 2: AI / ML & GenAI ────────────────────────────────────
  {
    category: 'AI / ML & GenAI',
    color: '#00d4ff',
    skills: [
      // SiLangchain does NOT exist → use TbBrain
      { name: 'LangChain',    icon: TbBrain,        level: 78, color: '#1C3C3C' },
      // SiHuggingface does NOT exist → use TbRobot
      { name: 'Hugging Face', icon: TbRobot,         level: 80, color: '#FFD21E' },
      { name: 'PyTorch',      icon: SiPytorch,       level: 75, color: '#EE4C2C' },
      { name: 'TensorFlow',   icon: SiTensorflow,    level: 68, color: '#FF6F00' },
      { name: 'Scikit-Learn', icon: SiScikitlearn,   level: 82, color: '#F7931E' },
      { name: 'NumPy',        icon: SiNumpy,         level: 88, color: '#4DABCF' },
      { name: 'Pandas',       icon: SiPandas,        level: 85, color: '#130754' },
      // SiOpenai does NOT exist → use TbBrandOpenai
      { name: 'OpenAI / LLMs', icon: TbBrandOpenai,  level: 82, color: '#74aa9c' },
    ],
  },

  // ── Tab 3: Frontend ───────────────────────────────────────────
  {
    category: 'Frontend',
    color: '#ff6b9d',
    skills: [
      { name: 'React.js',      icon: SiReact,       level: 85, color: '#61DAFB' },
      { name: 'Vite',          icon: SiVite,        level: 80, color: '#646CFF' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, level: 85, color: '#06B6D4' },
      { name: 'JavaScript',    icon: SiJavascript,  level: 82, color: '#F7DF1E' },
      { name: 'TypeScript',    icon: SiTypescript,  level: 65, color: '#3178C6' },
      { name: 'Framer Motion', icon: SiFramer,      level: 75, color: '#0055FF' },
    ],
  },

  // ── Tab 4: Backend & APIs ─────────────────────────────────────
  {
    category: 'Backend & APIs',
    color: '#ffa500',
    skills: [
      // SiFastapi does NOT exist → use TbApi
      { name: 'FastAPI',    icon: TbApi,       level: 85, color: '#009688' },
      { name: 'Flask',      icon: SiFlask,     level: 72, color: '#ffffff' },
      { name: 'Node.js',    icon: FaNodeJs,    level: 72, color: '#339933' },
      { name: 'Express.js', icon: SiExpress,   level: 70, color: '#ffffff' },
      // FaServer DOES exist in react-icons/fa ✅
      { name: 'REST APIs',  icon: FaServer,    level: 85, color: '#02569B' },
      { name: 'Pydantic',   icon: FaPython,    level: 78, color: '#E92063' },
    ],
  },

  // ── Tab 5: Databases ──────────────────────────────────────────
  {
    category: 'Databases',
    color: '#a855f7',
    skills: [
      // SiChromadb does NOT exist → use TbDatabase
      { name: 'ChromaDB',   icon: TbDatabase,   level: 82, color: '#FF6B6B' },
      { name: 'MongoDB',    icon: SiMongodb,    level: 75, color: '#47A248' },
      { name: 'MySQL',      icon: SiMysql,      level: 78, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 68, color: '#4169E1' },
      { name: 'Firebase',   icon: SiFirebase,   level: 70, color: '#FFCA28' },
      { name: 'Vector DBs', icon: FaDatabase,   level: 80, color: '#7C3AED' },
    ],
  },

  // ── Tab 6: DevOps & Cloud ─────────────────────────────────────
  {
    category: 'DevOps & Cloud',
    color: '#22c55e',
    skills: [
      { name: 'Docker',  icon: FaDocker,      level: 70, color: '#2496ED' },
      { name: 'Vercel',  icon: SiVercel,      level: 80, color: '#ffffff' },
      // SiRender does NOT exist → use MdCloud
      { name: 'Render',  icon: MdCloud,       level: 75, color: '#46E3B7' },
      { name: 'Git',     icon: FaGitAlt,      level: 88, color: '#F05032' },
      { name: 'GitHub',  icon: SiGithub,      level: 88, color: '#ffffff' },
      { name: 'Linux',   icon: SiLinux,       level: 72, color: '#FCC624' },
    ],
  },

  // ── Tab 7: Tools & Others ─────────────────────────────────────
  {
    category: 'Tools & Others',
    color: '#00ff88',
    skills: [
      { name: 'VS Code', icon: TbBrandVscode, level: 95, color: '#007ACC' },
      // FaServer is a valid substitute for Postman
      { name: 'Postman', icon: FaServer,      level: 80, color: '#FF6C37' },
      { name: 'Jupyter', icon: FaPython,      level: 80, color: '#F37626' },
      { name: 'Unity',   icon: SiUnity,       level: 60, color: '#ffffff' },
      { name: 'npm/pip', icon: FaNodeJs,      level: 85, color: '#CB3837' },
      { name: 'CI/CD',   icon: TbBrandDocker, level: 70, color: '#2088FF' },
    ],
  },
];

// ================================================================
// SECTION 6: PROJECTS
// ================================================================

export const projectsData = [

  // ── Featured Project 1 ────────────────────────────────────────
  {
    id: 1,
    title: 'Green Model Advisor',
    subtitle: 'Eco-Intelligent AI Model Selection Platform',
    description:
      'A full-stack platform that intelligently selects AI models based on performance ' +
      'and environmental impact. Integrated three LLM providers (Google Gemini, Mistral, ' +
      'NVIDIA Qwen) with a custom scoring algorithm to balance accuracy and carbon footprint, ' +
      'reducing model selection carbon output by 20% while maintaining >75% code accuracy.',
    longDescription:
      'Built using FastAPI and React with real-time emissions tracking via CodeCarbon. ' +
      'Custom scoring algorithm weighs model accuracy, latency, and CO2 emissions. ' +
      'Supports Google Gemini, Mistral, and NVIDIA Qwen providers with fallback chains.',
    image: 'public/assets/carbonemission.jpg',
    tags: ['Python', 'FastAPI', 'React', 'LLMs', 'CodeCarbon', 'Gemini', 'Mistral'],
    github: 'https://github.com/cokefloat07/final-techM-EDAI',
    live: 'https://green-model-advisor.vercel.app/',
    featured: true,
    color: '#6c63ff',
    category: 'ai',
  },

  // ── Featured Project 2 ────────────────────────────────────────
  {
    id: 2,
    title: 'SocialRAG Chatbot',
    subtitle: 'AI-Powered RAG Pipeline for Video Content Analysis',
    description:
      'A full-stack RAG chatbot comparing YouTube videos and Instagram Reels using ' +
      'BGE embeddings, ChromaDB vector storage, and Groq\'s Llama 3.3 70B for inference. ' +
      'Features SSE streaming, conversational memory, and multi-source retrieval via ' +
      'YouTube Data API v3, yt-dlp, and Whisper transcription.',
    longDescription:
      'Built end-to-end RAG pipeline with semantic chunking, vector retrieval, and streaming ' +
      'LLM responses over Server-Sent Events. Provider-agnostic LLM layer supports both local ' +
      'Ollama and cloud-based Groq API. Deployed full stack at zero cost using Vercel + Render.',
    image: 'public/assets/Socialrag.jpg',
    tags: ['FastAPI', 'React', 'ChromaDB', 'BGE Embeddings', 'Groq', 'Llama 3.3', 'RAG'],
    github: 'https://github.com/cokefloat07/social-bot',
    live: 'https://social-ai-one-inky.vercel.app/',
    featured: true,
    color: '#00d4ff',
    category: 'ai',
  },

  // ── Featured Project 3 ────────────────────────────────────────
  {
    id: 3,
    title: 'NexusAI',
    subtitle: 'AI-Powered Project Management Platform',
    description:
      'A full-stack project management platform with AI-driven task automation, ' +
      'project insights, documentation generation (SRS, PoC), and predictive analytics. ' +
      'Integrates a collaborative code editor, AI debugging assistant, dynamic Gantt charts, ' +
      'and a productivity tracking dashboard.',
    longDescription:
      'Engineering a full-stack platform with AI-driven task automation, project insights, ' +
      'documentation generation, and predictive analytics. Collaborative code editor, ' +
      'AI debugging assistant, dynamic Gantt charts, and productivity tracking dashboard.',
    image: 'public/assets/nexusai.jpg',
    tags: ['React.js', 'Flask', 'MongoDB', 'AI', 'Gantt Charts'],
    github: 'https://github.com/cokefloat07/nexusai',
    live: 'https://nexusai-tawny.vercel.app/',
    featured: true,
    color: '#ff6b9d',
    category: 'fullstack',
  },

  // ── Regular Project 4 ─────────────────────────────────────────
  
];

// ================================================================
// SECTION 7: EXPERIENCE
// ================================================================

export const experienceData = [
  {
    id: 1,
    role: 'AI/ML Intern',
    company: 'Tech Mahindra',
    companyUrl: 'https://www.techmahindra.com',
    duration: 'Sept 2025 – Nov 2025',
    description: [
      'Built the Green Model Advisor platform — an eco-intelligent AI model selector ' +
        'integrating Gemini, Mistral, and NVIDIA Qwen with carbon footprint tracking',
      'Developed custom scoring algorithm balancing model accuracy and CO2 emissions, ' +
        'reducing environmental impact by 20% while maintaining >75% code accuracy',
      'Implemented real-time emissions monitoring using CodeCarbon integrated with FastAPI backend',
      'Collaborated with cross-functional teams to deliver production-ready AI tooling',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'LangChain', 'CodeCarbon', 'LLMs', 'Docker'],
  },
  {
    id: 2,
    role: 'Technical Member',
    company: 'GDSC / Coding Club — VIT Pune',
    companyUrl: '#',
    duration: 'August 2024 – June 2025',
    description: [
      'Participated in college-level hackathons',
      'Conducted workshops on Data Structures & Algorithms for 50+ students',
      'Collaborated on open-source projects and contributed to code reviews',
    ],
    technologies: ['C++', 'Python', 'DSA', 'Git', 'Competitive Programming'],
  },
  {
    id: 3,
    role: 'Geeks forGeeks Student Chapter Event coordinator',
    company: 'GeeksforGeeks — VIT Pune',
    companyUrl: 'https://www.vit.edu',
    duration: '2025 – 2026',
    description: [
      'Organized coding competitions and workshops for 200+ students, fostering a culture of learning and collaboration',
      'Coordinated with industry speakers and alumni for webinars on AI/ML and software development',
      'hacked together with the GFG team to host a successful college-level coding contest with 200+ participants',
      'Organized a hackathon in collaboration with local tech companies, attracting 150+ student participants and providing real-world problem-solving experience',
    ],
    technologies: ['Event Management', 'Collaboration', 'DSA'],
  },
  {
    id: 4,
    role: 'BTech — Information Technology',
    company: 'Vishwakarma Institute of Technology',
    companyUrl: 'https://www.vit.edu',
    duration: '2022 – 2026',
    description: [
      'Pursuing BTech in Information Technology with consistent academic performance',
      'Core coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks',
      'Self-learning specialization in AI/ML, GenAI (LLMs, RAG), and Backend Development',
      'Active in technical fests, game development communities, and coding clubs',
    ],
    technologies: ['C++', 'Python', 'Java', 'SQL', 'AI/ML', 'DSA'],
  },
];