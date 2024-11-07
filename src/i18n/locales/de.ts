export default {
  header: {
    name: 'Louis Lascelles-Palys',
    blurb:
      'Kanadischer Entwickler, wohnhaft in Berlin. Zuvor professioneller Videoeditor in Berlin und Los Angeles für die Gaming-Industrie.',
  },
  work: {
    title: 'Berufserfahrung',
    companies: {
      jobreel: 'Jobreel',
      misfits: 'Misfits Gaming Group',
      msg: 'Madison Square Garden Entertainment',
      clg: 'Counter Logic Gaming',
      tempoStorm: 'Tempo Storm',
    },
    roles: {
      fullStackDeveloper: 'Full-Stack-Entwickler',
      seniorVideoEditorAndMotionDesigner: 'Senior Video Editor & Motion Designer',
      videoEditorAndDesigner: 'Video Editor & Designer',
      videoProducer: 'Videoproduzent',
      writer: 'Autor',
    },
    descriptions: {
      jobreelDescription:
        'End-to-end-Entwicklung von Jobreels Kernanwendung und Admin-Panel, Architekturschichtlösungen mit Vue.js, Node.js und MongoDB. Führende technische und UI/UX-Verbesserungen über den gesamten Entwicklungsstapel.',
      misfitsDescription:
        'Spearheading Videobearbeitung und Motion Design für mehrere erstklassige Esports-Divisionen, einschließlich der LEC-, CDL- und OWL-Teams. Leitung und Mentoring eines Teams von Editoren bei umfangreichen Reisen durch Europa für große Wettbewerbe. Orchestrierung der Inhaltserstellung für mehrere Markenidentitäten innerhalb der Organisation.',
      msgDescription:
        'Produktion von wirkungsvollem Video-Content, Motion Design und Event-Designs für eine der renommiertesten Unterhaltungsstätten der Welt nach der Übernahme von Counter Logic Gaming.',
      clgDescription:
        'Erstellung von strategischem Video-Content für mehrere Teams in wichtigen Esports-Titeln, direkte Zusammenarbeit mit dem CEO und wichtigen Stakeholdern. Produktion von professionellem Content für die Divisionen League of Legends und Overwatch, Beitrag zum Markenwachstum und Zuschauerengagement.',
    },
  },
  skills: {
    title: 'Fähigkeiten',
    categories: {
      languages: 'Sprachen',
      frontendDevelopment: 'Frontend-Entwicklung',
      backendAndDevOps: 'Backend & DevOps',
      databases: 'Databases',
      creative: 'Kreativ',
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
      videoEditing: 'Videobearbeitung',
      motionGraphics: 'Motion Graphics',
      photography: 'Fotografie',
    },
  },
  education: {
    title: 'Ausbildung',
    schools: {
      ubc: 'University of British Columbia',
      sfu: 'Simon Fraser University',
      langara: 'Langara College',
    },
    programs: {
      bachelorOfScienceComputerScience: 'BSc Informatik',
      computerScience: 'Informatik',
      iat: 'Interaktive Kunst & Technologie',
    },
  },
  projects: {
    title: 'Projekte',
    titles: {
      directedStudies: 'Angeleitete Studien & Veröffentlichung',
      prairieLearnRanked: 'PrairieLearn Ranked',
    },
    descriptions: {
      directedStudiesDescription:
        'Angeleitete Studien an der UBC unter Dr. Ramon Lawrence - Erwerb von Branchenerfahrung in Systemadministration und Backend-Entwicklung. Später Co-Autor eines Papiers mit dem Titel "Live Session Gamification using PrairieLearn"',
      prairieLearnRankedDescription:
        'Abschlussprojekt an der UBC, Erstellung eines Ranking-Systems für die PrairieLearn-Quiz-Plattform, um Studenten dabei zu helfen, ihre Leistung in Live- und asynchronen Einstellungen einzuschätzen.',
    },
  },
} as const
