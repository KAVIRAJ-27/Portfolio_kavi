import { Project, SkillCategory, JourneyPhase, IoTSensor, Achievement } from '@/types';

export const personalInfo = {
  name: "Kaviraj R",
  education: "III Year B.Tech – Artificial Intelligence and Data Science",
  role: "AI & Data Science Student | Full-Stack Developer | AI/IoT Enthusiast",
  location: "Tamil Nadu, India",
  headline: "Building intelligent applications that connect AI, software, and the real world.",
  supportingText: "I build practical projects across Artificial Intelligence, Full-Stack Development, Android applications, IoT, and data-driven systems.",
  shortBio: "I’m Kaviraj R, a B.Tech Artificial Intelligence and Data Science student who enjoys building practical applications using AI, IoT, mobile development, and modern web technologies.",
  extendedBio: "Currently in my 3rd year of undergraduate studies, I focus on transforming theoretical AI models and data engineering concepts into functional, local-first and web applications. My learning journey spans across computer science fundamentals, full-stack architectures, mobile frameworks, edge computing, and emerging quantum computing platforms.",
  rotatingRoles: [
    "AI Developer",
    "Full-Stack Developer",
    "Android Developer",
    "IoT Enthusiast",
    "Problem Solver"
  ],
  socials: {
    github: "https://github.com/KAVIRAJ-27",
    linkedin: "https://www.linkedin.com/in/kaviraj-r-0527b2395?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "mailto:kaviraj5440@gmail.com",
    emailRaw: "kaviraj5440@gmail.com",
    resumePdf: "/resume.pdf",
    resumeDrive: "https://drive.google.com/file/d/1r1bgRS-QImWzAh6TPtkLDSmkTcqpe8uV/view?usp=sharing"
  }
};

export const careerMilestones = [
  {
    step: "Student",
    subtitle: "Foundations",
    desc: "B.Tech AI & Data Science coursework, data structures, algorithms, and object-oriented paradigms."
  },
  {
    step: "Learner",
    subtitle: "Exploration",
    desc: "Diving deep into Machine Learning algorithms, Python scientific stack, and modern web ecosystems."
  },
  {
    step: "Builder",
    subtitle: "Hands-on Craft",
    desc: "Constructing local-first Android apps, RESTful backends, and IoT telemetry pipelines."
  },
  {
    step: "Project Developer",
    subtitle: "System Integration",
    desc: "Architecting multi-tier AI applications like QuantumLearn for Smart India Hackathon."
  },
  {
    step: "Future AI Engineer",
    subtitle: "Aspiration",
    desc: "Targeting engineering roles that combine applied AI, intelligent software systems, and edge devices."
  }
];

export const skillsData: SkillCategory[] = [
  {
    name: "Programming",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Proficient", context: "Object-oriented software design, core algorithms, Spring Boot basics" },
      { name: "Python", level: "Proficient", context: "ML modeling (scikit-learn), FastAPI services, data wrangling" },
      { name: "JavaScript", level: "Proficient", context: "Modern ES6+, DOM manipulation, asynchronous event handling" },
      { name: "TypeScript", level: "Proficient", context: "Type-safe web apps, component interfaces, robust state management" }
    ]
  },
  {
    name: "AI / Data",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: "Practical", context: "Supervised classification, feature engineering, evaluation metrics", highlight: true },
      { name: "Random Forest", level: "Practical", context: "Ensemble modeling used in stress prediction research (~88.64% accuracy)" },
      { name: "Generative AI", level: "Practical", context: "LLM orchestration, prompt engineering, structured JSON outputs" },
      { name: "RAG", level: "Practical", context: "Retrieval-Augmented Generation for grounded educational QA systems" },
      { name: "LangChain", level: "Practical", context: "AI agent chains, memory stores, and vector search integrations" },
      { name: "Data Analysis", level: "Practical", context: "Pandas, NumPy, Matplotlib data exploration and cleaning pipelines" }
    ]
  },
  {
    name: "Web",
    icon: "Globe",
    skills: [
      { name: "React", level: "Proficient", context: "Component lifecycles, custom hooks, interactive UI engineering" },
      { name: "Next.js", level: "Proficient", context: "App Router, server/client components, SEO optimization" },
      { name: "Tailwind CSS", level: "Proficient", context: "Responsive design systems, glassmorphism, modern dark UI styling" },
      { name: "Node.js", level: "Practical", context: "Express microservices, REST APIs, JSON data pipelines" },
      { name: "FastAPI", level: "Practical", context: "High-performance Python backend APIs for ML & Quantum models" }
    ]
  },
  {
    name: "Mobile",
    icon: "Smartphone",
    skills: [
      { name: "Android", level: "Practical", context: "Native concepts, foreground/background services, notification channels" },
      { name: "React Native", level: "Practical", context: "Cross-platform development, custom navigation, hardware access" },
      { name: "Expo", level: "Proficient", context: "Expo SQLite, Expo Notifications, local-first offline architecture" }
    ]
  },
  {
    name: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Proficient", context: "Relational database modeling, complex joins, indexed queries" },
      { name: "PostgreSQL", level: "Practical", context: "Vector embeddings storage, structured institutional data" },
      { name: "SQLite", level: "Proficient", context: "Local-first on-device storage for mobile apps (offline persistence)" }
    ]
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Proficient", context: "Branching strategies, version control, PR reviews" },
      { name: "GitHub", level: "Proficient", context: "Open-source collaboration, repository management, Actions" },
      { name: "VS Code", level: "Daily Driver", context: "Primary development IDE with extensions for TS, Python, and Next.js" },
      { name: "Android Studio", level: "Practical", context: "Emulators, SDK tools, profiling, and APK generation" },
      { name: "Qiskit", level: "Practical", context: "IBM Quantum framework for simulated quantum circuits & operators" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "quantumlearn",
    name: "QuantumLearn",
    category: "AI + Quantum Computing + Education",
    tags: ["AI", "Web", "Education"],
    description: "An AI-powered interactive platform designed to help students and researchers learn quantum algorithms through interactive lessons, quantum circuit building, games, and AI-assisted learning.",
    problem: "Quantum computing concepts like superposition, entanglement, and unitary gates carry a steep mathematical barrier. Traditional textbooks lack real-time visual feedback and personalized mentorship, intimidating students.",
    solution: "Built a synchronized visual learning platform where students can drag-and-drop quantum gates into a circuit builder, view statevector and Bloch sphere probabilities in real-time, execute simulated Qiskit code, and consult a Socratic AI mentor for conceptual guidance.",
    features: [
      "35 guided interactive lessons from qubit basics to Shor's algorithm",
      "Interactive drag-and-drop quantum circuit builder with React Flow",
      "IBM Qiskit integration for accurate simulation and quantum state analysis",
      "Tri-directional synchronization: visual circuit ↔ Python code ↔ mathematical equations",
      "Real-time quantum statevector and probability distribution visualizations",
      "Socratic AI mentor powered by RAG and LangChain for conceptual guidance",
      "AI learning progress analysis and personalized diagnostic feedback",
      "Instructor analytics dashboard for classroom concept comprehension",
      "Interactive quantum gaming modules (Quantum Tic-Tac-Toe and Bell State puzzles)"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Flow", "FastAPI", "Qiskit", "LangChain", "RAG", "PostgreSQL"],
    learnings: "Deepened understanding of quantum information science, matrix mechanics, vector retrieval with RAG, and managing synchronized client-side graph state.",
    status: "In Development",
    githubUrl: "https://github.com/KAVIRAJ-27",
    demoUrl: "https://[Add Demo URL]",
    isMajor: true,
    hasInteractiveSimulator: null
  },
  {
    id: "hydro-reminder",
    name: "HydroReminder",
    category: "Android Application",
    tags: ["Android"],
    description: "A local-first water reminder Android application designed to help users maintain consistent hydration habits without privacy concerns or network dependency.",
    problem: "Most hydration reminder apps require cloud accounts, display intrusive third-party ads, track user data, or fail when offline without internet connectivity.",
    solution: "Engineered an offline-first Android application using React Native and Expo that stores all intake data in an embedded SQLite database, triggers reliable scheduled alarm-style notifications, and calculates streak analytics completely on-device.",
    features: [
      "Custom interval water reminders with quiet hours protection",
      "Alarm-style high-priority notifications that pierce device idle states",
      "One-tap drink confirmation directly from notification actions",
      "Flexible snooze options: 15-minute and 30-minute quick snooze",
      "Intelligent follow-up reminders if scheduled intake was missed",
      "Daily water consumption goal tracking with animated progress ring",
      "Historical drink log with timestamps and volume metrics",
      "Streak counter encouraging long-term habit formation",
      "Embedded SQLite database for 100% private offline persistence",
      "Zero-latency reactive state powered by Zustand store",
      "Deep customization for target volumes (ml/oz) and wake-up schedules"
    ],
    technologies: ["React Native", "Expo", "Expo Notifications", "Expo SQLite", "Zustand"],
    learnings: "Mastered Android background notification lifecycle quirks, local SQLite schema migrations, and optimistic UI updates with lightweight state managers.",
    status: "Completed",
    githubUrl: "https://github.com/KAVIRAJ-27",
    demoUrl: "https://[Add Demo URL]",
    isMajor: true,
    hasInteractiveSimulator: 'hydro'
  },
  {
    id: "location-recorder",
    name: "Location Recorder",
    category: "Android + Location + Maps",
    tags: ["Android"],
    description: "A privacy-focused local Android application that periodically records device location and allows users to explore their travel history with timeline analytics and offline map fallbacks.",
    problem: "Commercial timeline services harvest continuous location telemetry to commercial cloud servers, raising serious privacy concerns, while naive GPS logging rapidly drains battery life.",
    solution: "Designed an energy-efficient periodic GPS logging client that caches coordinates strictly on the local handset, supports offline tile caching, and demands biometric authentication before any data can be exported.",
    features: [
      "Periodic battery-conscious GPS logging with configurable intervals (1 min – 1 hr)",
      "Calendar-based chronological travel history explorer",
      "Interactive map route visualization with start, waypoint, and destination markers",
      "Dual map engine: online vector map with graceful offline tile fallback",
      "Coordinate-based export (GeoJSON / CSV / GPX) for personal analytics",
      "Biometric fingerprint/PIN confirmation required before exporting location records",
      "Intelligent trip detection grouping consecutive points into identifiable journeys",
      "Distance, average speed, and stationary duration analytics dashboard",
      "Full encrypted local backup and restore capability"
    ],
    technologies: ["React Native", "Expo Location", "Expo LocalAuthentication", "SQLite", "Leaflet/Mapbox"],
    learnings: "Gained practical experience balancing mobile battery draw with GPS accuracy thresholds, handling Android geofencing permissions, and biometric security APIs.",
    status: "In Development",
    githubUrl: "https://github.com/KAVIRAJ-27",
    demoUrl: "https://[Add Demo URL]",
    isMajor: false,
    hasInteractiveSimulator: 'location'
  },
  {
    id: "academic-allocation",
    name: "Academic Resource Allocation Optimization Dashboard",
    category: "AI / Optimization / Education",
    tags: ["AI", "Web", "Education"],
    description: "A resource optimization platform designed to help educational institutions analyze and improve the utilization of classrooms, faculty, infrastructure, and other academic resources.",
    problem: "Colleges frequently suffer from schedule collisions, under-utilized laboratory equipment, mismatched classroom capacities, and unbalanced faculty workloads due to manual timetable creation.",
    solution: "Developed an optimization dashboard that ingests student enrollment counts, classroom capacities, and faculty availability matrices to generate conflict-free allocation proposals and utilization analytics.",
    features: [
      "Student cohort enrollment and course registration data ingestion",
      "Faculty availability, workload caps, and specialization mapping",
      "Infrastructure inventory management (lecture halls, specialized labs, projectors)",
      "Heuristic optimization algorithms minimizing room travel distance and idle gaps",
      "Interactive resource utilization heatmaps and bottleneck analytics",
      "Hostel room occupancy and warden allocation management module",
      "Department-level HOD portal for syllabus distribution and workload balancing",
      "Executive overview dashboard for Principal and Institute Administrators"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js/FastAPI", "PostgreSQL", "Optimization Algorithms"],
    learnings: "Learned constraint satisfaction problems (CSP), combinatorial scheduling heuristics, and building role-based analytics dashboards with dense data visualizations.",
    status: "Prototype",
    githubUrl: "https://github.com/KAVIRAJ-27",
    demoUrl: "https://[Add Demo URL]",
    isMajor: false,
    hasInteractiveSimulator: null
  },
  {
    id: "stress-prediction",
    name: "AI-Based Human Stress Prediction System",
    category: "Machine Learning",
    tags: ["Machine Learning", "AI", "Data Science"],
    description: "A machine-learning-based application that predicts human stress levels using collected physiological/behavioral input data and presents the results through an interactive dashboard.",
    problem: "Chronic stress impacts health and productivity, yet continuous clinical monitoring is costly. Accessible screening systems are needed to provide early non-diagnostic self-reflection.",
    solution: "Trained a Random Forest classification model on curated multidimensional biometric and behavioral indicators to predict stress categories, paired with a web dashboard for interactive parameter testing.",
    features: [
      "Random Forest classification model achieving approximately 88.64% test accuracy",
      "Multidimensional input handling: sleep duration, work hours, physical activity, heart rate indicators",
      "Non-diagnostic early indication dashboard with risk categorization (Low, Moderate, High)",
      "Feature importance breakdown illustrating key contributing variables to predicted score",
      "Secure backend architecture with Spring Boot / Flask and JWT authentication",
      "Interactive Chart.js visualizations tracking stress indicator trends over simulated sessions",
      "Clear ethical boundaries: designed strictly for informational awareness, not clinical diagnosis"
    ],
    technologies: ["Python", "Random Forest", "React", "Spring Boot", "Flask", "MySQL", "JWT", "Chart.js"],
    learnings: "Practiced thorough data preprocessing, addressing class imbalance, evaluating precision-recall tradeoffs, and clearly communicating AI limitations in health contexts.",
    status: "Completed",
    githubUrl: "https://github.com/KAVIRAJ-27",
    demoUrl: "https://[Add Demo URL]",
    isMajor: false,
    accuracy: "~88.64%",
    hasInteractiveSimulator: null
  }
];

export const iotPipelineSteps = [
  { step: "Sensor", title: "Physical Sensing", desc: "Environmental, optical, and physical inputs captured from real-world surroundings." },
  { step: "Edge Device", title: "Microcontroller / Edge", desc: "ESP32, Arduino, or Raspberry Pi converting analog signals into digital telemetry." },
  { step: "Processing", title: "Local Filtering", desc: "Noise filtering, threshold checks, and MQTT/HTTP packet payload serialization." },
  { step: "AI", title: "Inference & Rules", desc: "Edge ML or cloud inference evaluating anomalies and predictive trends." },
  { step: "Database", title: "Time-Series Store", desc: "Structured telemetry storage optimized for time-stamped query historical analysis." },
  { step: "Dashboard", title: "Unified Interface", desc: "Real-time visual monitoring, threshold alerts, and mobile/web actuation." }
];

export const iotSensors: IoTSensor[] = [
  {
    id: "air-quality",
    name: "Air Quality Sensor",
    icon: "Wind",
    type: "MQ-135 / PMS5003",
    purpose: "Monitors environmental air quality parameters including particulate matter (PM2.5, PM10), CO2, and harmful volatile organic compounds (VOCs).",
    telemetryMetrics: "PPM, Air Quality Index (AQI), μg/m³",
    aiApplication: "Time-series forecasting of room ventilation demand and anomaly detection for pollution spikes.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "motion",
    name: "PIR Motion Sensor",
    icon: "Activity",
    type: "HC-SR501",
    purpose: "Detects human presence and movement inside a monitored facility through passive infrared radiation variations.",
    telemetryMetrics: "Binary state (Motion Detected / Clear), Duration (sec)",
    aiApplication: "Smart room occupancy forecasting to optimize HVAC and lighting energy utilization.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "ultrasonic",
    name: "Ultrasonic Distance Sensor",
    icon: "Radio",
    type: "HC-SR04",
    purpose: "Measures distance to target objects using high-frequency acoustic echo round-trip calculation.",
    telemetryMetrics: "Distance (cm / inches), Fill Level (%)",
    aiApplication: "Smart waste bin overflow prediction and automated water tank inventory tracking.",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: "light",
    name: "Ambient Light Sensor",
    icon: "Sun",
    type: "LDR / BH1750",
    purpose: "Measures ambient illuminance levels in lux to gauge daylight intensity and indoor lighting conditions.",
    telemetryMetrics: "Illuminance (Lux), Resistance (kΩ)",
    aiApplication: "Adaptive smart building lighting control algorithms balancing comfort and power savings.",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: "fire",
    name: "Flame / Thermal Sensor",
    icon: "Flame",
    type: "Infrared Flame Receiver",
    purpose: "Detects infrared light wavelengths emitted by open flames to provide rapid early hazard notification.",
    telemetryMetrics: "Infrared Intensity, Digital Trigger (High/Low)",
    aiApplication: "Multimodal sensor fusion with temperature telemetry to prevent false alarm triggers.",
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    id: "camera",
    name: "Vision Module",
    icon: "Camera",
    type: "ESP32-CAM / Pi Cam",
    purpose: "Captures video frames and still imagery at the edge for computer vision inspection tasks.",
    telemetryMetrics: "Frame Rate (FPS), Resolution, JPEG stream",
    aiApplication: "On-device TinyML object detection, safety gear verification, or gesture-based smart control.",
    color: "from-cyan-500/20 to-violet-500/20"
  }
];

export const journeyPhases: JourneyPhase[] = [
  {
    phase: 1,
    title: "Programming Fundamentals",
    period: "Early Engineering",
    summary: "Built foundational discipline in computational thinking, procedural logic, and algorithmic problem-solving using C and Python.",
    skillsUnlocked: ["Computational Logic", "Control Flow", "Data Structures", "Algorithms Basics"]
  },
  {
    phase: 2,
    title: "Java & Problem Solving",
    period: "Year 2 – Semester 1",
    summary: "Mastered Object-Oriented Programming in Java, inheritance patterns, exception handling, data structures, and algorithmic complexity.",
    skillsUnlocked: ["Core Java", "OOP Design", "Collections Framework", "Big-O Analysis"]
  },
  {
    phase: 3,
    title: "Modern Web Development",
    period: "Year 2 – Semester 2",
    summary: "Ventured into full-stack web architecture with modern JavaScript, React, Next.js, and CSS design systems for responsive interfaces.",
    skillsUnlocked: ["React", "TypeScript", "Tailwind CSS", "Next.js", "REST APIs"]
  },
  {
    phase: 4,
    title: "AI & Machine Learning",
    period: "Year 3 – Semester 1",
    summary: "Dived into AI and Data Science coursework: regression, decision trees, Random Forests, classification evaluation, and exploratory data analysis.",
    skillsUnlocked: ["Scikit-Learn", "Random Forest", "Pandas", "Feature Engineering", "Model Evaluation"],
    highlightProject: "AI Stress Prediction System (~88.64% accuracy)"
  },
  {
    phase: 5,
    title: "Mobile Application Development",
    period: "Year 3 – Ongoing",
    summary: "Applied software engineering to mobile clients using React Native and Expo, architecting privacy-centric, local-first offline tools.",
    skillsUnlocked: ["React Native", "Expo SQLite", "Local Notifications", "Zustand State", "Biometric Auth"],
    highlightProject: "HydroReminder & Location Recorder"
  },
  {
    phase: 6,
    title: "IoT & Intelligent Systems",
    period: "Year 3 – Exploring",
    summary: "Investigating the bridge between physical sensors, microcontrollers, and cloud/AI analytics pipelines to design intelligent smart environments.",
    skillsUnlocked: ["Sensor Telemetry", "Edge Logic", "MQTT Basics", "Sensor Fusion Concepts"]
  },
  {
    phase: 7,
    title: "Advanced AI + Real-World Projects",
    period: "Present & Future",
    summary: "Integrating Generative AI, RAG, and Quantum Computing simulations into production-grade educational platforms and high-impact applications.",
    skillsUnlocked: ["RAG Architecture", "LangChain", "Qiskit Framework", "Interactive Visualizers", "System Integration"],
    highlightProject: "QuantumLearn (Smart India Hackathon)"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Smart India Hackathon (SIH)",
    category: "National Hackathon",
    description: "Developed 'QuantumLearn', an AI-based interactive quantum algorithm learning platform featuring a drag-and-drop circuit builder, Qiskit integration, and a Socratic AI mentor.",
    date: "2024 - Present",
    featured: true
  },
  {
    title: "III Year B.Tech Academic Focus",
    category: "Academics",
    description: "Pursuing Artificial Intelligence & Data Science in Tamil Nadu, India, maintaining active project development across ML, mobile, and web stacks.",
    date: "2023 - Present",
    featured: true
  },
  {
    title: "Local-First Software Architecture",
    category: "Engineering Milestone",
    description: "Engineered zero-cloud, privacy-preserving Android solutions (HydroReminder and Location Recorder) utilizing embedded SQLite and local biometrics.",
    date: "2024",
    featured: false
  },
  {
    title: "Predictive Modeling with Random Forest",
    category: "AI / Data Science",
    description: "Implemented an empirical stress classification model with approximately 88.64% accuracy, deployed within an interactive evaluation dashboard.",
    date: "2024",
    featured: false
  }
];
