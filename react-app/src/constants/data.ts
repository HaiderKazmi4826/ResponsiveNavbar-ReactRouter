import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SocialItem } from '../types/types'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 4,
    url: '/blog',
    text: 'blog',
  },
]


export const social: SocialItem[] = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: FaFacebook ,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: FaTwitter,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: FaLinkedin,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: FaBehance,
  },
]