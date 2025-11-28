export default {
  header: {
    name: 'Louis Lascelles-Palys',
    blurb:
      'Canadian developer in Berlin, merging creative and technical skills. Former video editor and motion designer for the competitive gaming industry.',
  },
  work: {
    title: 'Work Experience',
    companies: {
      agileRobots: 'Agile Robots',
      jobreel: 'Jobreel',
      misfits: 'Misfits Gaming Group',
      msg: 'Madison Square Garden Entertainment',
      clg: 'Counter Logic Gaming',
      tempoStorm: 'Tempo Storm',
    },
    roles: {
      softwareEngineer: 'Software Engineer',
      fullStackDeveloper: 'Full Stack Developer',
      seniorVideoEditorAndMotionDesigner: 'Senior Video Editor & Motion Designer',
      videoEditorAndDesigner: 'Video Editor & Designer',
      videoProducer: 'Video Producer',
      writer: 'Writer',
    },
    descriptions: {
      agileRobotsDescription:
        'Working on AgileCore\'s IDE team, building a customizable IDE that enables operators to define and adapt robot actions. Using Vue with TypeScript, GraphQL, and Python/Django. Other projects included a data hub (shop) using Nuxt, Prisma (SQLite), BetterAuth, and Stripe.',

      jobreelDescription:
        'Full-stack development of core job-matching application and admin panel using Vue.js, Node.js, and MongoDB. Led technical and UX improvements across the entire stack.',

      misfitsDescription:
        'Led video editing and motion design for premier esports teams (in the LEC, CDL, OWL). Managed a team of editors and created content for multiple brand identities across Europe.',

      msgDescription:
        'Produced video content, motion design, and event materials for world-renowned entertainment venue following their acquisition of Counter Logic Gaming.',

      clgDescription:
        'Created and edited video content for the League of Legends and Overwatch teams, working directly with the CEO and stakeholders to drive brand growth and engagement.',
    },
  },
  skills: {
    title: 'Skills',
    categories: {
      core: 'Languages & Core Skills',
      frontendDevelopment: 'Frontend Development',
      backendDevelopment: 'Backend/Meta Development',
      databases: 'Database Technologies',
      creative: 'Creative',
    },
    skills: {
      typescriptJavascript: 'TypeScript/JavaScript',
      sql: 'SQL',
      python: 'Python',
      cPlusPlus: 'C++',
      java: 'Java',
      ciCd: 'CI/CD',
      git: 'Git',
      testing: 'Testing',
      documentation: 'Documentation',
      vueJs: 'Vue',
      reactJs: 'React',
      nuxt: 'Nuxt',
      svelteJs: 'Svelte',
      htmlCss: 'HTML/CSS',
      tailwindCss: 'Tailwind CSS',
      nodeJs: 'Node.js',
      docker: 'Docker',
      apiDevelopment: 'API Development',
      mySql: 'MySQL',
      postgreSql: 'PostgreSQL',
      mongoDb: 'MongoDB',
      dbDesign: 'Database Design',
      dbMigration: 'Database Migrations',
      videoEditing: 'Video Editing',
      motionGraphics: 'Motion Graphics',
      photography: 'Photography',
      uiUxDesign: 'UI/UX Design',
      figma: 'Figma',
      adobeCreativeSuite: 'Adobe Creative Suite',
    },
  },
  education: {
    title: 'Education',
    schools: {
      ubc: 'University of British-Columbia',
      sfu: 'Simon Fraser University',
      langara: 'Langara College',
    },
    programs: {
      bachelorOfScienceComputerScience: 'BSc, Computer Science',
      computerScience: 'Computer Science',
      iat: 'Interactive Arts & Technology',
    },
  },
  projects: {
    title: 'Projects',
    titles: {
      directedStudies: 'Publication & Directed Studies',
      prairieLearnRanked: 'PrairieLearn Ranked',
    },
    descriptions: {
      directedStudiesDescription:
        'Directed studies at UBC under Dr. Ramon Lawrence — gaining industry-level experience in system administration and backend development. Later co-authored a paper titled "Live Session Gamification using PrairieLearn".',
      prairieLearnRankedDescription:
        'Capstone project at UBC, creating a ranking system for the PrairieLearn quizzing platform to help students gauge performance in live and asynchronous settings.',
    },
  },
  downloadFullResume: 'Download Full Resume',
} as const
