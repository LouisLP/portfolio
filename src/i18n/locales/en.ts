export default {
  header: {
    name: 'Louis Lascelles-Palys',
    blurb:
      'Canadian developer living in Berlin, Germany. Previously a professional video editor in Berlin and Los Angeles for the gaming industry.',
  },
  work: {
    title: 'Work',
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
        'Frontend and backend development for the Jobreel application and admin-panel, utilizing Vue.js, Node.js with Express, MongoDB, Supertokens, and more.',
      misfitsDescription:
        'Video editing and motion design for all teams in the Misfits Gaming Group, based in Berlin, Germany. Involved traveling various competitive events across Europe, managing several other editors. Encompassed 3 main teams in the LEC, CDL, and OWL, as well as individual brands.',
      msgDescription:
        "Madison Square Garden's acquisition of CLG provided several opportunities to work for them directly, including promotional videos, event recaps, and Fan Fest designs.",
      clgDescription:
        "Video editing and production in Los Angeles, California for the company's CEO (Devin Nash), the Overwatch team, and the League of Legends team.",
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
      bachelorOfScienceComputerScience: 'Bachelor of Science, Computer Science',
      computerScience: 'Computer Science',
      iat: 'Interactive Arts & Technology',
    },
  },
} as const
