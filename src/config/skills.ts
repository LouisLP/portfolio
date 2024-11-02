enum SkillLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
  Expert = 'expert',
}
interface Skill {
  skillKey: string
  level?: SkillLevel
  years?: number
}

interface SkillCategory {
  categoryTitleKey: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    categoryTitleKey: 'languages',
    skills: [
      { skillKey: 'typescriptJavascript', level: SkillLevel.Intermediate, years: 2 },
      { skillKey: 'sql', level: SkillLevel.Advanced, years: 4 },
      { skillKey: 'python', level: SkillLevel.Intermediate, years: 3 },
      // { skillKey: 'Java', level: SkillLevel.Intermediate, years: 2 },
      { skillKey: 'cPlusPlus', level: SkillLevel.Beginner, years: 1 },
    ],
  },
  {
    categoryTitleKey: 'frontendDevelopment',
    skills: [
      { skillKey: 'vueJs', level: SkillLevel.Intermediate, years: 1 },
      { skillKey: 'reactJs', level: SkillLevel.Intermediate, years: 1 },
      { skillKey: 'htmlCss', level: SkillLevel.Expert, years: 5 },
      { skillKey: 'tailwindCss', level: SkillLevel.Advanced, years: 2 },
    ],
  },
  {
    categoryTitleKey: 'backendAndDevOps',
    skills: [
      { skillKey: 'nodeJs', level: SkillLevel.Advanced, years: 3 },
      { skillKey: 'docker', level: SkillLevel.Intermediate, years: 2 },
      { skillKey: 'ciCd', level: SkillLevel.Intermediate, years: 2 },
      { skillKey: 'git', level: SkillLevel.Advanced, years: 4 },
    ],
  },
  {
    categoryTitleKey: 'databases',
    skills: [
      { skillKey: 'mySql', level: SkillLevel.Advanced, years: 3 },
      { skillKey: 'postgreSql', level: SkillLevel.Advanced, years: 3 },
      { skillKey: 'mongoDb', level: SkillLevel.Intermediate, years: 2 },
    ],
  },
  {
    categoryTitleKey: 'creative',
    skills: [
      { skillKey: 'videoEditing', level: SkillLevel.Expert, years: 11 },
      { skillKey: 'motionGraphics', level: SkillLevel.Expert, years: 8 },
      { skillKey: 'photography', level: SkillLevel.Advanced, years: 4 },
    ],
  },
]
