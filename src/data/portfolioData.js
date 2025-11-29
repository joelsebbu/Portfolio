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
    title: "Full Stack Developer | UI/UX Enthusiast | Problem Solver",
    tagline: "I craft elegant solutions to complex problems. Passionate about building user-centric applications that make a difference.",
    // For page title and meta tags
    pageTitle: "joelsebbu - me",
    // Profile image - place your image in /public folder and reference it here
    // Example: "/profile.jpg" or "/images/profile.png"
    // Leave as null to use the default placeholder
    profileImage: null
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
        value: "5",
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
        { name: 'React', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 }
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
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.',
      highlights: [
        'Architected and deployed microservices handling 1M+ requests daily',
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers in agile environment'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality solutions.',
      highlights: [
        'Built responsive web applications serving 100K+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Integrated third-party APIs and payment systems'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Contributed to frontend and backend development. Learned industry best practices and modern development workflows.',
      highlights: [
        'Developed reusable UI components in React',
        'Participated in code reviews and testing',
        'Collaborated with cross-functional teams'
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
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '🛒',
        github: '#',
        live: '#'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
        tags: ['React', 'Firebase', 'Material-UI'],
        image: '📋',
        github: '#',
        live: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
        tags: ['React', 'API Integration', 'Charts'],
        image: '🌤️',
        github: '#',
        live: '#'
      },
      {
        title: 'Social Media Analytics',
        description: 'Analytics platform for social media metrics with data visualization, reporting features, and insights generation.',
        tags: ['Next.js', 'PostgreSQL', 'D3.js'],
        image: '📊',
        github: '#',
        live: '#'
      },
      {
        title: 'Portfolio Generator',
        description: 'No-code portfolio builder allowing users to create beautiful portfolios with customizable themes and templates.',
        tags: ['React', 'Express', 'AWS'],
        image: '🎨',
        github: '#',
        live: '#'
      },
      {
        title: 'Chat Application',
        description: 'Real-time chat application with private messaging, group chats, file sharing, and message encryption.',
        tags: ['React', 'Socket.io', 'Node.js'],
        image: '💬',
        github: '#',
        live: '#'
      }
    ]
  },

  // ===================================
  // CONTACT & RESUME
  // ===================================
  contact: {
    email: "your.email@example.com",
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
      url: "https://github.com/yourusername",
      display: "github.com/yourusername"
    },
    linkedin: {
      url: "https://linkedin.com/in/yourprofile",
      display: "linkedin.com/in/yourprofile"
    },
    twitter: {
      url: "https://x.com/yourusername",
      display: "x.com/yourusername"
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
    copyright: "Your Name",
    builtWith: "Built with React & ❤️",
    sections: {
      quickLinks: "Quick Links",
      connect: "Connect"
    }
  }
};

export default portfolioData;
