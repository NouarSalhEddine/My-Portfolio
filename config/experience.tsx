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
    longName: 'Deloitte Consulthing Phils. Delivery Center',
    subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://www.omransoftware.com/',
    position: 'Software Engineer / Scrum Master',
    duration: 'Jan 2023 - Jun 2024',
    logo: {
      light: '/worked_at_logos/omran/logo-omran.png',
      dark: '/worked_at_logos/omran/logo-omran.png',
    },
    roles: [
      <>
        Managed a team of 5 developers, providing mentorship and guidance on
        best practices and design patterns.
      </>,
      <>
        Developed and maintained scalable web applications using React.js,
        Node.js, and GraphQL.
      </>,
      <>
        Facilitated communication between microfrontends using Postal.js,
        ensuring seamless data flow and integration across different components.
      </>,
      <>
        Migrated legacy systems to modern web frameworks, improving development
        speed by 30%.
      </>,
      <>
        Enhanced application performance through code optimization and
        refactoring.
      </>,

      <>
        Collaborated with UX/UI designers to improve user experience and
        application aesthetics.
      </>,
      <>
        Implemented unit and integration tests using Jest and React testing
        library to ensure code quality.
      </>,
    ],
  },
  SCG: {
    name: 'TemTem',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://www.temtemone.com/#/',
    position: 'Frontend Developer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/temtem/temtem.png',
      dark: '/worked_at_logos/temtem/temtem.png',
    },
    roles: [
      <>
        Develop and test React.JS applications that meet accessibility and web
        browser standards for the website.
      </>,
      <>
        Use React-router to transform the application into a Single Page
        Application.
      </>,
      <>
        Work using (React JS components, forms, events, keys, router,
        animations, and flux concept).
      </>,
    ],
  },
  Blotocol: {
    name: 'Acces Trades Co.',
    longName: 'Acces Trades Co.',
    subDetail: 'formerly IVP Global Inc.',
    url: 'https://accesstradesco.com/',
    position: 'Junior Software Engineer',
    duration: 'Aug 2016 - Nov 2018',
    logo: {
      light: '/worked_at_logos/acces trades/acces.png',
      dark: '/worked_at_logos/acces trades/acces.png',
    },
    roles: [
      <>Developed static web applications using jQuery, HTML, and CSS.</>,
      <>
        Collaborated with designers to translate mockups into fully functional
        web pages.
      </>,
      <>
        Ensured cross-browser compatibility and optimized web pages for
        performance.
      </>,
      <>
        Created UML diagrams to document system architecture, workflows, and
        data models.
      </>,
      <>
        Analyzed requirements and designed software solutions using UML diagrams
        to ensure clarity and alignment with business needs.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
