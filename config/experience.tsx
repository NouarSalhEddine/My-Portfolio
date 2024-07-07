import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'OmranSoftware',
    longName: 'Omran Consulthing Mourad. Delivery Center',
    subDetail: 'Consulthing Mourad. Delivery Center',
    url: 'https://www.omransoftware.com/',
    position: 'Software Developer / Scrum Master',
    duration: 'Jan 2023 - Jun 2024',
    logo: {
      light: '/worked_at_logos/omran/logo-omran.png',
      dark: '/worked_at_logos/omran/logo-omran.png',
    },
    roles: [
      <>
        Built an Arabic-language NLP client enabling ChatGPT-like conversational
        interactions.
      </>,
      <>
        Spearheaded micro frontend architecture implementation for scalability
        and modularity.
      </>,
      <>
        Migrated a legacy desktop app to a modern web app, improving performance
        by 40%.
      </>,
      <>
        Collaborated with the design team to optimize UI/UX and elevate visual
        aesthetics.
      </>,
      <>
        Introduced and implemented comprehensive end-to-end testing strategies.
      </>,
    ],
  },
  SCG: {
    name: 'TemTem',
    longName: '',
    subDetail: '',
    url: 'https://www.temtemone.com/#/',
    position: 'Frontend Developer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/temtem/temtem.png',
      dark: '/worked_at_logos/temtem/temtem.png',
    },
    roles: [
      <>
        Build the landing page, enhancing load efficiency and engagement for
        10K+ monthly visitors.
      </>,
      <>
        Developed frontend interfaces to meet design specification and follow UX
        best practices.
      </>,
      <>
        Collaborated on RESTful API integration for seamless data flow across
        systems.
      </>,
      <>
        Achieved cross-browser compatibility and performance with a 95+
        Lighthouse score.
      </>,
    ],
  },
  Blotocol: {
    name: 'Acces Trades Co.',
    longName: 'Acces Trades ',
    subDetail: 'Co.',
    url: 'https://accesstradesco.com/',
    position: 'Junior Software Developer',
    duration: 'Aug 2016 - Nov 2018',
    logo: {
      light: '/worked_at_logos/acces trades/acces.png',
      dark: '/worked_at_logos/acces trades/acces.png',
    },
    roles: [
      <>
        {' '}
        Developed high-performing e-commerce pages achieving 98% cross-browser
        compatibility.
      </>,
      <>
        Created UML diagrams for clear system architecture and process
        documentation.
      </>,
      <>
        Provided timely technical support and implemented bug fixes based on
        users feedback.
      </>,
      <>
        Ensured proactive technical support, minimizing downtime and users
        disruption.
      </>,
      <>
        Enforced best practices through regular code reviews to maintain
        high-quality standards.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
