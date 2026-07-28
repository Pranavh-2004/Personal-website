export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  status: string;
  year: number;
  summary: string;
  topics: string[];
  links: Array<{ label: string; href: string }>;
};

export type ProjectCategory =
  | "Research & tooling"
  | "Security & systems"
  | "Competitive builds"
  | "Fintech & web3";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  technologies: string[];
  links: Array<{ label: string; href: string }>;
  featured?: boolean;
  award?: string;
  confidential?: boolean;
};

export type Experience = {
  organization: string;
  role: string;
  location?: string;
  period: string;
  details: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  note?: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
};

export const profile = {
  name: "Pranav Hemanth",
  shortName: "Pranav",
  role: "Research engineer working across cybersecurity, systems, and agent tooling.",
  location: "Bangalore, India",
  email: "pranavh2004@gmail.com",
  university: "PES University",
  degree: "B.Tech in Computer Science",
  graduation: "2027",
  cgpa: "9.24/10",
  photo:
    "https://res.cloudinary.com/djkl22q57/image/upload/c_fill,f_auto,g_face,h_560,q_auto,w_560/v1/portfolio/portfolio/profile?_a=BAMAMiOc0",
  links: {
    github: "https://github.com/Pranavh-2004",
    linkedin: "https://linkedin.com/in/pranav-hemanth",
    scholar:
      "https://scholar.google.com/citations?user=wyI18VEAAAAJ&hl=en",
    pandemonium: "https://www.pandemoniumresearch.com",
    cv: "/cv.pdf",
  },
};

export const currentRoles = [
  {
    organization: "IIT Madras",
    role: "Research Intern",
    href: "https://www.cstr.iitm.ac.in/",
  },
  {
    organization: "Pandemonium Research",
    role: "Co-founder & Researcher",
    href: "https://www.pandemoniumresearch.com/people",
  },
  {
    organization: "PES University",
    role: "Computer Science, B.Tech",
    href: "https://pes.edu/",
  },
];

export const news = [
  {
    date: "Jun 2026",
    text: "Joined the Centre for Cybersecurity, Trust and Reliability at IIT Madras as a research intern.",
  },
  {
    date: "Apr 2026",
    text: "Released Skilldex, an open-source package manager and registry for agent skill packages.",
    href: "https://arxiv.org/abs/2604.16911",
  },
  {
    date: "Mar 2026",
    text: "Co-founded Pandemonium Research, an independent engineering and research lab.",
    href: "https://www.pandemoniumresearch.com/",
  },
  {
    date: "Mar 2026",
    text: "Published the Conversation Tree Architecture preprint on structured context management for LLM conversations.",
    href: "https://arxiv.org/abs/2603.21278",
  },
  {
    date: "Nov 2025",
    text: "Ranked 17th nationally in the MIST OSINT Challenge.",
  },
];

export const publications: Publication[] = [
  {
    id: "evaluation-confounds-kg-id",
    title:
      "Four Evaluation Confounds in Multi-Stage Knowledge-Graph Intrusion Detection",
    authors: ["Pranav Hemanth", "K. Pawar"],
    venue: "ANUBIS @ ESORICS 2026",
    status: "Under review",
    year: 2026,
    summary:
      "An evaluation-focused study of confounding factors in multi-stage intrusion detection systems built on knowledge graphs.",
    topics: ["Cybersecurity", "Knowledge graphs", "Intrusion detection"],
    links: [],
  },
  {
    id: "skilldex",
    title:
      "Skilldex: A Package Manager and Registry for Agent Skill Packages with Hierarchical Scope-Based Distribution",
    authors: ["Sampriti Saha", "Pranav Hemanth"],
    venue: "EMNLP 2026 System Demonstrations",
    status: "Under review · arXiv:2604.16911",
    year: 2026,
    summary:
      "A package manager and registry for agent skills with compiler-style validation, quality scoring, reusable skillsets, and hierarchical installation scopes.",
    topics: ["LLM agents", "Developer tooling", "MCP"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2604.16911" },
      {
        label: "Repository",
        href: "https://github.com/Pandemonium-Research/Skilldex",
      },
      {
        label: "Writeup",
        href: "https://www.pandemoniumresearch.com/research/skilldex",
      },
    ],
  },
  {
    id: "conversation-tree-architecture",
    title:
      "Conversation Tree Architecture: A Structured Framework for Context-Aware Multi-Branch LLM Conversations",
    authors: ["Pranav Hemanth", "Sampriti Saha"],
    venue: "arXiv preprint",
    status: "arXiv:2603.21278",
    year: 2026,
    summary:
      "A hierarchical conversation architecture that isolates topical branches and defines structured context flow between parent and child nodes.",
    topics: ["LLMs", "Context management", "Conversational AI"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2603.21278" },
      {
        label: "Prototype",
        href: "https://the-conversation-tree.vercel.app",
      },
      {
        label: "Writeup",
        href: "https://www.pandemoniumresearch.com/research/conversation-tree-architecture",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "skilldex",
    title: "Skilldex",
    summary:
      "Package manager and registry for agent skill packages with scope-aware installs, conformance scoring, reusable skillsets, and MCP integration.",
    category: "Research & tooling",
    year: "2026",
    technologies: ["TypeScript", "MCP", "Hono", "Supabase"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pandemonium-Research/Skilldex",
      },
      { label: "Live site", href: "https://skilldex-web.vercel.app" },
      { label: "Paper", href: "https://arxiv.org/abs/2604.16911" },
    ],
    featured: true,
  },
  {
    id: "scion-mininet",
    title: "SCIONMiniNet",
    summary:
      "A complete multi-AS SCION network that runs locally with Docker for exploring path-aware networking, multi-path routing, and failure scenarios.",
    category: "Security & systems",
    year: "2026",
    technologies: ["SCION", "Docker", "Networking", "Bash"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/SCIONMiniNet",
      },
    ],
    featured: true,
  },
  {
    id: "armsim-docker",
    title: "ARMSim-Docker",
    summary:
      "A Dockerized ARM simulator environment that lets macOS users complete microprocessor and computer architecture coursework without a native install.",
    category: "Security & systems",
    year: "2026",
    technologies: ["Docker", "ARM", "Assembly", "macOS"],
    links: [],
    featured: true,
  },
  {
    id: "hawke",
    title: "HAWKE Framework",
    summary:
      "A heterogeneous attack-graph and alert-correlation framework for multi-stage threat detection across Suricata, Zeek, Wazuh, and OSSEC.",
    category: "Security & systems",
    year: "2025",
    technologies: ["Python", "Knowledge graphs", "Dgraph", "NetworkX"],
    links: [],
    featured: true,
    confidential: true,
  },
  {
    id: "imagine-hashing",
    title: "Imagine Hashing",
    summary:
      "Research prototype for imperceptible, tamper-resistant image watermarking using steganography, cryptography, and machine learning.",
    category: "Research & tooling",
    year: "2024",
    technologies: ["Python", "Cryptography", "Steganography", "ML"],
    links: [],
  },
  {
    id: "gpt-from-scratch",
    title: "GPT From Scratch",
    summary:
      "A ground-up exploration of transformer internals, attention mechanisms, and training pipelines using PyTorch and nanoGPT.",
    category: "Research & tooling",
    year: "2025",
    technologies: ["Python", "PyTorch", "Transformers"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/GPT-From-Scratch",
      },
    ],
  },
  {
    id: "polymorphic-malware",
    title: "PolymorphicMalware",
    summary:
      "An educational security research project demonstrating encryption, self-modification, and controlled file infection for malware analysis.",
    category: "Security & systems",
    year: "2025",
    technologies: ["Python", "Cryptography", "Malware analysis"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/PolymorphicMalware",
      },
    ],
  },
  {
    id: "term-browse",
    title: "TermBrowse",
    summary:
      "A terminal-based web browser with search, readable text rendering, link navigation, and bookmarking.",
    category: "Research & tooling",
    year: "2025",
    technologies: ["Python", "CLI", "Web"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/TermBrowse",
      },
    ],
  },
  {
    id: "winsec-dll",
    title: "WinSec DLL Hijacking",
    summary:
      "A controlled demonstration of Windows DLL hijacking using a DLL cross-compiled from macOS with MinGW.",
    category: "Security & systems",
    year: "2025",
    technologies: ["C", "WinAPI", "MinGW", "Offensive security"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/WinSec-DLL-Hijacking",
      },
    ],
  },
  {
    id: "blue-sense",
    title: "BlueSense",
    summary:
      "A command-line scanner and monitor for discovering and managing Bluetooth Low Energy devices.",
    category: "Security & systems",
    year: "2025",
    technologies: ["Python", "BLE", "IoT", "CLI"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/BlueSense",
      },
    ],
  },
  {
    id: "iotrace",
    title: "IoTrace",
    summary:
      "A non-invasive WearOS forensic extraction and AI analysis system designed for law-enforcement workflows.",
    category: "Competitive builds",
    year: "2025",
    technologies: ["TypeScript", "Python", "WearOS", "Forensics"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/IoTrace",
      },
    ],
    award: "4th place · CIDECODE 2.0",
    featured: true,
  },
  {
    id: "r3nd3r",
    title: "R3ND3R",
    summary:
      "An automated framework for rendering React components and generating test cases.",
    category: "Competitive builds",
    year: "2024",
    technologies: ["React", "TypeScript", "Testing", "Automation"],
    links: [],
    award: "1st place · Kodikon 3.0",
  },
  {
    id: "blockheads",
    title: "Blockheads",
    summary:
      "A blockchain-based voting system designed to improve election transparency and accessibility.",
    category: "Competitive builds",
    year: "2024",
    technologies: ["Ethereum", "Solidity", "Web3", "JavaScript"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/Blockheads",
      },
    ],
    award: "1st place · Arithmania 3.0",
  },
  {
    id: "rero",
    title: "ReRo",
    summary:
      "An autonomous Python-controlled line-following robot using real-time sensor data and an ESP32 connection.",
    category: "Competitive builds",
    year: "2023",
    technologies: ["Python", "ESP32", "Robotics", "Sockets"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/ReRo-robowars-2023",
      },
    ],
    award: "1st place · Robowars",
  },
  {
    id: "algo-trader",
    title: "AlgoTrader",
    summary:
      "An algorithmic trading bot built on Alpaca APIs to explore automated strategies and machine-learning-based trading systems.",
    category: "Fintech & web3",
    year: "2025",
    technologies: ["Python", "Alpaca API", "Trading systems"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/AlgoTrader",
      },
    ],
  },
  {
    id: "share-vault",
    title: "ShareVault",
    summary:
      "A decentralized platform for encrypted data sharing using blockchain and zero-knowledge proofs.",
    category: "Fintech & web3",
    year: "2025",
    technologies: ["TypeScript", "Blockchain", "ZKP", "Web3"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Pranavh-2004/ShareVault",
      },
    ],
  },
];

export const professionalExperience: Experience[] = [
  {
    organization: "Centre for Cybersecurity, Trust and Reliability, IIT Madras",
    role: "Research Intern",
    location: "Chennai, India",
    period: "Jun 2026 – Present",
    details: [
      "Developing an internal tool for blockchain forensics investigations.",
    ],
  },
  {
    organization: "Pandemonium Research",
    role: "Co-founder and Researcher",
    location: "Bangalore, India",
    period: "Mar 2026 – Present",
    details: [
      "Co-founded an independent engineering and research organization spanning advanced AI systems, distributed systems, cybersecurity, developer tooling, and fintech infrastructure.",
      "Shipped Skilldex as an open-source CLI and community registry with Homebrew and Scoop distribution.",
    ],
  },
  {
    organization: "Cyber Manthan Center, IIIT Hyderabad",
    role: "Cybersecurity and Machine Learning Research Intern",
    location: "Hyderabad, India",
    period: "Dec 2025 – Mar 2026",
    details: [
      "Built a low-resource agentic framework for SOC alert triage across Suricata, Zeek, Wazuh, and OSSEC.",
      "Delivered MISP-grounded anomaly scores and reasoned mitigation recommendations to analysts.",
    ],
  },
  {
    organization: "C3iHub, IIT Kanpur",
    role: "Cybersecurity Research and Development Intern",
    location: "Kanpur, India",
    period: "Jun 2025 – Sep 2025",
    details: [
      "Developed a heterogeneous attack-graph system with knowledge-graph embeddings for multi-stage threat detection.",
      "Engineered an alert-correlation framework that achieved 500× to 10,000× alert reduction across four security data sources.",
    ],
  },
  {
    organization: "buildspace Nights & Weekends S5",
    role: "Project Intern",
    location: "Remote",
    period: "Jun 2024 – Jul 2024",
    details: [
      "Proposed and prototyped an imperceptible, tamper-resistant image watermarking technique.",
      "Led planning and implementation through buildspace Demo Day.",
    ],
  },
  {
    organization: "Helpcreate",
    role: "Chief Technology Officer, Co-founder",
    period: "Oct 2020 – Aug 2021",
    details: [
      "Co-founded a community platform for turning ideas into businesses.",
      "Placed third at Eureka! Junior, IIT Bombay, and secured seed funding.",
    ],
  },
];

export const academicExperience: Experience[] = [
  {
    organization: "PES University",
    role: "Teaching Assistant, Operating Systems",
    location: "Bangalore, India",
    period: "Jan 2026 – May 2026",
    details: [
      "Curated study material and problem sets and evaluated systems projects.",
    ],
  },
  {
    organization: "PES University",
    role: "Teaching Assistant, Automata, Formal Languages and Logic",
    location: "Bangalore, India",
    period: "Aug 2025 – Dec 2025",
    details: [
      "Created study material and guided students through lexer projects and formal-language modeling.",
    ],
  },
  {
    organization: "PESU I/O",
    role: "Subject Matter Expert, Applied Cryptography",
    location: "Bangalore, India",
    period: "Sep 2025 – Dec 2025",
    details: [
      "Developed and taught classical and modern cryptography modules.",
      "Hosted CTF challenges integrating cryptography, OSINT, and forensics.",
    ],
  },
  {
    organization: "University of Oxford",
    role: "Machine Learning Summer School, OxML 2025",
    location: "Remote",
    period: "Aug 2025",
    details: [
      "Attended intensive sessions on AI safety, generative AI, robotics, and representation learning as one of the youngest participants.",
    ],
  },
  {
    organization: "Bangalore Metro Rail Corporation Limited",
    role: "Security Assessment",
    location: "Bangalore, India",
    period: "Jul 2025",
    details: [
      "Supported verification of a full-scale VAPT assessment across BMRCL subdomains and infrastructure, leading to lawful vulnerability disclosure.",
    ],
  },
];

export const competitiveExperience: Experience[] = [
  {
    organization: "Shaastra, IIT Madras",
    role: "Three-time finalist",
    location: "Chennai, India",
    period: "Jan 2024 – Jan 2026",
    details: [
      "Finalist across reverse engineering, competitive programming potpourri, and Shaastra CTF challenges.",
    ],
  },
  {
    organization: "MIST National OSINT Challenge",
    role: "National finalist",
    period: "Apr 2025 & Nov 2025",
    details: [
      "Ranked 32nd nationally in April and 17th nationally in November.",
    ],
  },
  {
    organization: "CIDECODE 2.0 · CCITR, CID Karnataka",
    role: "4th place",
    location: "Bangalore, India",
    period: "Mar 2025",
    details: [
      "Built IoTrace, a WearOS forensic extraction and AI analysis system for law enforcement.",
    ],
  },
  {
    organization: "PNB Cybersecurity Hackathon · IIT Kanpur",
    role: "Finalist",
    period: "Dec 2024 – Mar 2025",
    details: [
      "Built an end-to-end intrusion detection system targeting ransomware threats to banking infrastructure.",
    ],
  },
  {
    organization: "PES University",
    role: "Three first-place finishes",
    location: "Bangalore, India",
    period: "Nov 2023 – Oct 2024",
    details: [
      "Won Kodikon 3.0 with R3ND3R, Arithmania 3.0 with Blockheads, and Robowars with an autonomous line-following robot.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Programming",
    items: [
      "Python",
      "C/C++",
      "Go",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Verilog",
      "Assembly",
    ],
  },
  {
    label: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "OpenCV",
    ],
  },
  {
    label: "Systems & infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Kafka",
      "RabbitMQ",
      "ELK",
    ],
  },
  {
    label: "Security",
    items: [
      "Wazuh",
      "OSSEC",
      "Suricata",
      "Zeek",
      "Dgraph",
      "KQL",
      "DQL",
      "NetworkX",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Machine Learning Summer School (OxML 2025)",
    issuer: "University of Oxford",
    date: "Aug 2025",
    credential: "CPD Accredited",
  },
  {
    title: "Cybersecurity Research and Development Internship",
    issuer: "C3iHub, IIT Kanpur",
    date: "Jun – Sep 2025",
    credential: "C3iHub Internship Certificate",
  },
  {
    title: "Cooking with Granite: IBM Open Source LLMs",
    issuer: "BeMyApp",
    date: "Apr 2025",
    credential: "bf752f06-e45e-4353-b8aa-1990dcdb15df",
  },
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    date: "Apr 2025",
    credential: "85DE7D06992C",
  },
  {
    title: "Introduction to Programming in C",
    issuer: "NPTEL · IIT Kanpur",
    date: "Apr 2024",
    credential: "NPTEL24CS02S346603738",
    note: "Top 5% of the course.",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials",
    date: "Jan 2024",
    credential: "65b28c7671e4c16beb7d686f",
  },
  {
    title: "Deep Dive into GenAI",
    issuer: "PESU I/O",
    date: "Oct 2023",
  },
  {
    title: "Official Space Camp and HLCA Graduate",
    issuer: "U.S. Space & Rocket Center",
    date: "Oct 2022",
    credential: "USSRC_2022",
  },
  {
    title: "IEntO Participation",
    issuer: "E-Cell, IIT Bombay",
    date: "Nov 2022",
  },
  {
    title: "E-SUMMIT '21",
    issuer: "E-Cell, IIT Bombay",
    date: "Feb 2021",
  },
  {
    title: "NEO 2021 Certificate",
    issuer: "E-Cell, IIT Bombay",
    date: "Jan 2021",
  },
  {
    title: "Cambridge English B1",
    issuer: "Cambridge English",
    date: "Apr 2018",
    credential: "0060908866",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "CIE Finals Presentation",
    description: "Presenting at the CIE finals.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/CIE_finals_me_presenting?_a=BAMAMiOc0",
  },
  {
    title: "CIDECODE",
    description: "The IoTrace team at CIDECODE 2.0.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/Cidecode_win?_a=BAMAMiOc0",
  },
  {
    title: "IIT Kanpur",
    description: "During the C3iHub research internship.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/IIT_Kanpur_me?_a=BAMAMiOc0",
  },
  {
    title: "IIT Madras",
    description: "At IIT Madras.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/IIT_Madras_me?_a=BAMAMiOc0",
  },
  {
    title: "Kodikon 3.0",
    description: "First place at Kodikon 3.0 with R3ND3R.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/Kodikon_win?_a=BAMAMiOc0",
  },
  {
    title: "TAMS Patna",
    description: "School outreach for TAMS.",
    src: "https://res.cloudinary.com/djkl22q57/image/upload/c_limit,f_auto,q_auto,w_1400/v1/portfolio/gallery/portfolio/gallery/TAMS_Patna_marketing?_a=BAMAMiOc0",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Archive", href: "/archive" },
];
