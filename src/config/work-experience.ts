import agileRobotsLogo from '/assets/logos/work/agileRobots.jpg'
import clgLogo from '/assets/logos/work/clg.png'
import jobreelLogo from '/assets/logos/work/jobreel.png'
import misfitsLogo from '/assets/logos/work/misfits.png'
import msgLogo from '/assets/logos/work/msg-dark.png'

interface Job {
  companyKey: string
  roleKey: string
  descriptionKey: string
  startYear: string
  endYear: string
  icon: string
  needsIconInvert?: boolean
}

export const jobs: Job[] = [
  {
    companyKey: 'agileRobots',
    roleKey: 'softwareEngineer',
    descriptionKey: 'agileRobotsDescription',
    startYear: '2025',
    endYear: 'Present',
    icon: agileRobotsLogo,
  },
  {
    companyKey: 'jobreel',
    roleKey: 'fullStackDeveloper',
    descriptionKey: 'jobreelDescription',
    startYear: '2024',
    endYear: '2025',
    icon: jobreelLogo,
  },
  {
    companyKey: 'misfits',
    roleKey: 'seniorVideoEditorAndMotionDesigner',
    descriptionKey: 'misfitsDescription',
    startYear: '2018',
    endYear: '2021',
    icon: misfitsLogo,
  },
  {
    companyKey: 'msg',
    roleKey: 'videoEditorAndDesigner',
    descriptionKey: 'msgDescription',
    startYear: '2017',
    endYear: '2017',
    icon: msgLogo,
  },
  {
    companyKey: 'clg',
    roleKey: 'videoProducer',
    descriptionKey: 'clgDescription',
    startYear: '2017',
    endYear: '2017',
    icon: clgLogo,
  },
]
