const jobreelLogo = new URL('@/assets/logos/work/jobreel.png', import.meta.url)
const misfitsLogo = new URL('@/assets/logos/work/misfits.png', import.meta.url)
const msgLogo = new URL('@/assets/logos/work/msg-dark.png', import.meta.url)
const clgLogo = new URL('@/assets/logos/work/clg.png', import.meta.url)

interface Job {
  companyKey: string
  roleKey: string
  descriptionKey: string
  startYear: string
  endYear: string
  icon: URL
  needsIconInvert?: boolean
}

export const jobs: Job[] = [
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
