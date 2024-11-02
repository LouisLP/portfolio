enum SkillLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
  Expert = 'expert',
}
interface Skill {
  name: string
  level?: SkillLevel
  years?: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript/JavaScript', level: SkillLevel.Intermediate, years: 2 },
      { name: 'SQL', level: SkillLevel.Advanced, years: 4 },
      { name: 'Python', level: SkillLevel.Intermediate, years: 3 },
      // { name: 'Java', level: SkillLevel.Intermediate, years: 2 },
      { name: 'C++', level: SkillLevel.Beginner, years: 1 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Vue.js', level: SkillLevel.Intermediate, years: 1 },
      { name: 'React.js', level: SkillLevel.Intermediate, years: 1 },
      { name: 'HTML/CSS', level: SkillLevel.Expert, years: 5 },
      { name: 'Tailwind CSS', level: SkillLevel.Advanced, years: 2 },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js', level: SkillLevel.Advanced, years: 3 },
      { name: 'Docker', level: SkillLevel.Intermediate, years: 2 },
      { name: 'CI/CD', level: SkillLevel.Intermediate, years: 2 },
      { name: 'Git', level: SkillLevel.Advanced, years: 4 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: SkillLevel.Advanced, years: 3 },
      { name: 'PostgreSQL', level: SkillLevel.Advanced, years: 3 },
      { name: 'MongoDB', level: SkillLevel.Intermediate, years: 2 },
    ],
  },
  {
    title: 'Creative',
    skills: [
      { name: 'Video Editing', level: SkillLevel.Expert, years: 11 },
      { name: 'Motion Graphics', level: SkillLevel.Expert, years: 8 },
      { name: 'Photography', level: SkillLevel.Advanced, years: 4 },
    ],
  },
]
