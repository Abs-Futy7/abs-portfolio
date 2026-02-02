

export const data = [
    {
        title: "t1",
        description: "desc1",
        id: 1,
        index: 1
    },
    {
        title: "t2",
        description: "desc2",
        id: 2,
        index: 2
    },
    {
        title: "t3",
        description: "desc3",
        id: 3,
        index: 3
    },
    {
        title: "t4",
        description: "desc4",
        id: 4,
        index: 4
    }
]


export const projects = [
    {
        id: 0,
        title: "MindMate",
        description: "MindMate is an innovative web application designed to assist users in managing their mental health through the power of AI. Built with Next.js and Tailwind CSS for a responsive and user-friendly interface, the platform leverages FastAPI for robust backend services and PostgreSQL for efficient data management. The application integrates Gemini API to provide personalized mental health support, resources, and tools based on user profiles and preferences.",
        img: '/projects/home.PNG',
        link: "https://mind-mate-sepia.vercel.app/",
        tags: ["Next.js", "FastAPI", "TypeScript", "Supabase", "PostgreSQL", "Hugging Face"]
    },
    {
        id: 1,
        title: "YtVerb",
        description: "YtVerb revolutionizes how you interact with YouTube content by enabling intelligent conversations with any YouTube video. Using advanced RAG (Retrieval-Augmented Generation) architecture, the platform extracts, processes, and indexes video transcripts, allowing users to ask questions and get contextual answers about video content without watching the entire video.",
        link: "https://github.com/Abs-Futy7/YtVerb",
        img: "/projects/ytverb.png",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "LangChain", "Gemini"]
    },
    
    {
        id: 2,
        title: "VistaVoyage",
        description: "Modern Travel Booking Platform",
        img: '/projects/landing1.png',
        link: "https://github.com/Abs-Futy7/VistaVoyage",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "FastAPI", "PostgreSQL"]
    },
    {
        id: 3,
        title: "VolunSphere",
        description: "VolunSphere is a comprehensive volunteer management mobile application built with Flutter and Dart for the frontend, and FastAPI with PostgreSQL for the backend. The app connects volunteers with organizations, allowing users to browse and sign up for volunteer opportunities, track their hours, and receive notifications about upcoming events. The backend leverages Gemini API for advanced features like AI-driven recommendations and Supabase for real-time database management and authentication.",
        link: "https://github.com/Abs-Futy7/VolunSphere",
        img: "/projects/volunsphere.jpg",
        tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Gemini API", "Supabase", "Groq"]
    }
    ,
    {
        id: 4,
        title: "School Management System",
        description: "The School Management System is an Object-Oriented Programming (OOP) based project designed to efficiently manage school operations for admins, teachers, and students. This system includes features like user authentication, student and teacher management, attendance tracking, fee payment processing, study material sharing, and real-time chat. Built with Java Swing for UI, MySQL for database management, and Apache Ant for project build automation, this system ensures modularity, scalability, and a seamless user experience.",
        link: "https://github.com/Abs-Futy7/2nd-Year-1st-Semester-OOP-Project",
        img: "/projects/sch.png",
        tags: ["Java", "Swing", "MySQL", "OOP"]
    },
    /*{
        id: 5,
        title: "PitchLab",
        description: "PitchLab is an innovative Next.js web application that simulates having AI co-founders for your startup venture. It provides expert guidance through specialized AI agents that help entrepreneurs make informed decisions about technical architecture, marketing strategies, financial planning, and project structure.",
        img: '/projects/pitchlab.png',
        link: "https://pitchlab-five.vercel.app/",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Gemini API", "OGL"]
    },*/
    {
        id: 6,
        title: "SyncroX",
        description: "A collaborative platform demonstrating advanced networking concepts including custom TCP protocols, Tahoe/Reno congestion control, RTT estimation, and secure Docker-based code execution for the Computer Networking Lab course.",
        img: '/projects/syncrox.png',
        link: "https://github.com/Abs-Futy7/SyncroX",
        tags: ["Python", "Docker", "TCP", "Streamlit"]
    },
    
]


export const navItems = [
    {
        name: "Home",
        link: "/home",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Projects",
        link: "/projects",
    
    },
    {
        name: "CTFs",
        link: "/ctfs",

    },
    {
        name: "Visuals",
        link: "/visuals",
    },
    {
        name: "Achievements",
        link: "/achievements",
    },
    {
        name: "Contact",
        link: "/contact",
    }

]



export const teamMembers = [
    {
        name: "Md.Abu Bakar Siddique",
        role: "Networking - Forensics",
        img: "/abs.png",
        fb: "https://fb.com/abu%20bakar%20siddique%20(abs)",
        github: "https://github.com/Abs-Futy7",
        linkedin: "https://www.linkedin.com/in/md-abu-bakar-siddique-59b881237/"
    },
    {
        name: "Dibbajothy Sarker",
        role: "Reverse Engineering - Pwn",
        img: "/dibba.png",
        fb: "https://www.facebook.com/Dibbajothy",
        github: "https://github.com/Dibbajothy",
        linkedin: "https://www.linkedin.com/in/dibbajothy-sarker-3b73ab269/"
    },
    {
        name: "Ahil Islam Aurnob",
        role: "Cryptography - Web",
        img: "/aurnob.png",
        fb: "https://www.facebook.com/ronin.ronin.79677471",
        github: "https://github.com/aheel03",
        linkedin: "https://www.linkedin.com/in/ahil-islam-aurnob-0173b2317/"
    },
    {
        name: "Shafahid Rahman",
        role: "Osint - Web",
        img: "/shafahid.png",
        fb: "https://www.facebook.com/shafahid.rahman",
        github: "https://github.com/Shafahid",
        linkedin: "https://www.linkedin.com/in/chowdhury-shafahid-rahman-359b72301/"
    }
    
]


export const ctfData = [
    {
        id: 1,
        name: "DUCTF",
        year: 2024,
        rank: "2nd" ,
    },
    {        id: 11,
        name: "Cipher Sprint CTF",
        year: 2025,
        rank: "2nd",
    },
    {
        id: 12,
        name: "DIU CTF",
        year: 2025,
        rank: "2nd",
    },
    {
        id: 9,
        name: "BUP CTF",
        year: 2025,
        rank: "3rd",
    },
    {
        id: 7,
        name: "UAP Cyber Siege",
        year: 2024,
        rank: "3rd",
    },
    {
        id: 10,
        name: "Al-Khwarizmi CTF",
        year: 2026,
        rank: "4th",
    },
    {
        id: 8,
        name: "BDSecCtf 2025",
        year: 2025,
        rank: "7th",
    },
    {
        id: 4,
        name: "CyberRaid",
        year: 2025,
        rank: "9th",
    },
    {
        id: 2,
        name: "BCSCTF",
        year: 2024,
        rank: "10th",
    },
    {
        id: 3,
        name: "BUETCTF",
        year: 2024,
        rank: "14th",
    },
    {
        id: 5,
        name: "KnightCTF",
        year: 2025,
        rank: "50th",
    },
    {
        id: 6,
        name: "picoCTF",
        year: 2025,
        rank: "191st",
    }
]


export const achievements = [
    {
        name: "1st Runners-UP - PKI Hackathon 2025",
        subtitle: "DU_Apricot won 2nd prize in Public Key Infrastructure Hackathon 2025 organized by Controller of Certifying Authority and ICT Division, Government of the People's Republic of Bangladesh.",
        img: "/achievements/pki-hackathon.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7332061841239470080/"
    },
    {
        name: "1st Runners-UP | CipherSprint CTF - CIRCUIT CLASH 1.0",
        subtitle: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬 secured the 🥈𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 position in the CipherSprint CTF 2025, powered by Knight Squad and organized by the BUP Robotics Club, with a total score of 1165 points! ",
        img: "/achievements/CipherSprint.png",
        link: "https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_ciphersprint-capturetheflag-ctf-activity-7396587491169837056-kGNz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsKIgcBSqSQNqtJhwwj_9VsmTUKu-EBLiQ"
    },
    {
        name: "1st Runners-UP - 𝐃𝐈𝐔 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐧 – 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐂𝐚𝐩𝐭𝐮𝐫𝐞 𝐓𝐡𝐞 𝐅𝐥𝐚𝐠 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 𝟐𝟎𝟐𝟓",
        subtitle: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬 achieved the 🥈𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 position at the National Capture The Flag Competition 2025, organized by the Cyber Security Club, Daffodil International University under DIU_CYBERCON, with a total of 3632 point",
        img: "/achievements/diu.png",
        link: "https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_ctf-cybersecurity-ethicalhacking-activity-7390052587158360069-QUjx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsKIgcBSqSQNqtJhwwj_9VsmTUKu-EBLiQ"
    },
    {
        name: "2nd Runners-UP - UAP Cyber Seige 2025",
        subtitle: "DU_Black_Noodles won 3rd prize in UAP Cyber Seige 2025 organized by University of Asia Pacific.",
        img: "/achievements/uap.png",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7325126660108767232/"
    },
    {
        name: "1st Runners-UP - DU CTF 2024",
        subtitle: "DU_Black_Noodles won 2nd prize in DU CTF 2024 organized by CSE, University of Dhaka.",
        img: "/achievements/image.png",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7278103645320024064/"
    },
    {
        name: "2nd Runners-UP - BUP CTF 2025",
        subtitle: "Our team, 𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬, earned 2660 points and secured 𝟑𝐫𝐝 𝐩𝐥𝐚𝐜𝐞 at the 𝐁𝐔𝐏 𝐂𝐓𝐅 𝟐𝟎𝟐𝟓 powered by Knight Squad.",
        img: "/achievements/bup.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7377368273832673280/"
    },
    {
        name: "Al-Khwarizmi CTF 2026 - 4th Place",
        subtitle: "Our team, 𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬, secured the 4th position among 650+ teams in the Al-Khwarizmi CTF 2026 with total 5520 points, organized by the Bangladesh Islamic ChhatraShibir.",
        img: "/achievements/shibir.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7246222636544867840/"
    }
    
]


export const webDevSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "FastAPI",
    "Flutter",
    "Git & GitHub"
];


export const ctfSkills = [
    "Web Exploitation",
    "Reverse Engineering",
    "Forensics",
    "OSINT",
    "Networking"
];

export const visualSkills = [
    "Figma",
    "Canva",
    "Photoshop",
    "Illustrator"
];



export const visualSrc1 = [
    {
        src: "/visuals/12.jpg",
        alt: "Visual 12"
    },
    {
        src: "/visuals/14-Dec.png",
        alt: "Visual 14"
    },
    {
        src: "/visuals/15.png",
        alt: "Visual 15"
    },
    {
        src: "/visuals/25-dec.png",
        alt: "Visual 25"
    },
    {
        src: "/visuals/26-March.png",
        alt: "Visual 26"
    },
    {
        src: "/visuals/5.png",
        alt: "Visual 5"
    },
    {
        src: "/visuals/6.png",
        alt: "Visual 6"
    },
    {
        src: "/visuals/9.png",
        alt: "Visual 9"
    },
    {
        src: "/visuals/Don_Quixote.jpg",
        alt: "Don Quixote"
    },
];


export const visualSrc2 = [
    {
        src: "/visuals/DUCC_Ann.png",
        alt: "DUCC Announcement"
    },
    {
        src: "/visuals/DUCC_Easter.png",
        alt: "DUCC Easter"
    },
    {
        src: "/visuals/Kazi-Nazrul-Birthday.png",
        alt: "Kazi Nazrul Birthday"
    },
    {
        src: "/visuals/Mental_Health_Day.png",
        alt: "Mental Health Day"
    },
    {
        src: "/visuals/Metaverse.png",
        alt: "Metaverse"
    },
    {
        src: "/visuals/MiladUnNabi.png",
        alt: "Milad Un Nabi"
    },
    {
        src: "/visuals/MMD.jpg",
        alt: "MMD"
    },
    {
        src: "/visuals/Nine-I.jp8.jpg",
        alt: "Nine I"
    },
    {
        src: "/visuals/riskid.png",
        alt: "Risk ID"
    }
];