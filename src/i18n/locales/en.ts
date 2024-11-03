export default {
  header: {
    name: 'Louis Lascelles-Palys',
    blurb:
      'Canadian developer living in Berlin, Germany. Previously a professional video editor in Berlin and Los Angeles for the gaming industry.',
  },
  work: {
    title: 'Work Experience',
    companies: {
      jobreel: 'Jobreel',
      misfits: 'Misfits Gaming Group',
      msg: 'Madison Square Garden Entertainment',
      clg: 'Counter Logic Gaming',
      tempoStorm: 'Tempo Storm',
    },
    roles: {
      fullStackDeveloper: 'Full Stack Developer',
      seniorVideoEditorAndMotionDesigner: 'Senior Video Editor & Motion Designer',
      videoEditorAndDesigner: 'Video Editor & Designer',
      videoProducer: 'Video Producer',
      writer: 'Writer',
    },
    descriptions: {
      jobreelDescription:
        "End-to-end development of Jobreel's core application and admin panel, architecting solutions using Vue.js, Node.js, and MongoDB. Drove technical and UI/UX improvements across the full development stack.",
      misfitsDescription:
        'Spearheaded video editing and motion design across multiple premier esports divisions, including the LEC, CDL, and OWL teams. Managed and mentored a team of editors while traveling extensively throughout Europe for major competitions. Orchestrated content creation for multiple brand identities within the organization.',
      msgDescription:
        "Produced high-impact video content, motion design, and event designs for one of the world's most renowned entertainment venues upon their acquisition of Counter Logic Gaming.",
      clgDescription:
        'Created strategic video content for multiple teams across major esports titles, working directly with the CEO and key stakeholders. Produced professional-grade content for both League of Legends and Overwatch divisions, contributing to brand growth and audience engagement.',
    },
  },
  skills: {
    title: 'Skills',
    categories: {
      languages: 'Languages',
      frontendDevelopment: 'Frontend Development',
      backendAndDevOps: 'Backend & DevOps',
      databases: 'Databases',
      creative: 'Creative',
    },
    skills: {
      typescriptJavascript: 'TypeScript/JavaScript',
      sql: 'SQL',
      python: 'Python',
      cPlusPlus: 'C++',
      vueJs: 'Vue.js',
      reactJs: 'React.js',
      htmlCss: 'HTML/CSS',
      tailwindCss: 'Tailwind CSS',
      nodeJs: 'Node.js',
      docker: 'Docker',
      ciCd: 'CI/CD',
      git: 'Git',
      mySql: 'MySQL',
      postgreSql: 'PostgreSQL',
      mongoDb: 'MongoDB',
      videoEditing: 'Video Editing',
      motionGraphics: 'Motion Graphics',
      photography: 'Photography',
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
      directedStudies: 'Directed Studies & Publication',
      prairieLearnRanked: 'PrairieLearn Ranked',
    },
    descriptions: {
      directedStudiesDescription:
        'Directed studies at UBC under Dr. Ramon Lawrence — gaining industry-level experience in system administration and backend development. Later co-authored a paper titled "Live Session Gamification using PrairieLearn"',
      prairieLearnRankedDescription:
        'Capstone project at UBC, creating a ranking system for the PrairieLearn quizzing platform to help students gauge performance in live and asynchronous settings.',
    },
  },
} as const
