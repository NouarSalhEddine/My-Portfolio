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
       Contributed to the design and development of a comprehensive .NET payment integration project for a client
       That covered credit card payments and subscription management.
       Introduced Stripe as a new payment provider within the system architecture.
       Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Udergone training for .NET Sitecore 10,
        Sitecore SXA and different topologies it provides.{' '} and Passed {' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link>
      </>,
    ],
  },
  SCG: {
    name: 'Scentregroup',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://www.scentregroup.com/',
    position: 'Software Engineer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/scg/SCG_400x400.jpg',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple Contentful and Bynder extensions to improve BX process
        better.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new
        marketing vendor that can scale and also enable us to have
        personalisation as well, selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
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
      <>
        Developed static web applications using jQuery, HTML, and CSS.

      </>,
      <>
        Collaborated with designers to translate mockups into fully functional web pages.

      </>,
      <>
        Ensured cross-browser compatibility and optimized web pages for performance.

      </>,
      <>
        Created UML diagrams to document system architecture, workflows, and data models.

      </>,
      <>
        Analyzed requirements and designed software solutions using UML diagrams to ensure clarity and alignment with business needs. 
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
