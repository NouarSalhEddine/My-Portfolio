import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: '',
  //   icon: FaTwitter,
  // },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nouar_salheddine/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/salheddine-nouar-a3bb13243/',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: '',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/NouarSalhEddine',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/nouarsalheddine',
    icon: FaDev,
  },
]
