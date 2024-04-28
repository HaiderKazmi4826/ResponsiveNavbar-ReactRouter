import { IconType } from 'react-icons';

export interface SocialItem {
    id: number;
  url: string;
  icon: IconType; // Use JSX.Element as the type for icon
}