// =========================================
// PORTFOLIO CONTENT CONFIGURATION
// =========================================
// Edit this file to update all content across your portfolio
// No need to touch component files!

const portfolioData = {
  // ===================================
  // PERSONAL INFORMATION
  // ===================================
  personalInfo: {
    name: "Joel J Sebastian",
    title: "Full Stack Developer | Aspiring Technical Architect | Problem Solver",
    tagline: "I craft elegant solutions to complex problems. Passionate about building user-centric applications and systems that make a difference.",
    // For page title and meta tags
    pageTitle: "joelsebbu - me",
    // Profile image - place your image in /public folder and reference it here
    // Example: "/profile.jpg" or "/images/profile.png"
    // Leave as null to use the default placeholder
    profileImage: "/DSC_0012.jpeg",
    // Optional dark theme profile image - shown when dark mode is active
    darkProfileImage: "/night-dp.png"
  },

  // ===================================
  // HERO SECTION
  // ===================================
  hero: {
    greeting: "Hi, I'm",
    cta: {
      primary: "View My Work",
      secondary: "Download Resume"
    }
  },

  // ===================================
  // ABOUT SECTION
  // ===================================
  about: {
    paragraphs: [
      "I'm a passionate developer with a keen eye for design and a love for clean, efficient code. With years of experience in web development, I specialize in building modern, responsive applications that deliver exceptional user experiences.",
      "My journey in tech started with curiosity and evolved into a career where I get to solve complex problems daily. I believe in continuous learning and staying updated with the latest technologies and best practices.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community."
    ],
    stats: [
      {
        value: "3+",
        label: "Years Experience"
      },
      {
        value: "3",
        label: "Projects Completed"
      },
     // {
      //   value: "30+",
      //   label: "Happy Clients"
      // }
    ]
  },

  // ===================================
  // SKILLS
  // ===================================
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'TypeScript', level: 85 },
        { name: 'Three.js', level: 80 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', level: 88 },
        { name: 'FastAPI', level: 82 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ],

  // ===================================
  // WORK EXPERIENCE
  // ===================================
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'InApp',
      period: 'Jan 2025 – Present',
      description:
        'Full-time · Thiruvananthapuram, Kerala, India. Leading AI- and Python-focused feature work with ownership from design through delivery.',
      highlights: [
        'Design and deliver intelligent product capabilities using AI tooling and Python',
        'Own technical direction for features alongside architecture and code quality goals',
        'Collaborate cross-functionally to ship reliable, maintainable solutions'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'InApp',
      period: 'Jul 2023 – Dec 2024',
      description:
        'Full-time, on-site · Thiruvananthapuram, Kerala, India. Built and maintained production features across Python services and React.js applications.',
      highlights: [
        'Implemented full-stack features with Python backends and React.js frontends',
        'Worked on-site with product and engineering peers in an agile delivery rhythm',
        'Contributed to APIs, integrations, and performance-minded UI work'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'InApp',
      period: 'Jul 2022 – Jul 2023',
      description:
        'Full-time · Thiruvananthapuram, Kerala, India. Started the InApp journey with a strong emphasis on React.js and growing into broader stack ownership.',
      highlights: [
        'Developed React.js components and screens for customer-facing products',
        'Learned production practices through code reviews, testing, and iteration',
        'Supported feature delivery in collaboration with senior engineers'
      ]
    }
  ],

  // ===================================
  // PROJECTS
  // ===================================
  projects: {
    sectionTitle: "Featured Projects",
    sectionSubtitle: "Here are some of my recent projects that showcase my skills and experience",
    items: [
      {
        title: 'remind-mcp',
        description:
          'Lets AI assistants manage your Linux calendar reminders in plain language—built on the remind tool so you skip the tricky syntax.',
        tags: ['Python', 'Linux'],
        image: '📅',
        github: 'https://github.com/joelsebbu/remind-mcp'
      },
      {
        title: 'StackMark',
        description:
          'A personal bookmark app: save links from social feeds, YouTube, or the open web, then search what you saved in plain language.',
        tags: ['Python', 'AI', 'Web'],
        image: '🔖',
        github: 'https://github.com/joelsebbu/stackMark'
      },
      {
        title: 'Portfolio',
        description:
          'My personal site—who I am, what I\'ve worked on, and how to reach me.',
        tags: ['React', 'Web'],
        image: '💼',
        github: 'https://github.com/joelsebbu/Portfolio'
      }
    ]
  },

  // ===================================
  // CONTACT & RESUME
  // ===================================
  contact: {
    email: "joel18sebastian@gmail.com",
    resumeSection: {
      title: "Get My Resume",
      description: "Interested in working together? Download my resume to learn more about my experience, skills, and achievements.",
      buttons: {
        download: "Download Resume",
        contact: "Contact Me"
      },
      downloadAlert: "Resume download functionality will be implemented here. Please add your resume PDF to the public folder."
    }
  },

  // ===================================
  // SOCIAL MEDIA LINKS
  // ===================================
  social: {
    github: {
      url: "https://github.com/joelsebbu",
      display: "github.com/joelsebbu"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/joel-j-sebastian/",
      display: "linkedin.com/in/joel-j-sebastian"
    },
    twitter: {
      url: "https://x.com/joelsebbu",
      display: "x.com/joelsebbu"
    }
  },

  // ===================================
  // NAVIGATION
  // ===================================
  navigation: {
    logo: "Portfolio",
    links: [
      { name: "About", id: "about" },
      { name: "Experience", id: "experience" },
      { name: "Skills", id: "skills" },
      { name: "Projects", id: "projects" },
      { name: "Resume", id: "resume" }
    ]
  },

  // ===================================
  // FOOTER
  // ===================================
  footer: {
    logo: "Portfolio",
    tagline: "Building the future, one line of code at a time.",
    copyright: "Joel J Sebastian",
    builtWith: "Built with React & ❤️",
    sections: {
      quickLinks: "Quick Links",
      connect: "Connect"
    }
  }
};

export default portfolioData;
