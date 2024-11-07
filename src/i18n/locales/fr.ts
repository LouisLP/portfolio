export default {
  header: {
    name: 'Louis Lascelles-Palys',
    blurb:
      "Développeur canadien qui vit à Berlin. Anciennement monteur vidéo professionnel à Berlin et Los Angeles pour l'industrie de jeux vidéo.",
  },
  work: {
    title: 'Expérience professionnelle',
    companies: {
      jobreel: 'Jobreel',
      misfits: 'Misfits Gaming Group',
      msg: 'Madison Square Garden Entertainment',
      clg: 'Counter Logic Gaming',
      tempoStorm: 'Tempo Storm',
    },
    roles: {
      fullStackDeveloper: 'Développeur full-stack',
      seniorVideoEditorAndMotionDesigner: 'Monteur vidéo senior et motion designer',
      videoEditorAndDesigner: 'Monteur vidéo et designer',
      videoProducer: 'Producteur vidéo',
      writer: 'Rédacteur',
    },
    descriptions: {
      jobreelDescription:
        "Développement de l'application principale et du panneau d'administration de Jobreel, en architecturant des solutions utilisant Vue.js, Node.js et MongoDB. Améliorations techniques et UI/UX à travers l'application complète.",
      misfitsDescription:
        "Monteur vidéo et motion design principal pour plusieurs divisions d'esports, notamment les équipes LEC, CDL et OWL. Gestion d'une équipe de monteurs, tout en voyageant intensivement à travers l'Europe. Orchestration de la création de contenu pour plusieurs joueurs de l'organisation.",
      msgDescription:
        "Production de contenu vidéo, de motion design et de designs d'événements pour l'un des sites de divertissement les plus renommés au monde lors de son acquisition de Counter Logic Gaming.",
      clgDescription:
        "Création de contenu vidéo stratégique pour plusieurs équipes à travers les principaux titres d'esports, en travaillant directement avec le PDG et les principales parties prenantes. Production de contenu de qualité professionnelle pour les divisions League of Legends et Overwatch, contribuant à la croissance de la marque et à l'engagement du public.",
    },
  },
  skills: {
    title: 'Compétences',
    categories: {
      languages: 'Langues',
      frontendDevelopment: 'Développement frontend',
      backendAndDevOps: 'Backend & DevOps',
      databases: 'Databases',
      creative: 'Créatif',
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
      videoEditing: 'Montage vidéo',
      motionGraphics: 'Motion Graphics',
      photography: 'Photographie',
    },
  },
  education: {
    title: 'Éducation',
    schools: {
      ubc: 'Université de la Colombie-Britannique',
      sfu: 'Université Simon Fraser',
      langara: 'Collège Langara',
    },
    programs: {
      bachelorOfScienceComputerScience: 'BSc, Informatique',
      computerScience: 'Informatique',
      iat: 'Arts interactifs et technologie',
    },
  },
  projects: {
    title: 'Projets',
    titles: {
      directedStudies: 'Études dirigées et publication',
      prairieLearnRanked: 'PrairieLearn Ranked',
    },
    descriptions: {
      directedStudiesDescription:
        'Études dirigées à UCB sous la direction de Dr Ramon Lawrence - expérience de niveau industriel en administration système et développement backend. Co-auteur d\'un article intitulé "Live Session Gamification using PrairieLearn".',
      prairieLearnRankedDescription:
        "Projet de fin d'études à UCB: création d'un système de classement pour la plateforme de quiz \"PrairieLearn\" afin d'aider les étudiants à évaluer leur performance dans des contextes asynchrones.",
    },
  },
} as const
